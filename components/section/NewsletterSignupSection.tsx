'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';

export default function NewsletterSignupSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log('Subscribing email:', email);
    toast({
      title: 'Subscribed!',
      description: 'Thank you for subscribing to our newsletter.',
    });
    setEmail('');
  };

  return (
    <section className="bg-primary py-16 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center text-white">
          <h2 className="mb-4 text-3xl font-bold">Stay Updated with Our Latest Adventures</h2>
          <p className="mb-8">
            Subscribe to our newsletter and receive exclusive offers, travel tips, and inspiration for your next
            journey.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="flex-grow bg-white text-slate-800"
            />
            <Button type="submit" variant="secondary">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
