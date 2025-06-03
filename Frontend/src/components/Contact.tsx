import React, { useState } from 'react'
import EmailSuccess from './cards/EmailSuccess';

interface ErrorInterface {
  nameError: boolean,
  emailError: boolean,
  emailErrorMessage: string
  messageError: boolean,
}

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState<ErrorInterface>({ nameError: false, emailError: false, emailErrorMessage: '', messageError: false })
  const [isSucess, setIsSucess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim()) {
      setError(prev => ({ ...prev, nameError: true }))
      return;
    }
    if (!email.trim()) {
      setError(prev => ({ ...prev, emailError: true, emailErrorMessage: "This Field is required" }))
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(prev => ({ ...prev, emailError: true, emailErrorMessage: "Please enter a valid email address" }))
      return;
    }
    if (!message.trim()) {
      setError(prev => ({ ...prev, messageError: true }))
      return;
    }

    setIsSubmitting(true);
    fetch(import.meta.env.VITE_BACKEND_EMAIL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message
      })
    }).then(res => {
      if (!res.ok) throw new Error('Something wrong happened!');
      return res.json();
    }).then(data => {
      console.log(data);
      setEmail('');
      setName('');
      setMessage('');
      setIsSucess(true);
      setIsSubmitting(false);
      setTimeout(() => setIsSucess(false), 15000)
    }).catch(error => {
      console.log(error);
      setIsSubmitting(false);
    })
  };

  return (
    <section className="min-w-dvw bg-[#f8f8f8] md:p-16 sm:p-8 p-6 pb-8" id="contact">
      <h2 className="text-4xl font-bold text-[#3d3d3d]"><u> Get </u>In Touch</h2>
      <div className="mt-14 grid sm:grid-flow-col items-start sm:col-span-2 gap-12">
        {/* contact div */}
        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-[#3d3d3d]">Contact Information</h3>

          {/* email */}
          <div className="flex items-start mt-6 space-x-4">
            <div className="text-[#3d3d3d] pt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                strokeWidth="2">
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </div>

            <div className="flex flex-col">
              <p className="text-lg font-medium text-[#3d3d3d]">Email</p>
              <p className="text-[#3d3d3d]">collabwithsunjay@gmail.com</p>
            </div>
          </div>

          {/* Phone */}

          <div className="flex items-start mt-6 space-x-4">
            <div className="text-[#3d3d3d] pt-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                </path>
              </svg>
            </div>

            <div className="flex flex-col">
              <p className="text-lg font-medium text-[#3d3d3d]">Phone</p>
              <p className="text-[#3d3d3d]">+92 309 9030247</p>
            </div>
          </div>

          {/* Location */}

          <div className="flex items-start mt-6 space-x-4">
            <div className="text-[#3d3d3d] pt-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>

            <div className="flex flex-col">
              <p className="text-lg font-medium text-[#3d3d3d]">Location</p>
              <p className="text-[#3d3d3d]">Hyderabad Sindh, Pakistan</p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg text-[#3d3d3d] font-semibold">Connect With Me</h3>
            <div className="flex mt-4 space-x-4">

              <a href="https://github.com/sunjay-dev/" target="_blank" className="p-3 hover:bg-transparent active:bg-transparent bg-gray-200 rounded-full">
                {/* github */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path
                    d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4">
                  </path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/sunjayk" target="_blank" className="p-3 hover:bg-transparent active:bg-transparent bg-gray-200 rounded-full">
                {/* linkedin */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* form div */}
        <form onSubmit={e => formSubmit(e)} className="flex-1 sm:p-4 p-2 sm:pt-0 pl-0 pt-0">
          <h3 className="text-2xl font-semibold text-[#3d3d3d]">Send Me a Message</h3>
          {isSucess && <EmailSuccess />}
          <div className="flex flex-col space-y-4 mt-6">
            <div>
              <label className="text-sm" htmlFor="name">Your Name</label>
              {error.nameError && (<p className="text-red-500 my-1 text-sm flex">This field is required</p>)}
              <input value={name} onChange={e => {
                setName(e.target.value)
                if (error.nameError) setError(prev => ({ ...prev, nameError: false }))
              }} className={`w-full bg-white py-3 px-4 mt-1 rounded-md border placeholder:text-[0.9rem] ${error.nameError ? 'border-red-500' : 'border-none'}`} placeholder="Name" id="name"
                autoComplete="name" />
            </div>
            <div>
              <label className="text-sm" htmlFor="email">Your Email</label>
              {error.emailError && (<p className="text-red-500 my-1 text-sm flex">{error.emailErrorMessage}</p>)}
              <input value={email}
                onChange={e => {
                  setEmail(e.target.value)
                  if (error.emailError) setError(prev => ({ ...prev, emailError: false }))
                }}
                className={`w-full py-3 bg-white px-4 mt-1 rounded-md border placeholder:text-[0.9rem] ${error.emailError ? 'border-red-500' : 'border-none'}`}
                placeholder="Example@gmail.com" id="email" autoComplete="email" />
            </div>
            <div>
              <label className="text-sm" htmlFor="message">Your Message</label>
              {error.messageError && (<p className="text-red-500 my-1 text-sm flex">This field is required</p>)}
              <textarea value={message} onChange={e => {
                setMessage(e.target.value)
                if (error.messageError) setError(prev => ({ ...prev, messageError: false }))
              }}
                className={`w-full bg-white mt-1 py-3 px-4 rounded-md border placeholder:text-[0.9rem] resize-none min-h-[120px] ${error.messageError ? 'border-red-500' : 'border-none'}`}
                placeholder="Hello Sunjay, I'd like to discuss a project..." id="message"></textarea>
            </div>
            <button type="submit" disabled={isSubmitting} className="w-full active:scale-[0.98] hover:opacity-95 font-medium bg-[#3d3d3d] text-white py-3 rounded-md flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-2">
                <path d="m22 2-7 20-4-9-9-4Z"></path>
                <path d="M22 2 11 13"></path>
              </svg>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}