import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, Clock, Video, Globe, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useQuery, useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { format } from "date-fns";
import type { Meeting, InsertMeeting } from "../../../shared/schema";

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM"
];

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  
  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [timezone, setTimezone] = useState("America/New_York");
  const [attendeeName, setAttendeeName] = useState("");
  const [attendeeEmail, setAttendeeEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [isBooked, setIsBooked] = useState(false);

  const formattedDate = selectedDate ? format(selectedDate, "yyyy-MM-dd") : "";

  const { data: bookedMeetings = [] } = useQuery<Meeting[]>({
    queryKey: ["/api/meetings", formattedDate],
    enabled: !!selectedDate,
  });

  const bookedTimes = new Set(bookedMeetings.map(m => m.time));
  const availableTimeSlots = timeSlots.filter(time => !bookedTimes.has(time));

  const scheduleMeetingMutation = useMutation({
    mutationFn: async (data: InsertMeeting) => {
      const res = await apiRequest("POST", "/api/meetings", data);
      return await res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/meetings"] });
      setIsBooked(true);
      toast({
        title: "Meeting scheduled!",
        description: `Your meeting is confirmed for ${format(selectedDate!, "MMMM d, yyyy")} at ${selectedTime}`,
      });
      
      setTimeout(() => {
        setSelectedDate(undefined);
        setSelectedTime("");
        setAttendeeName("");
        setAttendeeEmail("");
        setNotes("");
        setIsBooked(false);
      }, 3000);
    },
    onError: (error: any) => {
      toast({
        title: "Booking failed",
        description: error.message || "This time slot may already be booked. Please try another time.",
        variant: "destructive"
      });
    },
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setContactFormData({ name: "", email: "", message: "" });
  };

  const handleScheduleMeeting = () => {
    if (!selectedDate || !selectedTime || !attendeeName || !attendeeEmail) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields and select a date and time.",
        variant: "destructive"
      });
      return;
    }

    const meetingData: InsertMeeting = {
      attendeeName,
      attendeeEmail,
      date: formattedDate,
      time: selectedTime,
      timezone,
      notes: notes || undefined,
    };

    scheduleMeetingMutation.mutate(meetingData);
  };

  return (
    <section id="contact" className="py-20 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Schedule your consultation call today
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Send me a message or schedule a meeting
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              <form onSubmit={handleContactSubmit}>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="contact-name"
                      value={contactFormData.name}
                      onChange={(e) => setContactFormData({ ...contactFormData, name: e.target.value })}
                      placeholder="Your name"
                      required
                      data-testid="input-contact-name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="contact-email"
                      type="email"
                      value={contactFormData.email}
                      onChange={(e) => setContactFormData({ ...contactFormData, email: e.target.value })}
                      placeholder="your@email.com"
                      required
                      data-testid="input-contact-email"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="contact-message"
                      value={contactFormData.message}
                      onChange={(e) => setContactFormData({ ...contactFormData, message: e.target.value })}
                      placeholder="Tell me about your project..."
                      rows={8}
                      required
                      data-testid="input-contact-message"
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg" data-testid="button-contact-submit">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </div>
              </form>
            </Card>
          </motion.div>

          {/* Meeting Scheduler */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="p-8 h-full">
              {!isBooked ? (
                <div className="grid md:grid-cols-5 gap-6">
                  {/* Meeting Details - Left Side */}
                  <div className="md:col-span-2 space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">30 Minute Meeting</h3>
                      <div className="space-y-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>45 min</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Video className="h-4 w-4 mt-0.5" />
                          <span>Web conferencing details provided upon confirmation.</span>
                        </div>
                      </div>
                    </div>

                    {/* Attendee Information Form */}
                    {!selectedTime && (
                      <div className="space-y-4">
                        <h4 className="font-medium text-sm">Your Information</h4>
                        <Input
                          placeholder="Your Name *"
                          value={attendeeName}
                          onChange={(e) => setAttendeeName(e.target.value)}
                          data-testid="input-attendee-name"
                        />
                        <Input
                          type="email"
                          placeholder="Your Email *"
                          value={attendeeEmail}
                          onChange={(e) => setAttendeeEmail(e.target.value)}
                          data-testid="input-attendee-email"
                        />
                        <Textarea
                          placeholder="Additional notes (optional)"
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          rows={3}
                          data-testid="input-meeting-notes"
                        />
                      </div>
                    )}

                    {selectedDate && attendeeName && attendeeEmail && (
                      <div className="space-y-3">
                        <h4 className="font-medium text-sm">
                          Available Times
                          {availableTimeSlots.length === 0 && (
                            <span className="text-destructive ml-2">(No slots available)</span>
                          )}
                        </h4>
                        <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2">
                          {availableTimeSlots.map((time) => (
                            <Button
                              key={time}
                              variant={selectedTime === time ? "default" : "outline"}
                              className="w-full justify-start"
                              onClick={() => setSelectedTime(time)}
                              data-testid={`button-time-${time.replace(/[:\s]/g, '-')}`}
                            >
                              {time}
                            </Button>
                          ))}
                          {availableTimeSlots.length === 0 && (
                            <p className="text-sm text-muted-foreground">
                              All time slots are booked for this day. Please select another date.
                            </p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Calendar - Right Side */}
                  <div className="md:col-span-3">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">Select a Date & Time</h4>
                      
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={(date) => date < new Date()}
                        className="rounded-md border w-full"
                        data-testid="calendar-scheduler"
                      />

                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-medium">
                          <Globe className="h-4 w-4" />
                          Time zone
                        </label>
                        <Select value={timezone} onValueChange={setTimezone}>
                          <SelectTrigger data-testid="select-timezone">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="America/New_York">Eastern Time (ET)</SelectItem>
                            <SelectItem value="America/Chicago">Central Time (CT)</SelectItem>
                            <SelectItem value="America/Denver">Mountain Time (MT)</SelectItem>
                            <SelectItem value="America/Los_Angeles">Pacific Time (PT)</SelectItem>
                            <SelectItem value="Asia/Karachi">Pakistan Time (PKT)</SelectItem>
                            <SelectItem value="Europe/London">London Time (GMT)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {selectedDate && selectedTime && attendeeName && attendeeEmail && (
                        <Button 
                          className="w-full" 
                          size="lg" 
                          onClick={handleScheduleMeeting}
                          disabled={scheduleMeetingMutation.isPending}
                          data-testid="button-schedule-meeting"
                        >
                          {scheduleMeetingMutation.isPending ? "Scheduling..." : "Confirm Meeting"}
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="mx-auto w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                    <Check className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Meeting Scheduled!</h3>
                  <p className="text-muted-foreground mb-1">
                    {format(selectedDate!, "MMMM d, yyyy")} at {selectedTime}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    A confirmation email will be sent to {attendeeEmail}
                  </p>
                </div>
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
