import React from 'react';
import Sidebar from '@/app/components/sidebar';

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  console.log('Layout');
  console.log(children);
Remove the line or replace with a valid statement.
  aaad
  return (
    <>
      <Sidebar />
      <div className="ml-60">{children}</div>
    </>
  );
}
