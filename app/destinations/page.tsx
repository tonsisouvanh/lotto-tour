import * as React from 'react';
import { ChevronRight, MapPin, Star } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Image from 'next/image';

const destinations = [
  {
    id: 1,
    name: 'Bali Paradise',
    location: 'Indonesia',
    image:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJhbGl8ZW58MHx8MHx8fDA%3D',
    rating: 4.8,
    price: 1299,
  },
  {
    id: 2,
    name: 'Swiss Alps Adventure',
    location: 'Switzerland',
    image:
      'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3dpc3MlMjBhbHBzfGVufDB8fDB8fHww',
    rating: 4.9,
    price: 1599,
  },
  {
    id: 3,
    name: 'Tokyo Lights',
    location: 'Japan',
    image:
      'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG9reW98ZW58MHx8MHx8fDA%3D',
    rating: 4.7,
    price: 1499,
  },
  {
    id: 4,
    name: 'Santorini Sunset',
    location: 'Greece',
    image:
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2FudG9yaW5pfGVufDB8fDB8fHww',
    rating: 4.9,
    price: 1799,
  },
];

export default function TourDestinationPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-center text-4xl font-bold">Discover Your Next Adventure</h1>

      <div className="mb-8 flex flex-col gap-4 md:flex-row">
        <Input placeholder="Search destinations" className="md:w-1/3" />
        <Select>
          <SelectTrigger className="md:w-1/3">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="beach">Beach</SelectItem>
            <SelectItem value="mountain">Mountain</SelectItem>
            <SelectItem value="city">City</SelectItem>
            <SelectItem value="cultural">Cultural</SelectItem>
          </SelectContent>
        </Select>
        <Button className="md:w-1/3">Search</Button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {destinations.map(destination => (
          <Card key={destination.id} className="overflow-hidden">
            <Image
              width={500}
              height={500}
              src={destination.image}
              alt={destination.name}
              className="h-48 w-full object-cover"
            />
            <CardHeader>
              <CardTitle>{destination.name}</CardTitle>
              <CardDescription className="flex items-center">
                <MapPin className="mr-1 h-4 w-4" />
                {destination.location}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-2 flex items-center">
                <Star className="mr-1 h-4 w-4 text-yellow-400" />
                <span>{destination.rating.toFixed(1)}</span>
              </div>
              <p className="text-lg font-bold">${destination.price}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                Book Now
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
