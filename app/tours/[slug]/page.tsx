'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Clock, MapPin, Users, Star, DollarSign, Utensils, Hotel, Plane } from 'lucide-react';
import Image from 'next/image';

const tourData = {
  name: 'Enchanting Japan: Cultural Odyssey',
  duration: '12 days',
  destinations: ['Tokyo', 'Kyoto', 'Osaka', 'Hiroshima'],
  price: 3999,
  rating: 4.8,
  reviewCount: 124,
  overview:
    'Embark on a captivating journey through Japan, where ancient traditions seamlessly blend with cutting-edge modernity. This 12-day adventure takes you from the bustling streets of Tokyo to the serene temples of Kyoto, the foodie paradise of Osaka, and the historic sites of Hiroshima.',
  highlights: [
    "Explore Tokyo's vibrant neighborhoods and experience the world's busiest crossing at Shibuya",
    'Visit ancient temples and participate in a traditional tea ceremony in Kyoto',
    "Savor Osaka's renowned street food and vibrant nightlife",
    'Reflect on history at the Hiroshima Peace Memorial Park',
    'Ride the iconic bullet train (Shinkansen) between cities',
    'Stay in a traditional ryokan and soak in natural hot springs',
  ],
  itinerary: [
    {
      day: 1,
      title: 'Arrival in Tokyo',
      description: 'Welcome to Japan! Transfer to your hotel and enjoy a welcome dinner.',
    },
    {
      day: 2,
      title: 'Tokyo Exploration',
      description: 'Visit Senso-ji Temple, explore Akihabara, and experience the Shibuya Crossing.',
    },
    {
      day: 3,
      title: 'Tokyo to Kyoto',
      description: 'Travel to Kyoto via bullet train. Afternoon visit to Kinkaku-ji (Golden Pavilion).',
    },
    {
      day: 4,
      title: 'Kyoto Cultural Day',
      description: 'Explore Arashiyama Bamboo Grove and participate in a tea ceremony.',
    },
    {
      day: 5,
      title: 'Nara Day Trip',
      description: 'Day trip to Nara to see the Great Buddha and feed the famous deer.',
    },
    {
      day: 6,
      title: 'Kyoto to Osaka',
      description: 'Morning at Fushimi Inari Shrine, then travel to Osaka. Evening street food tour.',
    },
    { day: 7, title: 'Osaka Exploration', description: 'Visit Osaka Castle and enjoy free time in Dotonbori.' },
    {
      day: 8,
      title: 'Osaka to Hiroshima',
      description: 'Travel to Hiroshima. Visit the Peace Memorial Park and Museum.',
    },
    {
      day: 9,
      title: 'Miyajima Island',
      description: 'Day trip to the scenic Miyajima Island to see the floating torii gate.',
    },
    {
      day: 10,
      title: 'Hiroshima to Tokyo',
      description: 'Return to Tokyo via bullet train. Free afternoon for shopping or exploration.',
    },
    {
      day: 11,
      title: 'Tokyo Free Day',
      description: 'Free day in Tokyo with optional activities. Farewell dinner in the evening.',
    },
    { day: 12, title: 'Departure', description: 'Transfer to the airport for your departure flight.' },
  ],
  included: [
    '11 nights accommodation (mix of hotels and one night in a traditional ryokan)',
    'Daily breakfast, 3 lunches, and 5 dinners including welcome and farewell dinners',
    'All transportation within Japan, including bullet train passes',
    'English-speaking guide throughout the tour',
    'All entrance fees to attractions mentioned in the itinerary',
    'Cultural experiences (tea ceremony, cooking class)',
    'Airport transfers',
  ],
  notIncluded: [
    'International flights',
    'Travel insurance',
    'Personal expenses and gratuities',
    'Meals not mentioned in the itinerary',
  ],
  images: [
    'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHRva3lvfGVufDB8fHx8MTY3MzYyNzY1NQ&ixlib=rb-1.2.1&q=80&w=1080',
    'https://images.unsplash.com/photo-1568605114967-8130f3a36994?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGt5b3RvfGVufDB8fHx8MTY3MzYyNzY1NQ&ixlib=rb-1.2.1&q=80&w=1080',
    'https://images.unsplash.com/photo-1549693578-d683be217e58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG9zYWthfGVufDB8fHx8MTY3MzYyNzY1NQ&ixlib=rb-1.2.1&q=80&w=1080',
    'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGhpcm9zaGltYXxlbnwwfHx8fDE2NzM2Mjc2NTU&ixlib=rb-1.2.1&q=80&w=1080',
  ],
};

export default function TourDetailPage() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="mb-4 text-3xl font-bold">{tourData.name}</h1>
          <div className="mb-6 flex flex-wrap items-center gap-4">
            <span className="flex items-center">
              <Clock className="mr-1" size={16} /> {tourData.duration}
            </span>
            <span className="flex items-center">
              <MapPin className="mr-1" size={16} /> {tourData.destinations.join(', ')}
            </span>
            <span className="flex items-center">
              <Star className="mr-1" size={16} fill="gold" /> {tourData.rating} ({tourData.reviewCount} reviews)
            </span>
          </div>
          <Image
            width={500}
            height={500}
            src={tourData.images[0]}
            alt={tourData.name}
            className="mb-6 h-[400px] w-full rounded-lg object-cover"
          />

          <Tabs defaultValue="overview" className="mb-8">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
              <TabsTrigger value="included">What{"'"}s Included</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <Card>
                <CardHeader>
                  <CardTitle>Tour Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{tourData.overview}</p>
                  <h3 className="mb-2 font-semibold">Highlights:</h3>
                  <ul className="list-disc space-y-1 pl-5">
                    {tourData.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="itinerary">
              <Card>
                <CardHeader>
                  <CardTitle>Tour Itinerary</CardTitle>
                </CardHeader>
                <CardContent>
                  {tourData.itinerary.map((day, index) => (
                    <div key={index} className="mb-4">
                      <h3 className="font-semibold">
                        Day {day.day}: {day.title}
                      </h3>
                      <p>{day.description}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="included">
              <Card>
                <CardHeader>
                  <CardTitle>What{"'"}s Included</CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="mb-2 font-semibold">Included in the tour:</h3>
                  <ul className="mb-4 list-disc space-y-1 pl-5">
                    {tourData.included.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <h3 className="mb-2 font-semibold">Not included:</h3>
                  <ul className="list-disc space-y-1 pl-5">
                    {tourData.notIncluded.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {tourData.images.slice(1).map((image, index) => (
              <Image
                width={500}
                height={500}
                key={index}
                src={image}
                alt={`Tour image ${index + 2}`}
                className="h-40 w-full rounded-lg object-cover"
              />
            ))}
          </div>
        </div>

        <div>
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle>Book This Tour</CardTitle>
              <CardDescription>Select your preferred date to start your journey</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Price per person</span>
                  <span className="text-2xl font-bold">${tourData.price}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={16} />
                  <span>Group size: 4-12 people</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>Select start date:</span>
                </div>
                <select
                  className="w-full rounded border p-2"
                  value={selectedDate || ''}
                  onChange={e => setSelectedDate(e.target.value)}
                >
                  <option value="">Choose a date</option>
                  <option value="2023-09-01">September 1, 2023</option>
                  <option value="2023-09-15">September 15, 2023</option>
                  <option value="2023-10-01">October 1, 2023</option>
                  <option value="2023-10-15">October 15, 2023</option>
                </select>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" disabled={!selectedDate}>
                Book Now
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
