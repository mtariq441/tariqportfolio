import { Router } from "express";
import { storage } from "./storage";
import { insertMeetingSchema } from "../shared/schema";
import { z } from "zod";

const router = Router();

router.get("/api/meetings", async (_req, res) => {
  try {
    const meetings = await storage.getMeetings();
    res.json(meetings);
  } catch (error) {
    console.error("Error fetching meetings:", error);
    res.status(500).json({ error: "Failed to fetch meetings" });
  }
});

router.get("/api/meetings/:date", async (req, res) => {
  try {
    const { date } = req.params;
    const meetings = await storage.getMeetingsByDate(date);
    res.json(meetings);
  } catch (error) {
    console.error("Error fetching meetings by date:", error);
    res.status(500).json({ error: "Failed to fetch meetings" });
  }
});

router.post("/api/meetings", async (req, res) => {
  try {
    const validatedData = insertMeetingSchema.parse(req.body);
    
    const existingMeetings = await storage.getMeetingsByDate(validatedData.date);
    const conflictingMeeting = existingMeetings.find(
      (meeting) => meeting.time === validatedData.time
    );

    if (conflictingMeeting) {
      return res.status(409).json({ 
        error: "This time slot is already booked. Please choose another time." 
      });
    }

    const meeting = await storage.createMeeting(validatedData);
    res.status(201).json(meeting);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ 
        error: "Validation error", 
        details: error.errors 
      });
    }
    console.error("Error creating meeting:", error);
    res.status(500).json({ error: "Failed to create meeting" });
  }
});

router.delete("/api/meetings/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await storage.deleteMeeting(id);
    
    if (!deleted) {
      return res.status(404).json({ error: "Meeting not found" });
    }
    
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting meeting:", error);
    res.status(500).json({ error: "Failed to delete meeting" });
  }
});

export default router;
