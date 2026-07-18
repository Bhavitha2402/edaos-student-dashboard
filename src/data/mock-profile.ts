export const profileDetails = {
  email: "ojas.sharma@edaos.school",
  phone: "+91 98765 43210",
  classTeacher: "Dr. Sarah Jenkins",
  bloodGroup: "O+",
  address: "24 Willow Park, Sector 12, New Delhi",
  dateOfBirth: "12 March 2009",
  admissionNumber: "EDA-2024-098",
};

export interface FeeInstallment {
  id: string;
  label: string;
  amount: string;
  dueDate: string;
  status: "paid" | "due" | "overdue";
}

export const feeSummary = {
  totalDue: "₹18,000",
  totalPaid: "₹54,000",
  nextDueDate: "25 May 2026",
};

export const feeInstallments: FeeInstallment[] = [
  { id: "fee_001", label: "Term 1 Tuition Fee", amount: "₹18,000", dueDate: "25 May 2026", status: "due" },
  { id: "fee_002", label: "Term 3 Tuition Fee (2025)", amount: "₹18,000", dueDate: "10 Jan 2026", status: "paid" },
  { id: "fee_003", label: "Term 2 Tuition Fee (2025)", amount: "₹18,000", dueDate: "10 Sep 2025", status: "paid" },
  { id: "fee_004", label: "Annual Activity Fee", amount: "₹6,000", dueDate: "10 Jun 2025", status: "paid" },
  { id: "fee_005", label: "Term 1 Tuition Fee (2025)", amount: "₹12,000", dueDate: "10 May 2025", status: "paid" },
];

export const transportDetails = {
  routeName: "Route 7 — Sector 12 Loop",
  busNumber: "DL 1PB 4521",
  driverName: "Ramesh Kumar",
  driverPhone: "+91 98111 22334",
  pickupTime: "7:35 AM",
  pickupStop: "Willow Park Gate",
  dropTime: "3:50 PM",
  dropStop: "Willow Park Gate",
};
