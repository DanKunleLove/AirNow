
'use client';

import {Button} from '@/components/ui/button';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {ArrowRight, ShieldCheck, Star, Wrench, Zap} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import LandingHeader from '@/components/layout/LandingHeader';
import QuickActionButton from '@/components/layout/QuickActionButton';

const services = [
  {
    icon: <Wrench className="h-8 w-8 text-primary" />,
    title: 'Installation',
    description: 'Expert installation of all major HVAC brands and models.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: 'Maintenance',
    description:
      'Scheduled maintenance to keep your system running at peak efficiency.',
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: 'Repairs',
    description: 'Fast and reliable repairs to get your system back online.',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-primary"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 8V4H8" />
        <rect width="16" height="12" x="4" y="8" rx="2" />
        <path d="M2 14h2" />
        <path d="M20 14h2" />
        <path d="M15 13v2" />
        <path d="M9 13v2" />
      </svg>
    ),
    title: 'AI Recommendations',
    description:
      'Smart recommendations to optimize your energy consumption and savings.',
  },
];

const testimonials = [
  {
    name: 'John Doe',
    review:
      'AirNow was a lifesaver! My AC broke down in the middle of a heatwave and they had it fixed within hours. The technician was professional and courteous. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Jane Smith',
    review:
      'I was very impressed with the AI recommendation feature. It helped me optimize my energy consumption and I’ve already seen a significant reduction in my electricity bill.',
    rating: 5,
  },
  {
    name: 'Peter Jones',
    review:
      'The installation of my new HVAC system was seamless. The team was efficient, clean, and very professional. I couldn’t be happier with the service.',
    rating: 5,
  },
];

export default function LandingPage() {
  const router = useRouter();

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <LandingHeader />
      <main className="flex-1">
        <section className="relative h-[80vh] flex items-center justify-center text-white">
          <Image
            src="https://placehold.co/1200x800.png"
            alt="HVAC background"
            layout="fill"
            objectFit="cover"
            className="z-0"
            data-ai-hint="HVAC background"
            priority
          />
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="relative z-20 text-center p-4">
            <h1 className="text-4xl md:text-6xl font-bold font-headline">
              Your Comfort, Our Priority
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
              We provide top-notch HVAC services to ensure your home is always
              at the perfect temperature. From installation to maintenance and
              repairs, we have you covered.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button
                size="lg"
                onClick={() => handleScrollTo('services')}
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white hover:text-black transition-colors"
              >
                Explore More
              </Button>
              <Button size="lg" onClick={() => router.push('/login')}>
                Get Started
              </Button>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-transparent">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center font-headline mb-12">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="text-center glassmorphic-card hover:transform hover:-translate-y-2 transition-transform duration-300">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      {service.icon}
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-20 bg-transparent">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center font-headline mb-12">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Book a Service</h3>
                <p className="text-muted-foreground">
                  Choose the service you need and book an appointment through
                  our easy-to-use platform.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  We Service Your System
                </h3>
                <p className="text-muted-foreground">
                  Our certified technicians will arrive on time and provide
                  expert service for your HVAC system.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Enjoy Your Comfort
                </h3>
                <p className="text-muted-foreground">
                  Relax in your comfortable home, knowing your HVAC system is in
                  top condition.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20 bg-transparent">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center font-headline mb-12">
              What Our Customers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="glassmorphic-card">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="mb-4">{testimonial.review}</p>
                    <p className="font-semibold text-right">
                      - {testimonial.name}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 text-center bg-transparent">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-headline mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-8">
              Sign up today to manage your HVAC services and get personalized
              recommendations.
            </p>
            <Button size="lg" onClick={() => router.push('/login')}>
              Sign Up Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>
      <QuickActionButton/>
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center md:flex md:justify-between md:items-center">
          <p>&copy; 2024 AirNow. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
