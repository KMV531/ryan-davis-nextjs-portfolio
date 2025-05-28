'use client'

import { AlignJustify } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'

// Components
import Logo from './Logo'
import Socials from './Socials'
import { useState } from 'react'

const mobilenavLinks = [
  { title: 'Home', href: '#home' },
  { title: 'Projects', href: '#projects' },
  { title: 'Contact', href: '#contact' },
]

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavigation = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsOpen(false) // Close mobile nav
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <AlignJustify className='cursor-pointer' />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className='hidden'>
          <SheetTitle className='hidden'>Mobile Navigation</SheetTitle>
        </SheetHeader>
        <div className='flex flex-col items-center justify-between h-full py-8'>
          {/* Logo + Links */}
          <div className='flex flex-col items-center gap-y-16'>
            <Logo />

            <nav className='flex flex-col items-center gap-y-8'>
              {mobilenavLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  onClick={(e) => handleNavigation(e, link.href)}
                  className='text-2xl font-medium capitalize hover:text-primary transition-all'
                >
                  {link.title}
                </a>
              ))}
            </nav>
          </div>

          {/* Socials */}
          <Socials containerStyles='flex gap-x-4' iconStyles='text-2xl' />
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
