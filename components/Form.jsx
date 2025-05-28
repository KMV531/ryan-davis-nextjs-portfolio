'use client'

import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'sonner'
import { User, MailIcon, ArrowRightIcon, MessageSquare } from 'lucide-react'

const Form = ({ onClose }) => {
  const [loading, setLoading] = useState(false)
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(() => {
        toast.success('Your message has been sent successfully! 🎉')
        form.current.reset()
        onClose() // close the modal
      })
      .catch((error) => {
        console.log('EmailJS error:', error) // ✅ Proper error logging
        toast.error(
          'There was an error sending your message. Please try again.'
        )
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-y-4'>
      {/* input */}
      <div className='relative flex items-center'>
        <Input type='name' required id='name' placeholder='Enter Your Name' />
        <User className='absolute right-6' size={20} />
      </div>

      {/* input */}
      <div className='relative flex items-center'>
        <Input
          type='email'
          required
          name='user_email'
          id='email'
          placeholder='Enter Your Email'
        />
        <MailIcon className='absolute right-6' size={20} />
      </div>

      {/* input */}
      <div className='relative flex items-center'>
        <Textarea
          type='text'
          required
          name='user_message'
          id='text'
          placeholder='Enter Your Message'
        />
        <MessageSquare className='absolute right-6 top-4' size={20} />
      </div>
      <Button
        className='flex items-center gap-x-1 max-w-[166px]'
        disabled={loading}
      >
        {loading ? 'Submitting...' : "Let's Talk"}
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  )
}

export default Form
