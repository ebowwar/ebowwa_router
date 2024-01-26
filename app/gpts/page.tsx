// app/gpt-list/page.tsx
"use client";

import React from "react";
import { PencilIcon, Trash2Icon, PlusCircleIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';


type GPTItemProps = {
  title: string;
  accessibility: string;
  actions: React.ReactNode;
};

const GPTItem: React.FC<GPTItemProps> = ({ title, accessibility, actions }) => {
  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
      <div>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-gray-600">{accessibility}</p>
      </div>
      <div>
        {actions}
      </div>
    </div>
  );
};

const GPTListPage: React.FC = () => {
  // This would be fetched from a backend or context
  const gpts = [
    { id: 1, title: 'temp_tiktok_marketing', accessibility: 'Only me' },
    { id: 2, title: 'fine_tuning_guy', accessibility: 'Only me' },
    { id: 3, title: 'ebowowrouter', accessibility: 'Only me' },
    // ...other GPTs
  ];

  // Mock handlers for actions
  const handleView = (id: number) => console.log('Viewing', id);
  const handleEdit = (id: number) => console.log('Editing', id);
  const handleDelete = (id: number) => console.log('Deleting', id);

  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My GPTs</h1>
        <Button variant="default">
          <PlusCircleIcon className="mr-2" /> Create a GPT
        </Button>
      </div>
      <div className="space-y-4">
        {gpts.map((gpt) => (
          <GPTItem
            key={gpt.id}
            title={gpt.title.replace('_', ' ')}
            accessibility={gpt.accessibility}
            actions={
              <>
                <Button variant="ghost" onClick={() => handleView(gpt.id)}>
                  View
                </Button>
                <Button variant="ghost" onClick={() => handleEdit(gpt.id)}>
                  <PencilIcon className="mr-1" /> Edit
                </Button>
                <Button variant="ghost" onClick={() => handleDelete(gpt.id)}>
                  <Trash2Icon className="mr-1" /> Delete
                </Button>
              </>
            }
          />
        ))}
      </div>
    </div>
  );
};

export default GPTListPage;
