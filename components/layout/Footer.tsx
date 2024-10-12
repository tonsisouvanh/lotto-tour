import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Information */}
          <div>
            <Link href="/" className="mb-4 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-color-1"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="ml-1 text-xl font-bold">LottoTour</span>
            </Link>
            <p className="mb-4 text-sm">
              Discover the world with our expertly crafted tours and unforgettable adventures.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-primary">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="hover:text-primary">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="hover:text-primary">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="hover:text-primary">
                <Youtube size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/tours" className="hover:text-primary">
                  Tours
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-primary">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <p className="mb-2">123 Travel Street, Adventure City, TC 12345</p>
            <p className="mb-2">Phone: +1 (123) 456-7890</p>
            <p className="mb-2">Email: info@travelco.com</p>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Stay Updated</h3>
            <p className="mb-4">Subscribe to our newsletter for the latest travel tips and exclusive offers.</p>
            <form className="flex flex-col space-y-2">
              <Input type="email" placeholder="Enter your email" className="bg-gray-800 text-white" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>

        {/* Legal Links */}
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; 2023 LottoTour. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/terms" className="hover:text-primary">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:text-primary">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
