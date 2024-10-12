import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'New York, USA',
    rating: 5,
    quote:
      'The tour exceeded all my expectations. The guides were knowledgeable and friendly, and the itinerary was perfectly balanced.',
    image: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
  {
    name: 'Marco Rossi',
    location: 'Rome, Italy',
    rating: 5,
    quote:
      'An unforgettable experience! Every detail was taken care of, allowing us to fully immerse ourselves in the culture and beauty of each destination.',
    image: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
  {
    name: 'Yuki Tanaka',
    location: 'Tokyo, Japan',
    rating: 4,
    quote:
      'The small group size made for a more intimate and enjoyable trip. I appreciated the flexibility to explore on my own at times.',
    image: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
  {
    name: 'Emma Thompson',
    location: 'London, UK',
    rating: 5,
    quote:
      'From start to finish, our journey was filled with amazing moments. The local experiences arranged by the tour company were truly special.',
    image: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">What Our Travelers Say</h2>

        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="mr-4 h-12 w-12 rounded-full"
                    height={500}
                    width={500}
                    quality={5}
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
                <div className="mb-2 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill={i < testimonial.rating ? 'currentColor' : 'none'}
                    />
                  ))}
                </div>
                <p className="italic text-gray-600">
                  {"'"}
                  {testimonial.quote}
                  {"'"}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Video Testimonial */}
        {/* <div className="mx-auto max-w-3xl">
          <h3 className="mb-4 text-center text-2xl font-semibold">Hear from Our Happy Travelers</h3>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Video testimonial"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div> */}
      </div>
    </section>
  );
}
