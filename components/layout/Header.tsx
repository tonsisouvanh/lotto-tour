import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Globe, Menu } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import MobileNavbar from './MobileNavbar';
import Logo from '../Logo';

export default function Header() {
  return (
    <header className="sticky left-0 right-0 top-0 flex w-full items-center justify-between bg-white px-6 py-4 shadow-md">
      {/* Logo */}
      <Logo />

      {/* Navigation Menu - Desktop */}
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-color-1">
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/about-us"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-color-1"
            >
              About Us
            </NavigationMenuLink>
          </NavigationMenuItem>
          {/* <NavigationMenuItem>
            <NavigationMenuTrigger className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-color-1">
              Tours/Programs
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-color-1 to-blue-600 p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mt-4 text-lg font-medium text-white">Featured Tour</div>
                      <p className="text-sm leading-tight text-white/90">Discover our most popular destinations</p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100"
                      href="/"
                    >
                      <div className="text-sm font-medium leading-none">Adventure Tours</div>
                      <p className="line-clamp-2 text-sm leading-snug text-slate-500">
                        Exciting experiences for thrill-seekers
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100"
                      href="/"
                    >
                      <div className="text-sm font-medium leading-none">Cultural Expeditions</div>
                      <p className="line-clamp-2 text-sm leading-snug text-slate-500">
                        Immerse yourself in local traditions
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100"
                      href="/"
                    >
                      <div className="text-sm font-medium leading-none">Relaxation Retreats</div>
                      <p className="line-clamp-2 text-sm leading-snug text-slate-500">
                        Unwind in serene and beautiful locations
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem> */}
          <NavigationMenuItem className="">
            <NavigationMenuLink
              href="/destinations"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-color-1"
            >
              Destinations
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/testimonials"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-color-1"
            >
              Testimonials
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/contact"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-color-1"
            >
              Contact Us
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile Menu Button */}
      <MobileNavbar />

      {/* Right side items */}
      <div className="hidden items-center space-x-4 md:flex">
        {/* Language Selector */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Globe className="h-4 w-4 text-black" />
              <span className="sr-only">Select language</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>English</DropdownMenuItem>
            <DropdownMenuItem>Español</DropdownMenuItem>
            <DropdownMenuItem>Français</DropdownMenuItem>
            <DropdownMenuItem>Deutsch</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* CTA Button */}
        <Button variant="default">
          <Link href="/tours">Explore Tours</Link>
        </Button>
      </div>
    </header>
  );
}
