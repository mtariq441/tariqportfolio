import type { Meeting, InsertMeeting } from "../shared/schema";

export interface IStorage {
  getMeetings(): Promise<Meeting[]>;
  getMeetingById(id: string): Promise<Meeting | undefined>;
  getMeetingsByDate(date: string): Promise<Meeting[]>;
  createMeeting(meeting: InsertMeeting): Promise<Meeting>;
  deleteMeeting(id: string): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private meetings: Map<string, Meeting> = new Map();

  async getMeetings(): Promise<Meeting[]> {
    return Array.from(this.meetings.values());
  }

  async getMeetingById(id: string): Promise<Meeting | undefined> {
    return this.meetings.get(id);
  }

  async getMeetingsByDate(date: string): Promise<Meeting[]> {
    return Array.from(this.meetings.values()).filter(
      (meeting) => meeting.date === date
    );
  }

  async createMeeting(insertMeeting: InsertMeeting): Promise<Meeting> {
    const id = crypto.randomUUID();
    const meeting: Meeting = {
      id,
      ...insertMeeting,
      createdAt: new Date().toISOString(),
    };
    this.meetings.set(id, meeting);
    return meeting;
  }

  async deleteMeeting(id: string): Promise<boolean> {
    return this.meetings.delete(id);
  }
}

export const storage = new MemStorage();
