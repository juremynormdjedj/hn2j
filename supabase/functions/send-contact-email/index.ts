import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormRequest {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Received request to send-contact-email function");

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, company, subject, message }: ContactFormRequest = await req.json();

    console.log("Processing contact form submission from:", email);

    // Validate required fields
    if (!name || !email || !subject || !message) {
      console.error("Missing required fields");
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Send notification email to HN2J team
    const notificationEmail = await resend.emails.send({
      from: "HN2J Contact <onboarding@resend.dev>",
      to: ["contact@hn2j.com"],
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #3A8DFF; border-bottom: 2px solid #7A4DFF; padding-bottom: 10px;">
            New Contact Form Submission
          </h1>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0 0 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 0 0 10px 0;"><strong>Email:</strong> ${email}</p>
            ${company ? `<p style="margin: 0 0 10px 0;"><strong>Company:</strong> ${company}</p>` : ''}
            <p style="margin: 0 0 10px 0;"><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #ffffff; border: 1px solid #e9ecef; padding: 20px; border-radius: 8px;">
            <h3 style="color: #0B1020; margin-top: 0;">Message:</h3>
            <p style="color: #333; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          
          <p style="color: #8B8FA3; font-size: 12px; margin-top: 20px;">
            This email was sent from the HN2J website contact form.
          </p>
        </div>
      `,
    });

    console.log("Notification email sent:", notificationEmail);

    // Send confirmation email to the user
    const confirmationEmail = await resend.emails.send({
      from: "HN2J <onboarding@resend.dev>",
      to: [email],
      subject: "We received your message - HN2J",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #3A8DFF;">Thank you for contacting HN2J, ${name}!</h1>
          
          <p style="color: #333; line-height: 1.6;">
            We have received your message regarding "<strong>${subject}</strong>" and our team will get back to you within 24 hours.
          </p>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0B1020; margin-top: 0;">Your message:</h3>
            <p style="color: #666; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          
          <p style="color: #333; line-height: 1.6;">
            In the meantime, feel free to explore our services or contact us directly if you have any urgent questions.
          </p>
          
          <p style="color: #333;">
            Best regards,<br>
            <strong style="color: #7A4DFF;">The HN2J Team</strong>
          </p>
          
          <hr style="border: none; border-top: 1px solid #e9ecef; margin: 30px 0;" />
          
          <p style="color: #8B8FA3; font-size: 12px;">
            HN2J - Innovation closer to you<br>
            <a href="mailto:contact@hn2j.com" style="color: #3A8DFF;">contact@hn2j.com</a>
          </p>
        </div>
      `,
    });

    console.log("Confirmation email sent:", confirmationEmail);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Emails sent successfully" 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
