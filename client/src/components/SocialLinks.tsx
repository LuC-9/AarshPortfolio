import { Button } from "./ui/button";
import { SiGithub, SiLinkedin, SiLeetcode, SiReplit } from "react-icons/si";
import { FileText } from "lucide-react";

export default function SocialLinks() {
  const socials = [
    {
      href: "https://www.linkedin.com/in/aarsh-mishra09/",
      icon: SiLinkedin,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/LuC-9",
      icon: SiGithub,
      label: "GitHub",
    },
    {
      href: "https://leetcode.com/u/LuC9/",
      icon: SiLeetcode,
      label: "LeetCode",
    },
    {
      href: "https://replit.com/",
      icon: SiReplit,
      label: "Replit",
    },
  ];

  return (
    <div className="flex items-center gap-2">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <social.icon className="w-5 h-5" />
        </a>
      ))}
      <Button
        variant="outline"
        size="sm"
        className="gap-2"
        asChild
      >
        <a href="/Mishra_Aarsh.pdf" target="_blank" rel="noopener noreferrer">
          <FileText className="w-4 h-4" />
          Resume
        </a>
      </Button>
    </div>
  );
}
