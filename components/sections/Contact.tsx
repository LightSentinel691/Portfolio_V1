"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight, Loader2 } from "lucide-react";
import { useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function Contact() {
  const [hCaptchaToken, setHCaptchaToken] = useState<string | null>(null);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    if (!hCaptchaToken) {
      alert("Please complete the captcha.");
      return;
    }

    setFormStatus("submitting");

    // Mock API call to /api/contact since we don't have true environment variables setup yet
    try {
      // Simulate network request
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log("Form Submitted:", { ...data, hCaptchaToken });
      
      setFormStatus("success");
      reset();
      setHCaptchaToken(null);
      
      // In a real scenario, typically redirect to /thank-you:
      // window.location.href = "/thank-you";
    } catch (err) {
      setFormStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-zinc-50 dark:bg-[#050505] transition-colors duration-300 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col items-center text-center max-w-2xl mx-auto"
        >
          <span className="text-accent text-sm tracking-[0.3em] font-sans uppercase mb-4 pl-1">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight text-foreground mb-6">
            Let's Connect and Collaborate
          </h2>
          <p className="text-muted text-lg font-sans">
            Open to new roles in Nairobi and worldwide freelance opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Direct Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col space-y-12"
          >
            <div>
              <h3 className="text-2xl font-serif text-foreground mb-4 border-b border-muted/20 pb-2">Direct Inquiry</h3>
              <a href="mailto:hello@timothykiige.com" className="group flex items-center gap-4 text-xl font-sans text-muted hover:text-accent transition-colors">
                <Mail size={24} />
                hello@timothykiige.com
              </a>
            </div>

            <div>
              <h3 className="text-2xl font-serif text-foreground mb-4 border-b border-muted/20 pb-2">Schedule a Call</h3>
              <a href="#" className="inline-flex items-center gap-2 text-foreground font-sans text-sm tracking-widest uppercase border border-foreground/20 hover:border-accent px-6 py-3 transition-colors group">
                Open Calendly <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            {/* Structural details for Schema mapping */}
            <div className="hidden" itemScope itemType="https://schema.org/LocalBusiness">
              <span itemProp="name">Timothy Kiige</span>
              <span itemProp="areaServed">Nairobi</span>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-7 bg-background border border-muted/10 p-8 md:p-12 shadow-2xl"
          >
            {formStatus === "success" ? (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center">
                <h3 className="text-3xl font-serif text-foreground mb-4">Message Sent</h3>
                <p className="text-muted font-sans text-lg">Thank you for reaching out. I'll get back to you shortly.</p>
                <button 
                  onClick={() => setFormStatus("idle")}
                  className="mt-8 text-sm font-sans tracking-widest text-accent uppercase hover:text-foreground transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-sans tracking-widest uppercase text-muted">Name</label>
                    <input 
                      id="name"
                      {...register("name", { required: true })}
                      className="w-full bg-transparent border-b border-muted/30 focus:border-accent outline-none py-3 text-foreground font-sans transition-colors"
                      placeholder="Jane Doe"
                    />
                    {errors.name && <span className="text-red-500 text-xs">Name is required</span>}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-sans tracking-widest uppercase text-muted">Email</label>
                    <input 
                      id="email"
                      type="email"
                      {...register("email", { required: true })}
                      className="w-full bg-transparent border-b border-muted/30 focus:border-accent outline-none py-3 text-foreground font-sans transition-colors"
                      placeholder="jane@example.com"
                    />
                    {errors.email && <span className="text-red-500 text-xs">Email is required</span>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs font-sans tracking-widest uppercase text-muted">Subject / Purpose</label>
                  <input 
                    id="subject"
                    {...register("subject", { required: true })}
                    className="w-full bg-transparent border-b border-muted/30 focus:border-accent outline-none py-3 text-foreground font-sans transition-colors"
                    placeholder="Project Inquiry"
                  />
                  {errors.subject && <span className="text-red-500 text-xs">Subject is required</span>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-sans tracking-widest uppercase text-muted">Message</label>
                  <textarea 
                    id="message"
                    rows={4}
                    {...register("message", { required: true })}
                    className="w-full bg-transparent border-b border-muted/30 focus:border-accent outline-none py-3 text-foreground font-sans transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && <span className="text-red-500 text-xs">Message is required</span>}
                </div>

                <div className="pt-2">
                  <HCaptcha
                    sitekey="10000000-ffff-ffff-ffff-000000000001" // Dummy test key, replace in real code
                    onVerify={(token) => setHCaptchaToken(token)}
                    theme="dark"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full bg-foreground text-background py-4 font-sans font-medium tracking-widest uppercase text-sm hover:bg-accent hover:text-black transition-colors duration-300 flex items-center justify-center mt-4"
                >
                  {formStatus === "submitting" ? <Loader2 size={18} className="animate-spin" /> : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
