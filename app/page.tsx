import BlogSection from '@/components/section/BlogSection';
import DestinationsSection from '@/components/section/DestinationSection';
import FAQsSection from '@/components/section/FAQsSection';
import FeaturedProgramsSection from '@/components/section/FeaturedProgramsSection';
import GalleryMediaSection from '@/components/section/GalleryMediaSection';
import HeroSection from '@/components/section/HeroSection';
import HowItWorksSection from '@/components/section/HowItWorksSection';
import NewsletterSignupSection from '@/components/section/NewsletterSignupSection';
import TestimonialsSection from '@/components/section/TestimonialsSection';
import TourHighlightsSection from '@/components/section/TourHighlightsSection';
import WhyChooseUsSection from '@/components/section/WhyChooseUsSection';

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <TourHighlightsSection />
      <DestinationsSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <FeaturedProgramsSection />
      <HowItWorksSection />
      <GalleryMediaSection />
      <NewsletterSignupSection />
      <FAQsSection />
      <BlogSection />
    </div>
  );
}
