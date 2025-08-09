
'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import ActiveOrdersCard from '@/components/dashboard/ActiveOrdersCard';
import AiAssistantCard from '@/components/dashboard/AiAssistantCard';
import FinancialInsightsCard from '@/components/dashboard/FinancialInsightsCard';
import GamificationCard from '@/components/dashboard/GamificationCard';
import PastServicesCard from '@/components/dashboard/PastServicesCard';
import PersonalTipsCard from '@/components/dashboard/PersonalTipsCard';
import QuickActionButton from '@/components/layout/QuickActionButton';
import TechnicianTrackerCard from '@/components/dashboard/TechnicianTrackerCard';
import UpcomingAppointmentsCard from '@/components/dashboard/UpcomingAppointmentsCard';
import { useToast } from '@/components/ui/use-toast';

export default function DashboardPage() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (!loading && !user) {
      router.replace('/login');
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (user) {
      toast({
        title: 'Welcome Back!',
        description: `You are logged in as ${user.email}`,
      });
    }
  }, [user, toast]);


  if (loading) {
    return (
        <div className="flex items-center justify-center min-h-screen">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
          <style jsx>{`
            .loader {
              border-top-color: hsl(var(--primary));
              animation: spinner 1.5s linear infinite;
            }
            @keyframes spinner {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
      </div>
    );
  }

  if (!user) {
    return null; // Redirecting
  }

  return (
    <div className="space-y-6">
       <div className="space-y-1">
        <h1 className="text-2xl font-bold font-headline md:text-3xl">
          Welcome back, {user.email}!
        </h1>
        <p className="text-muted-foreground">
          Here's a snapshot of your HVAC system and services.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <UpcomingAppointmentsCard />
                <ActiveOrdersCard/>
            </div>
            <FinancialInsightsCard />
            <PastServicesCard />
        </div>
        <div className="lg:col-span-1 space-y-6">
            <TechnicianTrackerCard />
            <PersonalTipsCard />
            <GamificationCard />
        </div>
      </div>
       <AiAssistantCard />
       <QuickActionButton />
    </div>
  );
}
