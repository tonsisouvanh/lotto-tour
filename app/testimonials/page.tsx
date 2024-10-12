'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Quote, Star } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'New York, USA',
    tour: 'Enchanting Japan: Cultural Odyssey',
    rating: 5,
    text: 'The Japan tour exceeded all my expectations. Our guide was incredibly knowledgeable and made every moment special. From the bustling streets of Tokyo to the serene temples of Kyoto, every detail was perfectly planned. I came back with not just photos, but a deep appreciation for Japanese culture. Highly recommend!',
    image: '/placeholder.svg?height=100&width=100',
  },
  {
    name: 'Marco Rossi',
    location: 'Rome, Italy',
    tour: 'Majestic Alps Adventure',
    rating: 5,
    text: "As an avid hiker, the Alps tour was a dream come true. The breathtaking views, challenging trails, and cozy mountain lodges made for an unforgettable experience. The guides were experts and ensured everyone's safety while making the trip fun and educational. I'll definitely be booking another tour with TravelCo!",
    image: '/placeholder.svg?height=100&width=100',
  },
  {
    name: 'Yuki Tanaka',
    location: 'Tokyo, Japan',
    tour: 'Tropical Paradise Getaway',
    rating: 4,
    text: 'The Bali tour was a perfect blend of relaxation and adventure. The beaches were pristine, and the cultural experiences were eye-opening. I especially loved the cooking class and temple visits. The only reason for 4 stars instead of 5 is that I wished the tour was a bit longer! Will definitely travel with TravelCo again.',
    image: '/placeholder.svg?height=100&width=100',
  },
  {
    name: 'Emma Thompson',
    location: 'London, UK',
    tour: 'Ancient Wonders Expedition',
    rating: 5,
    text: 'The Egypt tour was simply magical. Standing in front of the pyramids and cruising down the Nile were bucket list experiences that TravelCo made a reality. Our Egyptologist guide brought history to life with fascinating stories. The attention to detail in every aspect of the tour was impressive. An absolute must-do!',
    image: '/placeholder.svg?height=100&width=100',
  },
  {
    name: 'Alex Chen',
    location: 'San Francisco, USA',
    tour: 'Northern Lights Quest',
    rating: 5,
    text: 'Seeing the Northern Lights had always been a dream of mine, and TravelCo made it happen in the most spectacular way. The Iceland tour was well-organized, with a perfect balance of guided excursions and free time. The moment the lights danced across the sky was unforgettable. Thank you for an amazing adventure!',
    image: '/placeholder.svg?height=100&width=100',
  },
  {
    name: 'Sophie Dubois',
    location: 'Paris, France',
    tour: 'Andes Adventure Expedition',
    rating: 5,
    text: "The Peru tour was an incredible journey through history and nature. Hiking the Inca Trail to Machu Picchu was challenging but so rewarding. Our guide's passion for Incan history made every step fascinating. The tour's commitment to sustainable travel practices was also impressive. An experience I'll cherish forever!",
    image: '/placeholder.svg?height=100&width=100',
  },
];

export default function TestimonialsPage() {
  const [filter, setFilter] = useState('all');

  const filteredTestimonials = testimonials.filter(
    testimonial => filter === 'all' || testimonial.rating === parseInt(filter)
  );

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-8 text-center text-4xl font-bold">What Our Travelers Say</h1>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList className="mx-auto grid w-full grid-cols-3 lg:w-[400px]">
          <TabsTrigger value="all" onClick={() => setFilter('all')}>
            All Reviews
          </TabsTrigger>
          <TabsTrigger value="5" onClick={() => setFilter('5')}>
            5 Star
          </TabsTrigger>
          <TabsTrigger value="4" onClick={() => setFilter('4')}>
            4 Star
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredTestimonials.map((testimonial, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <img src={testimonial.image} alt={testimonial.name} className="h-12 w-12 rounded-full" />
                <div>
                  <CardTitle>{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.location}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="mb-2 text-sm text-muted-foreground">{testimonial.tour}</p>
              <div className="mb-2 flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < testimonial.rating ? 'fill-current text-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <Quote className="mb-2 h-8 w-8 text-primary" />
              <p className="italic">{testimonial.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Video Testimonial Section */}
      {/* <section className="mt-16">
        <h2 className="mb-8 text-center text-3xl font-semibold">Video Testimonials</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Customer testimonial video 1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full rounded-lg shadow-lg"
            ></iframe>
          </div>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Customer testimonial video 2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="mt-16 text-center">
        <h2 className="mb-4 text-3xl font-semibold">Ready to Create Your Own Adventure?</h2>
        <p className="mb-8 text-xl">Join our satisfied travelers and experience the world with TravelCo.</p>
        <a
          href="/tours"
          className="rounded-full bg-primary px-6 py-3 text-lg font-semibold text-primary-foreground hover:bg-primary/90"
        >
          Explore Our Tours
        </a>
      </section>
    </div>
  );
}
