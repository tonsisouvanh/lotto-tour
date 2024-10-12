import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Globe, Users, ThumbsUp, Heart } from 'lucide-react';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Jane Doe',
    role: 'Founder & CEO',
    bio: 'With over 20 years of experience in the travel industry, Jane founded LottoTour to share her passion for exploration and cultural immersion.',
    image: '/placeholder.svg?height=300&width=300',
  },
  {
    name: 'John Smith',
    role: 'Head of Operations',
    bio: 'John ensures that every LottoTour tour runs smoothly, leveraging his background in logistics and customer service.',
    image: '/placeholder.svg?height=300&width=300',
  },
  {
    name: 'Emily Chen',
    role: 'Lead Travel Designer',
    bio: "Emily's creativity and attention to detail shine through in every itinerary she crafts, making each journey unique and memorable.",
    image: '/placeholder.svg?height=300&width=300',
  },
  {
    name: 'Michael Brown',
    role: 'Customer Experience Manager',
    bio: 'Michael is dedicated to ensuring that every traveler has an exceptional experience, from the first inquiry to the journey home.',
    image: '/placeholder.svg?height=300&width=300',
  },
];

const values = [
  {
    icon: Globe,
    title: 'Responsible Travel',
    description:
      "We're committed to sustainable tourism practices that benefit local communities and preserve the environment.",
  },
  {
    icon: Users,
    title: 'Cultural Immersion',
    description: 'We believe in creating opportunities for genuine cultural exchange and understanding.',
  },
  {
    icon: ThumbsUp,
    title: 'Excellence in Service',
    description: 'We strive to exceed expectations at every step of your journey with us.',
  },
  {
    icon: Heart,
    title: 'Passion for Exploration',
    description: "We're driven by a love for travel and a desire to share the world's wonders with our clients.",
  },
];

export default function AboutUsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-8 text-center text-4xl font-bold">About LottoTour</h1>

      {/* Company Story */}
      <section className="mb-16">
        <h2 className="mb-4 text-3xl font-semibold">Our Story</h2>
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div>
            <p className="mb-4 text-lg">
              Founded in 2005, LottoTour emerged from a simple yet powerful idea: to create travel experiences that go
              beyond sightseeing, fostering genuine connections between travelers and the world around them.
            </p>
            <p className="mb-4 text-lg">
              Our journey began with a small team of passionate explorers who believed that travel has the power to
              transform lives, broaden perspectives, and create lasting memories. From our first tours in Southeast Asia
              to our current global offerings, we've remained committed to this vision.
            </p>
            <p className="text-lg">
              Today, LottoTour is proud to have helped thousands of travelers discover the beauty and diversity of our
              world. We continue to innovate and expand our offerings, always with our core values and commitment to
              responsible travel at heart.
            </p>
          </div>
          <div className="relative h-96">
            <Image
              width={500}
              height={500}
              src="/assets/images/traveling-rafiki.png"
              alt="LottoTour team on a mountain trek"
              className="absolute inset-0 h-full w-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="mb-16 text-center">
        <h2 className="mb-4 text-3xl font-semibold">Our Mission</h2>
        <p className="text-xl italic">
          "To inspire and enable meaningful travel experiences that enrich lives, foster cultural understanding, and
          contribute positively to the world."
        </p>
      </section>

      {/* Team Members */}
      <section className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-semibold">Meet Our Team</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <Card key={index}>
              <Image
                width={500}
                height={500}
                src={member.image}
                alt={member.name}
                className="h-64 w-full rounded-t-lg object-cover"
              />
              <CardHeader>
                <CardTitle>{member.name}</CardTitle>
                <CardDescription>{member.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Company Values */}
      <section>
        <h2 className="mb-8 text-center text-3xl font-semibold">Our Values</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {values.map((value, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <value.icon className="mr-2 h-6 w-6" />
                  {value.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Awards and Recognition */}
      <section className="mt-16 text-center">
        <h2 className="mb-8 text-3xl font-semibold">Awards & Recognition</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Badge variant="secondary" className="px-4 py-2 text-lg">
            Best Tour Operator 2022
          </Badge>
          <Badge variant="secondary" className="px-4 py-2 text-lg">
            Sustainable Tourism Award 2021
          </Badge>
          <Badge variant="secondary" className="px-4 py-2 text-lg">
            Customer Service Excellence 2023
          </Badge>
        </div>
      </section>
    </div>
  );
}
