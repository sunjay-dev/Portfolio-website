"use client";
import React, { useState } from "react";
import EmailSuccess from "@/components/cards/EmailSuccess";
import Icon from "../ui/Icon";
import User from "@/data/user.json";
interface ErrorInterface {
  nameError: boolean;
  emailError: boolean;
  emailErrorMessage: string;
  messageError: boolean;
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<ErrorInterface>({ nameError: false, emailError: false, emailErrorMessage: "", messageError: false });
  const [isSucess, setIsSucess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const userFirstName = User.name?.split(" ")[0];

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim()) {
      setError((prev) => ({ ...prev, nameError: true }));
      return;
    }
    if (!email.trim()) {
      setError((prev) => ({ ...prev, emailError: true, emailErrorMessage: "This Field is required" }));
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError((prev) => ({ ...prev, emailError: true, emailErrorMessage: "Please enter a valid email address" }));
      return;
    }
    if (!message.trim()) {
      setError((prev) => ({ ...prev, messageError: true }));
      return;
    }

    setIsSubmitting(true);
    fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Something wrong happened!");
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setEmail("");
        setName("");
        setMessage("");
        setIsSucess(true);
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.log(error);
        setIsSubmitting(false);
      })
      .finally(() => {
        setTimeout(() => setIsSucess(false), 10000);
      });
  };

  return (
    <section
      className="min-w-dvw bg-[#f8f8f8] text-[#3d3d3d] md:p-16 sm:p-8 p-6 pb-8 dark:bg-[#1e1e1e] dark:text-[#f8f8f8] dark:opacity-90"
      id="contact"
    >
      <h2 className="text-4xl font-bold ">
        <u> Get </u>In Touch
      </h2>
      <div className="mt-14 grid sm:grid-flow-col items-start sm:col-span-2 gap-12">
        <div className="flex-1">
          <h3 className="text-2xl font-semibold">Contact Information</h3>

          <div className="flex items-start mt-6 space-x-4">
            <div className="pt-1">
              <Icon icon="ic:outline-email" className="w-7 h-7" />
            </div>

            <div className="flex flex-col">
              <p className="text-lg font-medium">Email</p>
              <p>{User.contact.email}</p>
            </div>
          </div>

          <div className="flex items-start mt-6 space-x-4">
            <div className="pt-1">
              <Icon icon="tabler:phone" className="w-7 h-7" />
            </div>

            <div className="flex flex-col">
              <p className="text-lg font-medium">Phone</p>
              <p>{User.contact.phone}</p>
            </div>
          </div>

          <div className="flex items-start mt-6 space-x-4">
            <div className="pt-1">
              <Icon icon="tdesign:location" className="w-7 h-7" />
            </div>

            <div className="flex flex-col">
              <p className="text-lg font-medium">Location</p>
              <p>{User.location}</p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold">Connect With Me</h3>
            <div className="flex mt-4 space-x-4">
              <a
                href={User.social.github.url}
                rel="noopener noreferrer"
                aria-label={`Visit ${User.name}'s Github profile`}
                target="_blank"
                className="p-3 hover:bg-transparent active:bg-transparent dark:hover:text-white dark:active:text-white bg-gray-200 text-[#3d3d3d] dark:bg-gray-50 rounded-full"
              >
                <Icon icon="lucide:github" className="w-5 h-5" />
              </a>
              <a
                href={User.social.leetcode}
                rel="noopener noreferrer"
                aria-label={`Visit ${User.name}'s Linkedin profile`}
                target="_blank"
                className="p-3 hover:bg-transparent active:bg-transparent bg-gray-200 dark:hover:text-white dark:active:text-white dark:bg-gray-50 text-[#3d3d3d] rounded-full"
              >
                <Icon icon="meteor-icons:linkedin" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={(e) => formSubmit(e)} className="flex-1 sm:p-4 p-2 sm:pt-0 pl-0 pt-0">
          <h3 className="text-2xl font-semibold">Send Me a Message</h3>
          {isSucess && <EmailSuccess />}
          <div className="flex flex-col space-y-4 mt-6">
            <div>
              <label className="text-sm" htmlFor="name">
                Your Name
              </label>
              {error.nameError && <p className="text-red-500 my-1 text-sm flex dark:selection:text-red-500">This field is required</p>}
              <input
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (error.nameError) setError((prev) => ({ ...prev, nameError: false }));
                }}
                className={`w-full bg-white py-3 px-4 mt-1 rounded-md border placeholder:text-[0.9rem] text-[#3d3d3d] ${error.nameError ? "border-red-500 dark:border-[1.5px]" : "border-none"}`}
                placeholder="Name"
                id="name"
                autoComplete="name"
              />
            </div>
            <div>
              <label className="text-sm" htmlFor="email">
                Your Email
              </label>
              {error.emailError && <p className="text-red-500 my-1 text-sm flex dark:selection:text-red-500">{error.emailErrorMessage}</p>}
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error.emailError) setError((prev) => ({ ...prev, emailError: false }));
                }}
                className={`w-full py-3 bg-white px-4 mt-1 rounded-md border placeholder:text-[0.9rem] text-[#3d3d3d] ${error.emailError ? "border-red-500 dark:border-[1.5px]" : "border-none"}`}
                placeholder="Example@gmail.com"
                id="email"
                autoComplete="email"
              />
            </div>
            <div>
              <label className="text-sm" htmlFor="message">
                Your Message
              </label>
              {error.messageError && <p className="text-red-500 my-1 text-sm flex dark:selection:text-red-500">This field is required</p>}
              <textarea
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  if (error.messageError) setError((prev) => ({ ...prev, messageError: false }));
                }}
                className={`w-full bg-white mt-1 py-3 px-4 rounded-md border placeholder:text-[0.9rem] text-[#3d3d3d] resize-none min-h-[120px] ${error.messageError ? "border-red-500 dark:border-[1.5px]" : "border-none"}`}
                placeholder={`Hello ${userFirstName}, I'd like to discuss a project...`}
                id="message"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full active:scale-[0.98] hover:opacity-95 font-medium bg-[#3d3d3d] text-white dark:bg-white dark:text-[#3d3d3d] py-3 rounded-md flex items-center justify-center"
            >
              <Icon icon="lucide:send" className="h-4 w-4 mr-2" />

              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
