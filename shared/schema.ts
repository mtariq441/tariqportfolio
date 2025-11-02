import { z } from "zod";

const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
const timeRegex = /^(0?[1-9]|1[0-2]):[0-5]\d\s?(AM|PM)$/i;

export const meetingSchema = z.object({
  id: z.string().min(1),
  attendeeName: z.string().min(2, "Name must be at least 2 characters"),
  attendeeEmail: z.string().email("Invalid email address"),
  date: z.string().regex(dateRegex, "Date must be in YYYY-MM-DD format").min(1, "Date is required"),
  time: z.string().regex(timeRegex, "Invalid time format").min(1, "Time is required"),
  timezone: z.string().min(1, "Timezone is required"),
  notes: z.string().optional(),
  createdAt: z.string(),
});

export const insertMeetingSchema = meetingSchema.omit({ id: true, createdAt: true });

export type Meeting = z.infer<typeof meetingSchema>;
export type InsertMeeting = z.infer<typeof insertMeetingSchema>;
