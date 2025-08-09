
export type ActiveOrder = {
  id: string;
  service: string;
  status: string;
};

export type UpcomingAppointment = {
  id: number;
  service: string;
  date: string;
  time: string;
};

export type PastService = {
  id: number;
  service: string;
  date: string;
  technician: string;
};

export type PersonalTip = {
    id: number;
    tip: string;
}

export type Appliance = {
    id: number;
    name: string;
    brand: string;
    model: string;
    status: 'Operational' | 'Needs Checkup' | 'In-Repair';
    nextMaintenance: string;
    warrantyEnd: string;
}

export type ServiceHistory = {
    id: number;
    applianceId: number;
    service: string;
    date: string;
}

export type Document = {
    id: number;
    type: 'Invoice' | 'Estimate' | 'Manual' | 'Warranty';
    title: string;
    date: string;
    status: 'Paid' | 'Pending' | 'Approved' | 'Archived';
    url: string;
}
