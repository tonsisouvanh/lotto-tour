import { MapPin, CalendarCheck, Luggage, TreePalm } from 'lucide-react';
import Heading from '../typography/Heading';

const steps = [
  {
    icon: MapPin,
    title: 'Choose your destination',
    description: 'Browse our wide range of exciting destinations and find your perfect getaway.',
  },
  {
    icon: CalendarCheck,
    title: 'Book your tour',
    description: 'Select your preferred dates and options, then securely book your tour online.',
  },
  {
    icon: Luggage,
    title: 'Pack your bags',
    description: 'Prepare for your adventure with our handy packing lists and travel tips.',
  },
  {
    icon: TreePalm,
    title: 'Enjoy your trip',
    description: 'Relax and immerse yourself in the experience, creating unforgettable memories.',
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 w-fit">
          <Heading>How It Works</Heading>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary p-4">
                <step.icon className="h-8 w-8 text-white" aria-hidden="true" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
