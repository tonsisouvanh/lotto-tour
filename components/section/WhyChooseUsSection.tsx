import { Award, Users, Compass, Shield } from 'lucide-react';
import Heading from '../typography/Heading';

const features = [
  {
    icon: Award,
    title: 'Experienced Guides',
    description: 'Our expert guides bring destinations to life with their in-depth knowledge and passion for travel.',
  },
  {
    icon: Users,
    title: 'Small Group Sizes',
    description:
      'Enjoy a more personalized experience with our small group tours, allowing for deeper connections and flexibility.',
  },
  {
    icon: Compass,
    title: 'Tailor-made Adventures',
    description: 'We craft unique itineraries tailored to your preferences, ensuring every journey is truly yours.',
  },
  {
    icon: Shield,
    title: 'Best Price Guarantee',
    description: 'Experience exceptional value with our competitive pricing and transparent booking process.',
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 w-fit">
          <Heading>Why Choose Us</Heading>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary p-2">
                <feature.icon className="h-8 w-8 text-white" aria-hidden="true" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
