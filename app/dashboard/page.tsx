// app/dashboard/page.tsx
"use client"; // Indicates this file uses client-side React features

import React from 'react';
import { Button } from '@/components/ui/button'; // Importing a Shadcn component

const DashboardPage = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Button>Click Me</Button>
    </div>
  );
};

export default DashboardPage;
