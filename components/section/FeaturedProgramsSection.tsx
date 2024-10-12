import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

const featuredPrograms = [
  {
    title: 'Cherry Blossom Special',
    description:
      "Experience the magical beauty of Japan's cherry blossom season. This limited-time tour takes you through Tokyo, Kyoto, and Osaka during peak bloom.",
    image:
      'https://images.unsplash.com/photo-1545128526-c99c6e043992?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    duration: '10 days',
    price: '$3,499',
    tag: 'Seasonal',
  },
  {
    title: 'Romantic Tuscany Getaway',
    description:
      'Indulge in the romance of the Italian countryside with our exclusive honeymoon package. Enjoy wine tastings, cooking classes, and luxurious accommodations.',
    image:
      'https://images.unsplash.com/photo-1694785918647-b392a36aec75?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    duration: '7 days',
    price: '$2,999',
    tag: 'Honeymoon',
  },
  {
    title: 'Andes Adventure Expedition',
    description:
      'Challenge yourself with this thrilling trek through the Andes Mountains. Discover ancient Incan ruins and breathtaking landscapes on this unforgettable journey.',
    image:
      'https://images.unsplash.com/photo-1633984904221-29bb70dffef8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    duration: '14 days',
    price: '$4,299',
    tag: 'Adventure',
  },
];

export default function FeaturedProgramsSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">Featured Programs</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredPrograms.map((program, index) => (
            <Card key={index} className="overflow-hidden">
              <Image
                src={program.image}
                alt={program.title}
                width={500}
                height={500}
                quality={20}
                className="h-48 w-full object-cover"
              />
              <CardHeader>
                <div className="mb-2 flex items-center justify-between">
                  <CardTitle>{program.title}</CardTitle>
                  <Badge variant="secondary">{program.tag}</Badge>
                </div>
                <CardDescription>{program.duration}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-600">{program.description}</p>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <span className="text-lg font-bold text-primary">{program.price}</span>
                <Button>Book Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
