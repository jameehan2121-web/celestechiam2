import { Heart, Youtube, Instagram, Linkedin, Facebook, Mic } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      name: "YouTube",
      href: "https://www.youtube.com/@CreativityDates",
      icon: Youtube,
      hoverColor: "hover:text-[#FF0000]",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/celeste.chiam/?hl=en",
      icon: Instagram,
      hoverColor: "hover:text-[#E4405F]",
    },
    {
      name: "Spotify",
      href: "https://open.spotify.com/show/5zeZR5XWOiyswbqx5HpipN?si=e2c153911a3c46f3&nd=1&dlsi=5ae7e11b0de3496a",
      icon: Mic, // Using Mic as a proxy for Podcast/Spotify
      hoverColor: "hover:text-[#1DB954]",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/celeste-chiam-19b781153/",
      icon: Linkedin,
      hoverColor: "hover:text-[#0A66C2]",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/celeste.chiam/",
      icon: Facebook,
      hoverColor: "hover:text-[#1877F2]",
    },
  ];

  return (
    <footer className="bg-background py-12 border-t border-border">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <p className="font-serif text-lg font-medium text-foreground">Celeste Chiam</p>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        <div className="flex items-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-muted-foreground transition-colors transform hover:scale-125 duration-300 ${link.hoverColor}`}
              aria-label={link.name}
            >
              <link.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Designed with</span>
          <Heart className="w-4 h-4 fill-primary text-primary" />
          <span>for creatives</span>
        </div>
      </div>
    </footer>
  );
}
