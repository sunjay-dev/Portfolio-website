import * as v from "valibot";

// Shared schema for the contact form payload — used by the /api/email
// route and the client-side form.
export const contactFormSchema = v.object({
  email: v.pipe(
    v.string("Email is required"),
    v.nonEmpty("Please enter your email address"),
    v.email("Please enter a valid email address")
  ),
  message: v.pipe(
    v.string("Message is required"),
    v.nonEmpty("Please enter a message"),
    v.maxLength(2000, "Message is too long (max 2000 characters)")
  ),
});

export type ContactForm = v.InferOutput<typeof contactFormSchema>;

export function parseContactForm(input: unknown) {
  return v.safeParse(contactFormSchema, input);
}
