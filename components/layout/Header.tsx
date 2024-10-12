'use client';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Globe } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '../Logo';
import MobileNavbar from './MobileNavbar';
import { navItems } from '@/const';

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky left-0 right-0 top-0 z-[10] flex w-full items-center justify-between bg-white px-6 py-4 shadow-md">
      {/* Logo */}
      <Logo />

      {/* Navigation Menu - Desktop */}
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          {navItems.map(item => (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuLink
                href={item.href}
                className={`px-3 py-2 text-sm font-medium hover:text-color-1 ${pathname === item.href ? 'text-color-1 underline' : 'text-gray-700'}`}
              >
                {item.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
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
