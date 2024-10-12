import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const blogPosts = [
  {
    title: '10 Hidden Gems in Southeast Asia',
    description: 'Discover off-the-beaten-path destinations that will take your breath away.',
    date: 'May 15, 2023',
    image:
      'https://images.unsplash.com/photo-1602235652477-2b75f983fb9f?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    slug: 'hidden-gems-southeast-asia',
  },
  {
    title: 'How to Pack Like a Pro: Essential Travel Tips',
    description: 'Learn the art of efficient packing for your next adventure.',
    date: 'June 2, 2023',
    image:
      'https://images.unsplash.com/photo-1602235652477-2b75f983fb9f?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    slug: 'pack-like-a-pro',
  },
  {
    title: 'Sustainable Travel: Exploring Eco-Friendly Destinations',
    description: 'Discover beautiful locations that prioritize environmental conservation.',
    date: 'June 20, 2023',
    image:
      'https://images.unsplash.com/photo-1602235652477-2b75f983fb9f?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    slug: 'sustainable-travel-eco-friendly-destinations',
  },
];

export default function BlogSection() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">Travel Tips & Inspiration</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                width={500}
                height={500}
                quality={20}
                className="h-48 w-full object-cover"
              />
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{post.description}</p>
              </CardContent>
              <CardFooter>
                <Link href={`/blog/${post.slug}`} passHref>
                  <Button variant="outline">Read More</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/blog" passHref>
            <Button>View All Articles</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
