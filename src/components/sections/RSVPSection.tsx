"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { Variants } from "framer-motion";
import { CheckCheck, Copy, Loader } from "lucide-react";
import emailjs from "@emailjs/browser";

// Zod schema for form validation
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(1, "Please specify number of guests"),
});

type FormValues = z.infer<typeof formSchema>;

const RSVPSection = () => {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setSubmitError("");

    try {
      // Check for duplicate submission using phone number
      const submissionKey = `rsvp_submission_${data.phone.replace(/\D/g, "")}`;
      const existingSubmission = localStorage.getItem(submissionKey);

      if (existingSubmission) {
        throw new Error(
          "You have already submitted an RSVP with this phone number."
        );
      }

      // Initialize EmailJS
      try {
        emailjs.init("De24VjMeTPpQFf0Yn");
      } catch {
        throw new Error("EmailJS failed to initialize");
      }

      // Prepare all email promises
      const emailPromises = [
        // 1. Send beautiful confirmation to GUEST
        emailjs.send("service_v58b61g", "template_3p6nq5p", {
          name: data.name,
          email: data.email,
          phone: data.phone,
          to_name: data.name,
          to_email: data.email,
          invitation_url:
            "https://seun-wed-abigail.vercel.app/assets/invitation-card.jpg",
          wedding_date: "December 20, 2025",
        }),

        // 2. Send notifications to all ORGANIZERS
        emailjs.send("service_v58b61g", "template_f09ij18", {
          name: data.name,
          email: data.email,
          phone: data.phone,
          to_name: "Adewole & Abigail",
          to_email: "dadavictory2000@gmail.com",
          date: new Date().toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          guest_email: data.email,
        }),

        emailjs.send("service_v58b61g", "template_f09ij18", {
          name: data.name,
          email: data.email,
          phone: data.phone,
          to_name: "Adewole & Abigail",
          to_email: "bayoseun1981@gmail.com",
          date: new Date().toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          guest_email: data.email,
        }),

        emailjs.send("service_v58b61g", "template_f09ij18", {
          name: data.name,
          email: data.email,
          phone: data.phone,
          to_name: "Adewole & Abigail",
          to_email: "ciceliasijuwade@gmail.com",
          date: new Date().toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          guest_email: data.email,
        }),
      ];

      // Send all emails concurrently
      await Promise.all(emailPromises);

      // Store submission in localStorage after successful submission
      const submissionData = {
        phone: data.phone,
        name: data.name,
        email: data.email,
        submittedAt: new Date().toISOString(),
        timestamp: Date.now(),
      };

      localStorage.setItem(submissionKey, JSON.stringify(submissionData));

      setSubmitSuccess(true);
      form.reset();
    } catch (error) {
      console.error("Submission failed:", error);

      const message = error instanceof Error ? error.message : String(error);

      if (message.includes("already submitted")) {
        setSubmitError(
          "This phone number has already been used to submit an RSVP. Please contact us if this is an error."
        );
      } else {
        setSubmitError("Failed to submit RSVP. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const flowerVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -180 },
    visible: {
      opacity: 0.5,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <div
      className="relative z-10 bg-[#FBFAF8] py-16 md:py-26 max-md:px-4 overflow-hidden"
      id="rsvp"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-[1200px] mx-auto relative mt-12 md:mt-20"
      >
        {/* Top Left Flower */}
        <motion.div
          variants={flowerVariants}
          className="absolute -top-[60px] md:-top-[80px] lg:-top-[120px] -left-[40px] md:-left-[60px] lg:-left-[80px]"
        >
          <Image
            src={"/assets/flowers.svg"}
            alt="flower"
            height={200}
            width={200}
            className="opacity-50 md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px]"
          />
        </motion.div>

        {/* Main Content Container */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-center">
          {/* RSVP Form - Left Side */}
          <motion.div
            id="rsvp-form"
            variants={itemVariants}
            className="bg-white border border-amber-700 rounded-xs w-full max-w-[600px] lg:max-w-[500px] p-8 md:p-10 shadow-sm"
          >
            <div className="text-center">
              <motion.div
                variants={itemVariants}
                className="w-[60px] h-[45px] md:w-[80px] md:h-[60px] relative mx-auto"
              >
                <Image
                  src={"/assets/flower-crown.png"}
                  alt="flower"
                  fill
                  className="object-contain"
                />
              </motion.div>

              <motion.h2
                variants={itemVariants}
                className="mb-3 md:mb-4 font-[family-name:var(--font-play-fair)] text-lg md:text-xl lg:text-2xl font-bold tracking-wide text-center text-[#4A4A4A]"
              >
                Are You Attending?
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-xs md:text-sm tracking-wider text-amber-500 font-semibold text-center uppercase font-[family-name:var(--font-montserrat)]"
              >
                Book your spot
              </motion.p>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 mt-6 md:mt-8"
              >
                {submitSuccess ?
                  <div className="text-center py-8">
                    <div className="text-green-600 text-lg font-semibold mb-4">
                      🎉 Thank you for RSVPing!
                    </div>
                    <p className="text-gray-600 text-sm">
                      We&apos;ve sent a confirmation email with all the wedding
                      details and your invitation card. We can&apos;t wait to
                      celebrate with you!
                    </p>
                  </div>
                : <>
                    {submitError && (
                      <div className="bg-red-50 border border-red-200 rounded-sm p-3 text-red-700 text-sm">
                        {submitError}
                      </div>
                    )}

                    <motion.div
                      variants={itemVariants}
                      className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4"
                    >
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                placeholder="Name"
                                className="bg-[#F7F7F7] border-none outline-none py-3 px-3 w-full font-semibold tracking-wide rounded-xs placeholder:text-[#A1A1A1] text-black shadow-xs text-sm focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50 transition-all duration-200"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-xs text-red-500 mt-1" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="Email"
                                className="bg-[#F7F7F7] border-none outline-none py-3 px-3 w-full font-semibold tracking-wide rounded-xs placeholder:text-[#A1A1A1] text-black shadow-xs text-sm focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50 transition-all duration-200"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-xs text-red-500 mt-1" />
                          </FormItem>
                        )}
                      />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                placeholder="Enter your phone number"
                                className="bg-[#F7F7F7] border-none outline-none py-3 px-3 w-full font-semibold tracking-wide rounded-xs placeholder:text-[#A1A1A1] text-black shadow-xs text-sm focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50 transition-all duration-200"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-xs text-red-500 mt-1" />
                          </FormItem>
                        )}
                      />
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        disabled={isSubmitting}
                        type="submit"
                        className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold tracking-wide rounded-xs cursor-pointer transition-all duration-200 text-sm capitalize z-10 relative"
                      >
                        {isSubmitting ?
                          <>
                            <Loader
                              className="animate-spin mr-2"
                              size={16}
                            />
                            Sending...
                          </>
                        : "Book Spot"}
                      </Button>
                    </motion.div>
                  </>
                }
              </form>
            </Form>
          </motion.div>

          {/* Gifts Section - Right Side */}
          <motion.div
            variants={itemVariants}
            className="bg-white border border-amber-700 rounded-xs w-full max-w-[600px] lg:max-w-[500px] p-8 md:p-10 shadow-sm"
          >
            <div className="text-center">
              <motion.div
                variants={itemVariants}
                className="w-[60px] h-[45px] md:w-[80px] md:h-[60px] relative mx-auto"
              >
                <Image
                  src={"/assets/flower-crown.png"}
                  alt="flower"
                  fill
                  className="object-contain"
                />
              </motion.div>

              <motion.h2
                variants={itemVariants}
                className="mb-3 md:mb-4 font-[family-name:var(--font-play-fair)] text-lg md:text-xl lg:text-2xl font-bold tracking-wide text-center text-[#4A4A4A]"
              >
                Gifts
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-xs md:text-sm tracking-wider text-amber-500 font-semibold text-center uppercase font-[family-name:var(--font-montserrat)]"
              >
                Your love and support
              </motion.p>
            </div>

            {/* Gift Message */}
            <motion.div
              variants={itemVariants}
              className="bg-amber-50 border border-amber-200 rounded-sm p-4 mb-6 mt-6"
            >
              <p className="text-center font-[family-name:var(--font-montserrat)] text-gray-700 leading-relaxed text-sm">
                Your presence at our wedding is the greatest gift we could ask
                for. If you would like to contribute further, a cash gift or
                Amazon wishlist for our new home would be greatly appreciated.
              </p>
            </motion.div>

            {/* Bank Details */}
            <motion.div
              variants={itemVariants}
              className="space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-gray-50 rounded">
                <span className="text-sm font-medium text-gray-600">Bank:</span>
                <span className="font-semibold text-gray-800 text-sm">
                  Stanbic IBTC
                </span>
              </div>

              <div
                className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-gray-50 rounded cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => copyToClipboard("0037445710")}
              >
                <span className="text-sm font-medium text-gray-600">
                  Account Number:
                </span>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-800 text-sm">
                    0037445710
                  </span>
                  <button className="text-amber-500 hover:text-amber-600 text-xs">
                    {copied ?
                      <CheckCheck
                        size={16}
                        className="text-green-400"
                      />
                    : <Copy size={16} />}
                  </button>
                </div>
              </div>

              <div
                className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-gray-50 rounded cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() =>
                  copyToClipboard("Adewole Adebayo & Abigail Akinrinola")
                }
              >
                <span className="text-sm font-medium text-gray-600">
                  Account Name:
                </span>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-800 text-sm text-right">
                    Adewole Adebayo & Abigail Akinrinola
                  </span>
                  <button className="text-amber-500 hover:text-amber-600 text-xs">
                    {copied ?
                      <CheckCheck
                        size={16}
                        className="text-green-400"
                      />
                    : <Copy size={16} />}
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Amazon Wishlist Button */}
            <motion.div
              variants={itemVariants}
              className="text-center mt-6"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-gray-700 hover:bg-gray-800 text-white font-semibold tracking-wide rounded-xs cursor-pointer transition-all duration-200 text-sm"
              >
                View Amazon Wishlist
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Right Flower */}
        <motion.div
          variants={flowerVariants}
          className="absolute -bottom-[60px] md:-bottom-[80px] lg:-bottom-[120px] -right-[40px] md:-right-[60px] lg:-right-[80px]"
        >
          <Image
            src={"/assets/flowers.svg"}
            alt="flower"
            height={200}
            width={200}
            className="opacity-50 md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px]"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default RSVPSection;
