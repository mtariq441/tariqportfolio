import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, Clock, Video, ChevronLeft, ChevronRight, Globe } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM"
];

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [timezone, setTimezone] = useState("America/New_York");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleScheduleMeeting = () => {
    if (selectedDate && selectedTime) {
      toast({
        title: "Meeting scheduled!",
        description: `Your meeting is set for ${format(selectedDate, "MMMM d, yyyy")} at ${selectedTime}`,
      });
    } else {
      toast({
        title: "Please select a date and time",
        description: "Choose both a date and time slot to schedule your meeting.",
        variant: "destructive"
      });
    }
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
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      required
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      required
                      data-testid="input-email"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project..."
                      rows={8}
                      required
                      data-testid="input-message"
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg" data-testid="button-submit">
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

                  {selectedDate && (
                    <div className="space-y-3">
                      <h4 className="font-medium text-sm">Available Times</h4>
                      <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2">
                        {timeSlots.map((time) => (
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

                    {selectedDate && selectedTime && (
                      <Button 
                        className="w-full" 
                        size="lg" 
                        onClick={handleScheduleMeeting}
                        data-testid="button-schedule-meeting"
                      >
                        Confirm Meeting
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
