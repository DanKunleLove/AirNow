
'use client';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LucideAirVent } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LandingHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-lg border-b" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-primary p-2 rounded-lg">
            <LucideAirVent className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className={cn("text-xl font-bold font-headline", isScrolled ? "text-foreground" : "text-white")}>AirNow</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <button onClick={() => handleScrollTo('services')} className={cn("hover:text-primary transition-colors", isScrolled ? "text-foreground" : "text-white")}>Services</button>
          <button onClick={() => handleScrollTo('how-it-works')} className={cn("hover:text-primary transition-colors", isScrolled ? "text-foreground" : "text-white")}>How It Works</button>
          <button onClick={() => handleScrollTo('testimonials')} className={cn("hover:text-primary transition-colors", isScrolled ? "text-foreground" : "text-white")}>Testimonials</button>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" onClick={() => router.push('/login')} className={cn(isScrolled ? "text-foreground" : "text-white hover:bg-white/10 hover:text-white")}>
            Sign In
          </Button>
          <Button onClick={() => router.push('/login')}>Sign Up</Button>
        </div>
      </div>
    </header>
  );
}
