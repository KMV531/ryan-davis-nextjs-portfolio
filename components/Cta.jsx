'use client'

import { Button } from './ui/button'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import Contact from '@/components/Contact'
import { useState } from 'react'

const Cta = () => {
  const [open, setOpen] = useState(false)

  return (
    <section className='py-24 bg-tertiary dark:bg-secondary/40' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center'>
          <h2 className='h3 max-w-xl text-center mb-8'>
            Prepared to turn your ideas into reality? I&apos;m here to help.
          </h2>

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className='cursor-pointer'>Contact Me</Button>
            </DialogTrigger>
            <DialogContent className='max-w-4xl max-h-[80vh] overflow-y-auto p-6 rounded-lg'>
              <DialogTitle className='hidden'>Contact Form</DialogTitle>
              <Contact onClose={() => setOpen(false)} />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  )
}

export default Cta
