"use client"; // If you're using the app directory

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Button } from "@/components/ui/button";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit = async (data: FormData) => {
    setStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-xl mx-auto">
      <div>
        <label className="block text-sm font-medium mb-1">Name</label>
        <input
          {...register("name", { required: true })}
          className="w-full border border-gray-300 rounded-md px-4 py-2"
          placeholder="Your name"
        />
        {errors.name && <p className="text-red-500 text-sm">Name is required.</p>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          {...register("email", { required: true })}
          className="w-full border border-gray-300 rounded-md px-4 py-2"
          placeholder="Your email"
        />
        {errors.email && <p className="text-red-500 text-sm">Email is required.</p>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Message</label>
        <textarea
          {...register("message", { required: true })}
          rows={5}
          className="w-full border border-gray-300 rounded-md px-4 py-2"
          placeholder="Your message"
        />
        {errors.message && <p className="text-red-500 text-sm">Message is required.</p>}
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>

      
    
      {status === "success" && <p className="text-green-500 mt-2">Message sent successfully!</p>}
      {status === "error" && <p className="text-red-500 mt-2">Something went wrong. Try again.</p>}
    </form>
  );
}
