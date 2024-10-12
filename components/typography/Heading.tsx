'use client';
import { cn } from '@/lib/utils';
import React from 'react';

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ children, className = '' }) => {
  return <h1 className={cn('text-center text-3xl font-bold text-gray-900', className)}>{children}</h1>;
};

export default Heading;
