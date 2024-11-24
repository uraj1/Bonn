import { useState } from "react";
import PageTransition from "../components/PageTransition";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  // Contact Information
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+91 (700) 429210",
      link: "tel:+917004292100",
    },
    {
      icon: Mail,
      title: "Email",
      details: "contact@bonngroup.com",
      link: "mailto:contact@bonngroup.com",
    },
    {
      icon: MapPin,
      title: "Office",
      details: "Ludhiana, Punjab, India",
      link: "https://maps.google.com",
    },
  ];

  // Handle Form Submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    try {
      const serviceId = "service_hoopmfk"; // Replace with your EmailJS Service ID
      const templateId = "template_ir6nhld"; // Replace with your EmailJS Template ID
      const userId = "ivkIuEKupskUtQ_5c"; // Replace with your EmailJS Public Key

      // Send email via EmailJS
      await emailjs.send(serviceId, templateId, data, userId);

      // Show success toast notification
      toast.success("Details sent successfully!", {
        position: "top-right",
        autoClose: 3000,
      });

      // Reset form fields
      form.reset();
    } catch (error) {
      console.error("Error sending email:", error);

      // Show error toast notification
      toast.error("Failed to send details. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageTransition>
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h1 className="text-4xl font-bold mb-8">Get in Touch</h1>
              <p className="text-gray-600 dark:text-gray-400 mb-12">
                Have questions about our supply chain solutions? We're here to
                help. Reach out to us through any of the following channels.
              </p>

              <div className="space-y-8">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={index}
                      href={item.link}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      <div className="flex-shrink-0">
                        <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-medium">{item.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {item.details}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full flex items-center justify-center space-x-2 px-6 py-3 ${
                    isLoading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
                  } text-white rounded-lg transition-colors`}
                >
                  {isLoading ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
