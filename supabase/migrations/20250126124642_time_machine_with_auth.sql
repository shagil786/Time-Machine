-- Location: supabase/migrations/20250126124642_time_machine_with_auth.sql
-- Time Machine: Complete timeline-based media archive system with authentication

-- 1. Types and Core Tables
CREATE TYPE public.user_role AS ENUM ('admin', 'user');
CREATE TYPE public.media_type AS ENUM ('image', 'video', 'document', 'note');
CREATE TYPE public.media_status AS ENUM ('processing', 'ready', 'failed');

-- Critical intermediary table for PostgREST compatibility
CREATE TABLE public.user_profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id),
    email TEXT NOT NULL UNIQUE,
    full_name TEXT NOT NULL,
    avatar_url TEXT,
    role public.user_role DEFAULT 'user'::public.user_role,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Media entries table for storing uploaded content
CREATE TABLE public.media_entries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES public.user_profiles(id) ON DELETE CASCADE,
    file_url TEXT,
    file_name TEXT NOT NULL,
    file_type public.media_type NOT NULL,
    file_size BIGINT,
    content TEXT, -- For notes or extracted text
    date_taken TIMESTAMPTZ, -- From EXIF or user input
    location_name TEXT,
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    description TEXT,
    tags TEXT[], -- Array of tags
    status public.media_status DEFAULT 'processing'::public.media_status,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Collections/Albums for organizing media
