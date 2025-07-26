import { supabase } from "./supabase";
import exifr from "exifr";

const mediaService = {
  // Upload file to Supabase Storage
  async uploadFile(file, userId) {
    try {
      const fileExt = file.name.split(".").pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `${userId}/${fileName}`;

      const { data, error } = await supabase.storage
        .from("media")
        .upload(filePath, file);

      if (error) {
        return { success: false, error: error.message };
      }

      // Get public URL
      const {
        data: { publicUrl },
      } = supabase.storage.from("media").getPublicUrl(filePath);

      return { success: true, data: { ...data, publicUrl } };
    } catch (error) {
      return { success: false, error: "Failed to upload file." };
    }
  },

  // Extract EXIF data from image
  async extractExifData(file) {
    try {
      if (!file.type.startsWith("image/")) {
        return { success: true, data: null };
      }

      const exifData = await exifr.parse(file);

      if (!exifData) {
        return { success: true, data: null };
      }

      return {
        success: true,
        data: {
          dateTaken: exifData?.DateTimeOriginal || exifData?.DateTime || null,
          latitude: exifData?.latitude || null,
          longitude: exifData?.longitude || null,
          camera:
            exifData?.Make && exifData?.Model
              ? `${exifData.Make} ${exifData.Model}`
              : null,
        },
      };
    } catch (error) {
      return { success: true, data: null }; // Don't fail if EXIF extraction fails
    }
  },

  // Create media entry
  async createMediaEntry(mediaData) {
    try {
      const { data, error } = await supabase
        .from("media_entries")
        .insert([mediaData])
        .select()
        .single();

      if (error) {
        return { success: false, error: error.message };
      }

      return { success: true, data };
    } catch (error) {
      if (error?.message?.includes("Failed to fetch")) {
        return {
          success: false,
          error:
            "Cannot connect to database. Your Supabase project may be paused or deleted. Please visit your Supabase dashboard to check project status.",
        };
      }
      return { success: false, error: "Failed to create media entry." };
    }
  },

  // Get user's media entries
  async getUserMedia(userId, options = {}) {
    try {
      let query = supabase
        .from("media_entries")
        .select("*")
        .eq("user_id", userId)
        .order("date_taken", { ascending: false, nullsLast: true });

      if (options?.fileType) {
        query = query.eq("file_type", options.fileType);
      }

      if (options?.limit) {
        query = query.limit(options.limit);
      }

      if (options?.offset) {
        query = query.range(
          options.offset,
          options.offset + (options.limit || 50) - 1,
        );
      }

      const { data, error } = await query;

      if (error) {
        return { success: false, error: error.message };
      }

      return { success: true, data };
    } catch (error) {
      if (error?.message?.includes("Failed to fetch")) {
        return {
          success: false,
          error:
            "Cannot connect to database. Your Supabase project may be paused or deleted. Please visit your Supabase dashboard to check project status.",
        };
      }
      return { success: false, error: "Failed to load media." };
    }
  },

  // Update media entry
  async updateMediaEntry(mediaId, updates) {
    try {
      const { data, error } = await supabase
        .from("media_entries")
        .update(updates)
        .eq("id", mediaId)
        .select()
        .single();

      if (error) {
        return { success: false, error: error.message };
      }

      return { success: true, data };
    } catch (error) {
      if (error?.message?.includes("Failed to fetch")) {
        return {
          success: false,
          error:
            "Cannot connect to database. Your Supabase project may be paused or deleted. Please visit your Supabase dashboard to check project status.",
        };
      }
      return { success: false, error: "Failed to update media entry." };
    }
  },

  // Delete media entry
  async deleteMediaEntry(mediaId) {
    try {
      const { error } = await supabase
        .from("media_entries")
        .delete()
        .eq("id", mediaId);

      if (error) {
        return { success: false, error: error.message };
      }

      return { success: true };
    } catch (error) {
      if (error?.message?.includes("Failed to fetch")) {
        return {
          success: false,
          error:
            "Cannot connect to database. Your Supabase project may be paused or deleted. Please visit your Supabase dashboard to check project status.",
        };
      }
      return { success: false, error: "Failed to delete media entry." };
    }
  },

  // Get media for timeline (grouped by date)
  async getTimelineData(userId) {
    try {
      const { data, error } = await supabase
        .from("media_entries")
        .select(
          "id, file_name, file_type, file_url, date_taken, description, tags, created_at",
        )
        .eq("user_id", userId)
        .eq("status", "ready")
        .order("date_taken", { ascending: false, nullsLast: true });

      if (error) {
        return { success: false, error: error.message };
      }

      return { success: true, data };
    } catch (error) {
      if (error?.message?.includes("Failed to fetch")) {
        return {
          success: false,
          error:
            "Cannot connect to database. Your Supabase project may be paused or deleted. Please visit your Supabase dashboard to check project status.",
        };
      }
      return { success: false, error: "Failed to load timeline data." };
    }
  },
};

export default mediaService;
