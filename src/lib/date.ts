
import type { ActiveOrder, Appliance, Document, PastService, PersonalTip, ServiceHistory, UpcomingAppointment } from "./types";

export const activeOrders: ActiveOrder[] = [
  { id: 'ORD-123', service: 'AC Unit Repair', status: 'Technician Dispatched' },
  { id: 'ORD-124', service: 'Furnace Inspection', status: 'Awaiting Confirmation' },
];

export const upcomingAppointments: UpcomingAppointment[] = [
  { id: 1, service: 'Quarterly Maintenance', date: 'July 25, 2024', time: '10:00 AM' },
  { id: 2, service: 'Filter Replacement', date: 'August 02, 2024', time: '2:00 PM' },
];

export const pastServices: PastService[] = [
  { id: 1, service: 'Freon Refill', date: 'June 15, 2024', technician: 'John Doe' },
  { id: 2, service: 'Thermostat Installation', date: 'May 20, 2024', technician: 'Jane Smith' },
  { id: 3, service: 'Duct Cleaning', date: 'April 01, 2024', technician: 'John Doe' },
];

export const personalTips: PersonalTip[] = [
    { id: 1, tip: "Change your air filter every 3 months to improve efficiency and air quality." },
    { id: 2, tip: "Check for drafts around windows and doors to prevent AC from overworking." },
    { id: 3, tip: "Consider a smart thermostat to save up to 15% on your energy bills." },
];

export const appliances: Appliance[] = [
    { id: 1, name: 'Central AC Unit', brand: 'Carrier', model: '24ABC6', status: 'Operational', nextMaintenance: 'Sept 1, 2024', warrantyEnd: 'June 1, 2028' },
    { id: 2, name: 'Gas Furnace', brand: 'Trane', model: 'S9V2', status: 'Operational', nextMaintenance: 'Oct 15, 2024', warrantyEnd: 'Nov 1, 2030' },
    { id: 3, name: 'Water Heater', brand: 'Rheem', model: 'PROG50-38N', status: 'Needs Checkup', nextMaintenance: 'Immediate', warrantyEnd: 'Jan 1, 2026' },
];

export const serviceHistory: ServiceHistory[] = [
    {id: 1, applianceId: 1, service: 'Annual Checkup', date: 'Sept 5, 2023'},
    {id: 2, applianceId: 1, service: 'Coolant Top-up', date: 'July 12, 2022'},
    {id: 3, applianceId: 2, service: 'Ignitor Replacement', date: 'Jan 20, 2024'},
    {id: 4, applianceId: 3, service: 'Anode Rod Check', date: 'Feb 10, 2023'},
];

export const documents: Document[] = [
    { id: 1, type: 'Invoice', title: 'Invoice #INV-00123', date: 'June 15, 2024', status: 'Paid', url: '#' },
    { id: 2, type: 'Estimate', title: 'Estimate for Furnace Replacement', date: 'June 1, 2024', status: 'Approved', url: '#' },
    { id: 3, type: 'Manual', title: 'Carrier 24ABC6 User Manual', date: 'June 1, 2018', status: 'Archived', url: '#' },
    { id: 4, type: 'Invoice', title: 'Invoice #INV-00120', date: 'May 20, 2024', status: 'Paid', url: '#' },
];