CREATE TABLE public.collections (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES public.user_profiles(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    description TEXT,
    is_public BOOLEAN DEFAULT false,
    cover_media_id UUID REFERENCES public.media_entries(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Junction table for media-collection relationships
CREATE TABLE public.collection_media (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    collection_id UUID REFERENCES public.collections(id) ON DELETE CASCADE,
    media_id UUID REFERENCES public.media_entries(id) ON DELETE CASCADE,
    added_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(collection_id, media_id)
);

-- Timeline events for special moments
CREATE TABLE public.timeline_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES public.user_profiles(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    event_date TIMESTAMPTZ NOT NULL,
    location_name TEXT,
    is_milestone BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- 2. Essential Indexes
CREATE INDEX idx_user_profiles_user_id ON public.user_profiles(id);
CREATE INDEX idx_media_entries_user_id ON public.media_entries(user_id);
CREATE INDEX idx_media_entries_date_taken ON public.media_entries(date_taken);
CREATE INDEX idx_media_entries_file_type ON public.media_entries(file_type);
CREATE INDEX idx_media_entries_status ON public.media_entries(status);
CREATE INDEX idx_collections_user_id ON public.collections(user_id);
CREATE INDEX idx_collection_media_collection_id ON public.collection_media(collection_id);
CREATE INDEX idx_collection_media_media_id ON public.collection_media(media_id);
CREATE INDEX idx_timeline_events_user_id ON public.timeline_events(user_id);
CREATE INDEX idx_timeline_events_date ON public.timeline_events(event_date);

-- 3. RLS Setup
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.media_entries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.collections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.collection_media ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.timeline_events ENABLE ROW LEVEL SECURITY;

-- 4. Helper Functions
CREATE OR REPLACE FUNCTION public.is_media_owner(media_uuid UUID)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
AS $$
SELECT EXISTS (
    SELECT 1 FROM public.media_entries me
    WHERE me.id = media_uuid AND me.user_id = auth.uid()
)
$$;

CREATE OR REPLACE FUNCTION public.is_collection_owner(collection_uuid UUID)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
AS $$
SELECT EXISTS (
    SELECT 1 FROM public.collections c
    WHERE c.id = collection_uuid AND c.user_id = auth.uid()
)
$$;

CREATE OR REPLACE FUNCTION public.can_access_collection(collection_uuid UUID)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
AS $$
SELECT EXISTS (
    SELECT 1 FROM public.collections c
    WHERE c.id = collection_uuid AND (
        c.user_id = auth.uid() OR c.is_public = true
    )
)
$$;

CREATE OR REPLACE FUNCTION public.is_event_owner(event_uuid UUID)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
AS $$
SELECT EXISTS (
    SELECT 1 FROM public.timeline_events te
    WHERE te.id = event_uuid AND te.user_id = auth.uid()
)
$$;

-- Function for automatic profile creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
SECURITY DEFINER
LANGUAGE plpgsql
AS $$
BEGIN
  INSERT INTO public.user_profiles (id, email, full_name, role)
  VALUES (
    NEW.id, 
    NEW.email, 
    COALESCE(NEW.raw_user_meta_data->>'full_name', split_part(NEW.email, '@', 1)),
    COALESCE((NEW.raw_user_meta_data->>'role')::public.user_role, 'user'::public.user_role)
  );  
  RETURN NEW;
END;
$$;

-- Trigger for new user creation
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$;

-- Triggers for updated_at
CREATE TRIGGER update_user_profiles_updated_at
    BEFORE UPDATE ON public.user_profiles
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at();

CREATE TRIGGER update_media_entries_updated_at
    BEFORE UPDATE ON public.media_entries
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at();

CREATE TRIGGER update_collections_updated_at
    BEFORE UPDATE ON public.collections
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at();

-- 5. RLS Policies
CREATE POLICY "users_own_profile" ON public.user_profiles FOR ALL
USING (auth.uid() = id) WITH CHECK (auth.uid() = id);

CREATE POLICY "users_manage_own_media" ON public.media_entries FOR ALL
USING (public.is_media_owner(id)) WITH CHECK (public.is_media_owner(id));

CREATE POLICY "users_manage_own_collections" ON public.collections FOR ALL
USING (public.is_collection_owner(id)) WITH CHECK (public.is_collection_owner(id));

CREATE POLICY "collection_access_control" ON public.collection_media FOR ALL
USING (public.can_access_collection(collection_id)) 
WITH CHECK (public.is_collection_owner(collection_id));

CREATE POLICY "users_manage_own_events" ON public.timeline_events FOR ALL
USING (public.is_event_owner(id)) WITH CHECK (public.is_event_owner(id));

-- 6. Storage policies (for file uploads)
INSERT INTO storage.buckets (id, name, public) VALUES ('media', 'media', false);

CREATE POLICY "Users can upload media" ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'media' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can view own media" ON storage.objects FOR SELECT
USING (bucket_id = 'media' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can delete own media" ON storage.objects FOR DELETE
USING (bucket_id = 'media' AND auth.uid()::text = (storage.foldername(name))[1]);

-- 7. Complete Mock Data
DO $$
DECLARE
    admin_uuid UUID := gen_random_uuid();
    user_uuid UUID := gen_random_uuid();
    media1_uuid UUID := gen_random_uuid();
    media2_uuid UUID := gen_random_uuid();
    media3_uuid UUID := gen_random_uuid();
    collection_uuid UUID := gen_random_uuid();
    event_uuid UUID := gen_random_uuid();
BEGIN
    -- Create auth users with required fields
    INSERT INTO auth.users (
        id, instance_id, aud, role, email, encrypted_password, email_confirmed_at,
        created_at, updated_at, raw_user_meta_data, raw_app_meta_data,
        is_sso_user, is_anonymous, confirmation_token, confirmation_sent_at,
        recovery_token, recovery_sent_at, email_change_token_new, email_change,
        email_change_sent_at, email_change_token_current, email_change_confirm_status,
        reauthentication_token, reauthentication_sent_at, phone, phone_change,
        phone_change_token, phone_change_sent_at
    ) VALUES
        (admin_uuid, '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated',
         'admin@timemachine.com', crypt('admin123', gen_salt('bf', 10)), now(), now(), now(),
         '{"full_name": "Time Machine Admin", "role": "admin"}'::jsonb, '{"provider": "email", "providers": ["email"]}'::jsonb,
         false, false, '', null, '', null, '', '', null, '', 0, '', null, null, '', '', null),
        (user_uuid, '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated',
         'user@example.com', crypt('user123', gen_salt('bf', 10)), now(), now(), now(),
         '{"full_name": "John Doe", "role": "user"}'::jsonb, '{"provider": "email", "providers": ["email"]}'::jsonb,
         false, false, '', null, '', null, '', '', null, '', 0, '', null, null, '', '', null);

    -- Create sample media entries
    INSERT INTO public.media_entries (id, user_id, file_name, file_type, content, date_taken, description, tags, status) VALUES
        (media1_uuid, user_uuid, 'vacation_photo.jpg', 'image'::public.media_type, null, '2024-07-15 14:30:00+00', 'Beautiful sunset at the beach during our summer vacation', ARRAY['vacation', 'beach', 'sunset'], 'ready'::public.media_status),
        (media2_uuid, user_uuid, 'graduation_video.mp4', 'video'::public.media_type, null, '2024-05-20 10:00:00+00', 'My college graduation ceremony - such a proud moment!', ARRAY['graduation', 'milestone', 'education'], 'ready'::public.media_status),
        (media3_uuid, user_uuid, 'travel_journal.txt', 'note'::public.media_type, 'Today I visited the most amazing place. The mountains were breathtaking and the local culture was so welcoming. This trip has been life-changing.', '2024-08-10 18:00:00+00', 'Personal reflection from my mountain hiking adventure', ARRAY['travel', 'journal', 'mountains'], 'ready'::public.media_status);

    -- Create sample collection
    INSERT INTO public.collections (id, user_id, name, description, cover_media_id) VALUES
        (collection_uuid, user_uuid, 'Summer 2024 Memories', 'All the amazing moments from my summer adventures', media1_uuid);

    -- Add media to collection
    INSERT INTO public.collection_media (collection_id, media_id) VALUES
        (collection_uuid, media1_uuid),
        (collection_uuid, media2_uuid);

    -- Create sample timeline event
    INSERT INTO public.timeline_events (id, user_id, title, description, event_date, is_milestone) VALUES
        (event_uuid, user_uuid, 'College Graduation', 'Completed my Bachelor''s degree in Computer Science with honors', '2024-05-20 10:00:00+00', true);

EXCEPTION
    WHEN foreign_key_violation THEN
        RAISE NOTICE 'Foreign key error: %', SQLERRM;
    WHEN unique_violation THEN
        RAISE NOTICE 'Unique constraint error: %', SQLERRM;
    WHEN OTHERS THEN
        RAISE NOTICE 'Unexpected error: %', SQLERRM;
END $$;