import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Heading from '../typography/Heading';

const destinations = [
  {
    name: 'Paris, France',
    description:
      'Experience the romance and charm of the City of Light. Visit iconic landmarks, indulge in exquisite cuisine, and stroll along the Seine.',
    image:
      'https://images.unsplash.com/photo-1686120552846-7caf1a345876?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Tokyo, Japan',
    description:
      'Immerse yourself in the perfect blend of tradition and modernity. Explore ancient temples, futuristic technology, and world-class cuisine.',
    image:
      'https://images.unsplash.com/photo-1646323815959-a2b9294c4404?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Machu Picchu, Peru',
    description:
      'Discover the ancient Incan citadel set high in the Andes Mountains. A journey through history and breathtaking landscapes awaits.',
    image:
      'https://images.unsplash.com/photo-1535961652354-923cb08225a7?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export default function DestinationsSection() {
  return (
    <section className="relative z-[1] py-16">
      {/* <Image
        width={500}
        height={500}
        quality={100}
        src={'/assets/svg/light.svg'}
        className="absolute bottom-0 left-0 z-[-1] h-auto w-full object-contain"
        alt=""
      /> */}
      <div className="container z-[2] mx-auto px-4">
        <div className="mx-auto mb-12 w-fit">
          <Heading>Explore Our Destinations</Heading>
        </div>
        {/* Interactive Map (placeholder) */}
        <div className="mb-12 overflow-hidden rounded-lg shadow-lg">
          <Image
            src={
              'https://images.unsplash.com/photo-1552058184-1b8793a09435?q=80&w=2920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
            priority
            alt="Interactive Map of Destinations"
            width={500}
            height={500}
            className="h-[400px] w-full object-cover"
          />
        </div>

        {/* Featured Destinations */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination, index) => (
            <Card key={index} className="overflow-hidden">
              <Image
                width={500}
                height={500}
                quality={20}
                src={destination.image}
                alt={destination.name}
                className="h-48 w-full object-cover"
              />
              <CardHeader>
                <CardTitle>{destination.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{destination.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Explore Tours</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
