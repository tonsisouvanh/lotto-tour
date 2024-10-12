import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';

export default function HeroSection() {
  return (
    <section className="relative flex h-screen items-center justify-center">
      {/* Background Image */}
      {/* <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'https://images.unsplash.com/photo-1704212685546-3086abc1e6a1?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}
        aria-hidden="true"
      /> */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <Carousel className="relative">
          <CarouselContent>
            {Array.from({ length: 4 }, (__, index) => (
              <CarouselItem key={index} className="relative">
                {' '}
                <Image
                  width={500}
                  height={500}
                  priority
                  sizes="100vw"
                  src="https://images.unsplash.com/photo-1704212685546-3086abc1e6a1?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="h-full w-full object-cover brightness-50"
                />
                {/* Content */}
                <div className="absolute inset-0 flex h-full w-full items-center justify-center">
                  <div className="px-4 text-center text-white sm:px-6 lg:px-8">
                    <h1 className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl">Discover Your Next Adventure</h1>
                    <p className="mb-8 text-xl sm:text-2xl md:text-3xl">
                      Explore the world with us and create unforgettable memories
                    </p>
                    <Button
                      size="lg"
                      className="rounded-full bg-primary px-6 py-3 text-lg font-bold text-white hover:bg-primary/90"
                    >
                      Explore Our Tours
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-5 top-[50%]" />
          <CarouselNext className="absolute right-5 top-[50%]" />
        </Carousel>
      </div>

      {/* Overlay */}
      {/* <div className="z-1 absolute inset-0 bg-black opacity-50" aria-hidden="true" /> */}
    </section>
  );
}
