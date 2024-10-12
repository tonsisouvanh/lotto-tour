'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Clock, MapPin, DollarSign, Star } from 'lucide-react';
import Image from 'next/image';

// Mock data for tours
const toursData = [
  {
    id: 1,
    name: 'Enchanting Japan: Cultural Odyssey',
    destination: 'Japan',
    duration: '12 days',
    price: 3999,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1549693578-d683be217e58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG9zYWthfGVufDB8fHx8MTY3MzYyNzY1NQ&ixlib=rb-1.2.1&q=80&w=1080',
    type: 'Cultural',
  },
  {
    id: 2,
    name: 'Majestic Alps Adventure',
    destination: 'Switzerland',
    duration: '8 days',
    price: 2499,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1549693578-d683be217e58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG9zYWthfGVufDB8fHx8MTY3MzYyNzY1NQ&ixlib=rb-1.2.1&q=80&w=1080',
    type: 'Adventure',
  },
  {
    id: 3,
    name: 'Tropical Paradise Getaway',
    destination: 'Bali',
    duration: '10 days',
    price: 1999,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1549693578-d683be217e58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG9zYWthfGVufDB8fHx8MTY3MzYyNzY1NQ&ixlib=rb-1.2.1&q=80&w=1080',
    type: 'Beach',
  },
  {
    id: 4,
    name: 'Ancient Wonders Expedition',
    destination: 'Egypt',
    duration: '14 days',
    price: 3299,
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1549693578-d683be217e58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG9zYWthfGVufDB8fHx8MTY3MzYyNzY1NQ&ixlib=rb-1.2.1&q=80&w=1080',
    type: 'Historical',
  },
  {
    id: 5,
    name: 'Northern Lights Quest',
    destination: 'Iceland',
    duration: '7 days',
    price: 2799,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1549693578-d683be217e58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG9zYWthfGVufDB8fHx8MTY3MzYyNzY1NQ&ixlib=rb-1.2.1&q=80&w=1080',
    type: 'Nature',
  },
  // Add more tour data as needed
];

export default function ToursPage() {
  const [tours, setTours] = useState(toursData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDestination, setSelectedDestination] = useState('all');
  const [selectedType, setSelectedType] = useState('');
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [sortBy, setSortBy] = useState('price-low');

  const destinations = [...new Set(toursData.map(tour => tour.destination))];
  const types = [...new Set(toursData.map(tour => tour.type))];

  useEffect(() => {
    const filteredTours = toursData.filter(
      tour =>
        tour.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedDestination === 'all' || tour.destination === selectedDestination) &&
        (selectedType === '' || tour.type === selectedType) &&
        tour.price >= priceRange[0] &&
        tour.price <= priceRange[1]
    );

    switch (sortBy) {
      case 'price-low':
        filteredTours.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filteredTours.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filteredTours.sort((a, b) => b.rating - a.rating);
        break;
      case 'duration':
        filteredTours.sort((a, b) => parseInt(a.duration) - parseInt(b.duration));
        break;
    }

    setTours(filteredTours);
  }, [searchTerm, selectedDestination, selectedType, priceRange, sortBy]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Explore Our Tours</h1>

      <div className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-4">
        <div className="space-y-6 lg:col-span-1">
          <div>
            <h2 className="mb-2 text-xl font-semibold">Filters</h2>
            <Input
              type="text"
              placeholder="Search tours..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="mb-4"
            />
          </div>

          <div>
            <h3 className="mb-2 font-semibold">Destination</h3>
            <Select value={selectedDestination} onValueChange={setSelectedDestination}>
              <SelectTrigger>
                <SelectValue placeholder="Select destination" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Destinations</SelectItem>
                {destinations.map(dest => (
                  <SelectItem key={dest} value={dest}>
                    {dest}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">Tour Type</h3>
            {/* <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <SelectValue placeholder="Select tour type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Types</SelectItem>
                {types.map(type => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select> */}
          </div>

          <div>
            <h3 className="mb-2 font-semibold">Price Range</h3>
            <Slider min={0} max={5000} step={100} value={priceRange} onValueChange={setPriceRange} className="mb-2" />
            <div className="flex justify-between text-sm text-gray-500">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-gray-600">{tours.length} tours found</p>
            {/* <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
                <SelectItem value="duration">Duration</SelectItem>
              </SelectContent>
            </Select> */}
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tours.map(tour => (
              <Card key={tour.id} className="overflow-hidden">
                <Image
                  width={500}
                  height={500}
                  quality={20}
                  priority
                  src={tour.image}
                  alt={tour.name}
                  className="h-48 w-full object-cover"
                />
                <CardHeader>
                  <CardTitle>{tour.name}</CardTitle>
                  <CardDescription className="flex items-center">
                    <MapPin size={16} className="mr-1" />
                    {tour.destination}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      {tour.duration}
                    </span>
                    <span className="flex items-center">
                      <Star size={16} className="mr-1" fill="gold" />
                      {tour.rating}
                    </span>
                  </div>
                  <Badge>{tour.type}</Badge>
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                  <span className="text-xl font-bold">
                    <DollarSign size={16} className="mr-1 inline" />
                    {tour.price}
                  </span>
                  <Link href={`/tours/${tour.id}`} passHref>
                    <Button>View Details</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
