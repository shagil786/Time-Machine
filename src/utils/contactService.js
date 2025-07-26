import { supabase } from "./supabase";

const contactService = {
  // Submit contact form
  async submitContactForm(formData) {
    try {
      const { data, error } = await supabase
        .from("contact_submissions")
        .insert([
          {
            name: formData.name,
            email: formData.email,
            inquiry_type: formData.inquiryType,
            subject: formData.subject,
            message: formData.message,
            priority: formData.priority,
            status: "new",
            created_at: new Date().toISOString(),
          },
        ])
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
      return { success: false, error: "Failed to submit contact form." };
    }
  },

  // Get contact submissions (for admin use)
  async getContactSubmissions(options = {}) {
    try {
      let query = supabase
        .from("contact_submissions")
        .select("*")
        .order("created_at", { ascending: false });

      if (options?.status) {
        query = query.eq("status", options.status);
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
      return { success: false, error: "Failed to load contact submissions." };
    }
  },

  // Update contact submission status
  async updateContactStatus(submissionId, status) {
    try {
      const { data, error } = await supabase
        .from("contact_submissions")
        .update({
          status: status,
          updated_at: new Date().toISOString(),
        })
        .eq("id", submissionId)
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
      return { success: false, error: "Failed to update contact status." };
    }
  },
};

export default contactService;
