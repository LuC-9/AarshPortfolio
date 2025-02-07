import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export function registerRoutes(app: Express): Server {
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, message } = req.body;

      const formattedMessage = `
New Contact Form Submission
--------------------------
Name: ${name}
Email: ${email}
Message: ${message}
`;

      const response = await fetch(
        `https://api.telegram.org/bot5558392279:AAHzj1ZwLFxusJrPddvQzChYKVpWxyFYTTQ/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: "728907666",
            text: formattedMessage,
            parse_mode: "HTML",
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send message to Telegram");
      }

      res.json({ success: true });
    } catch (error) {
      console.error("Telegram notification error:", error);
      res.status(500).json({ message: "Failed to send message" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}