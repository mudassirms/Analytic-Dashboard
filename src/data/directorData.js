// src/data/directorData.js

export const directorMetrics = [
  { title: "Total POs", value: 120 },
  { title: "Pending Approvals", value: 32 },
  { title: "Approved Amount", value: "$1.25M" },
  { title: "Average Processing Time", value: "4.2 Days" },
];

export const poAgeDistribution = [
  {
    country: "USA",
    data: [
      { name: "0-7 Days", value: 50 },
      { name: "8-14 Days", value: 30 },
      { name: "15-30 Days", value: 25 },
      { name: "30+ Days", value: 15 },
    ],
  },
  {
    country: "India",
    data: [
      { name: "0-7 Days", value: 45 },
      { name: "8-14 Days", value: 40 },
      { name: "15-30 Days", value: 35 },
      { name: "30+ Days", value: 20 },
    ],
  },
  {
    country: "Germany",
    data: [
      { name: "0-7 Days", value: 60 },
      { name: "8-14 Days", value: 28 },
      { name: "15-30 Days", value: 22 },
      { name: "30+ Days", value: 10 },
    ],
  },
];

export const poAgeDistributionCustomer = [
  {
    customer: "Customer A",
    data: [
      { name: "0-7 Days", value: 35 },
      { name: "8-14 Days", value: 30 },
      { name: "15-30 Days", value: 18 },
      { name: "30+ Days", value: 12 },
    ],
  },
  {
    customer: "Customer B",
    data: [
      { name: "0-7 Days", value: 40 },
      { name: "8-14 Days", value: 25 },
      { name: "15-30 Days", value: 15 },
      { name: "30+ Days", value: 18 },
    ],
  },
  {
    customer: "Customer C",
    data: [
      { name: "0-7 Days", value: 55 },
      { name: "8-14 Days", value: 25 },
      { name: "15-30 Days", value: 30 },
      { name: "30+ Days", value: 22 },
    ],
  },
];
export const poTrendData = [
  { date: "Jan", amount: 20000 },
  { date: "Feb", amount: 30000 },
  { date: "Mar", amount: 25000 },
  { date: "Apr", amount: 40000 },
  { date: "May", amount: 37000 },
  { date: "Jun", amount: 50000 },
];
