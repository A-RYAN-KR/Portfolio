import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, MapPin } from 'lucide-react';

const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const locations = [
    { x: "20%", y: "30%", label: "New York" },
    { x: "25%", y: "35%", label: "Chicago" },
    { x: "50%", y: "25%", label: "London" },
    { x: "60%", y: "35%", label: "Paris" },
    { x: "70%", y: "30%", label: "Dubai" },
    { x: "80%", y: "35%", label: "Tokyo" },
    { x: "85%", y: "25%", label: "Seoul" },
    { x: "90%", y: "35%", label: "Sydney" }
  ];

  const inputClasses = (fieldName: string) => `
    w-full px-4 py-2 border rounded-md transition-all duration-300
    ${focusedField === fieldName
      ? 'border-blue-500 shadow-lg shadow-blue-100 dark:shadow-blue-900/20'
      : 'border-gray-300 dark:border-gray-600'}
    dark:bg-gray-700 dark:text-white
    focus:outline-none focus:ring-2 focus:ring-blue-500
  `;

  return (
    <div className="relative w-full py-16 bg-gradient-to-r from-yellow-50 via-green-50 to-pink-100 dark:from-gray-900 dark:via-[rgb(17,24,39)] dark:to-[rgb(17,24,39)] overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900/20" />

        {/* Animated Map Points */}
        {locations.map((loc, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{ left: loc.x, top: loc.y }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.2 }}
            >
              <MapPin className="w-4 h-4 text-cyan-500" />
              <motion.div
                className="absolute -top-1 -left-1 w-6 h-6 bg-cyan-500 rounded-full"
                initial={{ scale: 0, opacity: 0.5 }}
                animate={{ scale: 2, opacity: 0 }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.p
                className="absolute left-6 text-xs text-cyan-600 dark:text-cyan-400 whitespace-nowrap"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                {loc.label}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Header with Animation */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block"
          >
            <motion.p
              className="text-orange-500 font-medium mb-2"
              whileHover={{ scale: 1.05 }}
            >
              Contact Us
            </motion.p>
            <motion.div
              className="h-0.5 bg-orange-500 w-0"
              animate={{ width: '100%' }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold text-gray-800 dark:text-white mt-4"
          >
            Get In Touch
          </motion.h2>
        </div>

        {/* Contact Form with Enhanced Animations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Form fields with animations */}
              {[
                { name: 'firstName', label: 'First name', type: 'text' },
                { name: 'lastName', label: 'Last name', type: 'text' },
                { name: 'email', label: 'Email Address', type: 'email' },
                { name: 'subject', label: 'Subject', type: 'text' }
              ].map((field) => (
                <motion.div
                  key={field.name}
                  whileHover={{ scale: 1.02 }}
                  className="relative"
                >
                  <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField(field.name)}
                    onBlur={() => setFocusedField(null)}
                    className={inputClasses(field.name)}
                    required
                  />
                </motion.div>
              ))}
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                className={inputClasses('message')}
                required
              />
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`
                w-full md:w-auto px-8 py-3 
                bg-gradient-to-r from-pink-500 to-purple-500 
                hover:from-pink-600 hover:to-purple-600
                text-white font-medium rounded-full 
                transition-all duration-300
                flex items-center justify-center gap-2
              `}
              type="submit"
            >
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle className="w-5 h-5" />
                    Sent Successfully!
                  </motion.div>
                ) : (
                  <motion.div
                    key="submit"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="flex items-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Submit
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;