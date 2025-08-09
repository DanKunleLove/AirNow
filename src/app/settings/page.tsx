'use client';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload } from "lucide-react";
import { useState, useEffect } from "react";

export default function SettingsPage() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = (checked: boolean) => {
    if (checked) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  if (!mounted) {
    return null; // or a loading skeleton
  }
  
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold font-headline">Settings</h1>
      <Tabs defaultValue="profile" className="w-full">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="security">Login & Security</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
        </TabsList>
        <TabsContent value="profile" className="mt-6">
          <Card className="glassmorphic-card">
            <CardHeader>
              <CardTitle>Public Profile</CardTitle>
              <CardDescription>Customize your public profile information.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="https://placehold.co/100x100.png" alt="User avatar" data-ai-hint="person avatar" />
                  <AvatarFallback>UN</AvatarFallback>
                </Avatar>
                <Button variant="outline">
                    <Upload className="mr-2 h-4 w-4"/>
                    Change Photo
                </Button>
              </div>
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="user_name" />
              </div>
               <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="user@example.com" />
              </div>
              <Button>Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="security" className="mt-6">
          <Card className="glassmorphic-card">
            <CardHeader>
              <CardTitle>Login & Security</CardTitle>
              <CardDescription>Manage your password and security settings.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-2">
                    <Label>Change Password</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input type="password" placeholder="Current Password" />
                        <Input type="password" placeholder="New Password" />
                    </div>
                </div>
                <Separator/>
                <div className="flex items-center justify-between rounded-lg border p-4">
                    <div>
                        <h3 className="font-semibold">Two-Factor Authentication (2FA)</h3>
                        <p className="text-sm text-muted-foreground">Add an extra layer of security to your account.</p>
                    </div>
                    <Switch />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Login Activity</h3>
                  <p className="text-sm text-muted-foreground mb-4">See recent login activity for your account.</p>
                  <Button variant="outline">View Login Logs</Button>
                </div>
                 <Button>Update Security Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="appearance" className="mt-6">
           <Card className="glassmorphic-card">
            <CardHeader>
              <CardTitle>Appearance</CardTitle>
              <CardDescription>Customize the look and feel of the application.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between rounded-lg border p-4">
                  <div>
                      <h3 className="font-semibold">Theme</h3>
                      <p className="text-sm text-muted-foreground">Switch between light and dark mode.</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>Light</span>
                    <Switch defaultChecked={document.documentElement.classList.contains('dark')} onCheckedChange={handleThemeChange} />
                    <span>Dark</span>
                  </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
