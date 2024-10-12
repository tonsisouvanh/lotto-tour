import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import Heading from '../typography/Heading';

const tours = [
  {
    name: 'Majestic Alps Adventure',
    destination: 'Switzerland',
    description:
      'Experience the breathtaking beauty of the Swiss Alps. Hike through picturesque trails, enjoy scenic train rides, and indulge in delicious Swiss cuisine.',
    duration: '7 days',
    price: '$2,499',
    image:
      'https://images.unsplash.com/photo-1441632260885-881646a7fd4d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Tropical Paradise Getaway',
    destination: 'Bali, Indonesia',
    description:
      'Relax on pristine beaches, explore ancient temples, and immerse yourself in the rich Balinese culture. Perfect for those seeking a balance of adventure and relaxation.',
    duration: '10 days',
    price: '$1,999',
    image:
      'https://plus.unsplash.com/premium_photo-1697730269491-7a3425f2163c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Ancient Wonders Expedition',
    destination: 'Egypt',
    description:
      'Uncover the mysteries of ancient Egypt. Visit the pyramids, cruise down the Nile, and explore bustling bazaars in Cairo. A journey through time awaits you.',
    duration: '12 days',
    price: '$3,299',
    image:
      'https://images.unsplash.com/photo-1676786546038-be5ac9caddb5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Northern Lights Quest',
    destination: 'Iceland',
    description:
      "Chase the aurora borealis, soak in geothermal hot springs, and witness the raw beauty of Iceland's landscapes. An otherworldly experience you'll never forget.",
    duration: '8 days',
    price: '$2,799',
    image:
      'https://images.unsplash.com/photo-1705917950934-7efe2b6866cc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export default function TourHighlightsSection() {
  return (
    <section className="relative z-[1] bg-gray-100 py-16">
      <Image
        width={500}
        height={500}
        quality={100}
        src={'/assets/images/layered-waves-haikei.png'}
        className="absolute bottom-0 left-0 z-[-1] h-auto w-full object-contain"
        alt=""
      />
      <div className="z-2 container mx-auto px-4">
        <div className="mx-auto mb-12 w-fit">
          <Heading>Our Popular Tours</Heading>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {tours.map((tour, index) => (
            <Card key={index} className="overflow-hidden">
              <Image
                width={500}
                height={500}
                quality={20}
                src={tour.image}
                alt={tour.name}
                className="h-48 w-full object-cover"
              />
              <CardHeader>
                <CardTitle>{tour.name}</CardTitle>
                <CardDescription>{tour.destination}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 line-clamp-4 text-sm text-gray-600">{tour.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{tour.duration}</span>
                  <span className="font-bold text-primary">{tour.price}</span>
                </div>
              </CardContent>
              <CardFooter className="flex flex-wrap justify-between gap-y-3">
                <Button variant="outline">
                  <Link href={`/tours/${tour.name.toLowerCase().replace(/\s/g, '-')}`}>View Details</Link>
                </Button>
                <Button>Book Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
