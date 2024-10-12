'use client';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Image from 'next/image';
import Heading from '../typography/Heading';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1552059660-4d11a68f35b9?q=80&w=2833&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Scenic mountain landscape',
  },
  {
    src: 'https://images.unsplash.com/photo-1693498792915-f989b430034a?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Beautiful beach sunset',
  },
  {
    src: 'https://images.unsplash.com/photo-1628128573898-262b312f707e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Historic city street',
  },
  {
    src: 'https://images.unsplash.com/photo-1723622688505-3efc54d4dbae?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Lush tropical rainforest',
  },
  {
    src: 'https://images.unsplash.com/photo-1607565604475-dd8aed4f9f4c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Snowy winter wonderland',
  },
  {
    src: 'https://images.unsplash.com/photo-1708036473884-18e64c6cbaa1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Vibrant local market',
  },
];

export default function GalleryMediaSection() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 w-fit">
          <Heading>Gallery & Highlights</Heading>
        </div>
        {/* Photo Gallery */}
        <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Image
                  src={image.src}
                  width={500}
                  height={500}
                  quality={20}
                  alt={image.alt}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lPAAAAA=="
                  className="h-64 w-full cursor-pointer rounded-lg object-cover transition-transform hover:scale-105"
                  onClick={() => setSelectedImage(image)}
                />
              </DialogTrigger>
              <DialogContent className="max-w-3xl border-none p-0">
                {selectedImage && (
                  <Image
                    quality={80}
                    width={500}
                    height={500}
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="h-auto w-full"
                  />
                )}
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Video Highlights */}
        {/* <div className="mx-auto max-w-3xl">
          <h3 className="mb-4 text-center text-2xl font-semibold">Experience the Adventure</h3>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Travel highlights video"
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
