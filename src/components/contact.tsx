import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Mail,
  Linkedin,
  Github,
  Twitter,
  Send,
  CheckCircle2,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// ✅ Schema with phone
const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Enter valid phone number"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  // ✅ Google Sheets Integration
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbx-bcv4LpmAJBVewk9BxsJNkN6g0BdtypVrSKyf8SexztwG2k57gRD08muHLaJTDV7OXw/exec",
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      );

      const result = await res.json();

      if (result.status === "success") {
        toast({
          title: "Message Sent!",
          description: "I’ll contact you soon.",
        });
        reset();
      } else {
        throw new Error();
      }
    } catch {
      toast({
        title: "Error",
        description: "Something went wrong",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("mandeepkumarmannu123@gmail.com");
    setIsCopied(true);
    toast({
      title: "Email copied!",
    });
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT SIDE */}
          <div className="flex flex-col gap-8">

            <div className="glass-card rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>

              {/* Email */}
              <div
                onClick={copyEmail}
                className="flex items-center gap-4 p-4 bg-white/5 rounded-xl cursor-pointer"
              >
                <div className="text-primary">
                  {isCopied ? <CheckCircle2 /> : <Mail />}
                </div>
                <p className="text-white">
                  mandeepkumarmannu123@gmail.com
                </p>
              </div>

              {/* 🔥 Social Profiles */}
              <div className="mt-8">
                <p className="text-sm text-zinc-500 mb-4 uppercase">
                  Social Profiles
                </p>

                <div className="flex gap-4">
                  <a href="#" target="_blank">
                    <Linkedin />
                  </a>
                  <a href="#" target="_blank">
                    <Github />
                  </a>
                  <a href="#" target="_blank">
                    <Twitter />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="glass-card rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Send a Message
            </h3>

            {/* Name */}
            <input
              {...register("name")}
              placeholder="Your Name"
              className="w-full mb-4 p-3 bg-black/50 text-white rounded"
            />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}

            {/* Email */}
            <input
              {...register("email")}
              placeholder="Email"
              className="w-full mb-4 p-3 bg-black/50 text-white rounded"
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}

            {/* Phone */}
            <input
              {...register("phone")}
              placeholder="Phone Number"
              className="w-full mb-4 p-3 bg-black/50 text-white rounded"
            />
            {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}

            {/* Message */}
            <textarea
              {...register("message")}
              placeholder="Message"
              className="w-full mb-4 p-3 bg-black/50 text-white rounded"
            />
            {errors.message && <p className="text-red-500">{errors.message.message}</p>}

            {/* Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full p-3 bg-gradient-to-r from-primary to-secondary text-white rounded"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}