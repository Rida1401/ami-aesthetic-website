import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ReactGA from "react-ga4";

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    const formData = new FormData(form.current);
    const name = formData.get('user_name');
    const email = formData.get('user_email');
    const phone = formData.get('phone');
    const message = formData.get('message');

    if (!name || !name.trim()) newErrors.user_name = 'Name is required';
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.user_email = 'Valid email is required';
    if (!phone || !/^\+?[\d\s-]{10,}$/.test(phone)) newErrors.phone = 'Valid phone number is required';
    if (!message || !message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('Sending...');

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
        setStatus('Message sent successfully!');

        // Track Custom Event in Google Analytics
        try {
          ReactGA.event({
            category: "Contact",
            action: "Form Submitted",
            label: "Contact Page Form"
          });
        } catch (error) {
          console.warn("GA Event failed:", error);
        }

        form.current.reset();
        setTimeout(() => setStatus(''), 5000); // Clear status after 5 seconds
      }, (error) => {
        setStatus('Failed to send message. Please try again.');
        setTimeout(() => setStatus(''), 5000);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-6 bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-lg border border-white/50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input type="text" name="user_name" id="user_name" className={`w-full px-4 py-2 border-2 rounded-lg focus:ring-blue-500 focus:border-blue-500 ${errors.user_name ? 'border-red-500' : 'border-gray-400'}`} />
          {errors.user_name && <p className="text-red-500 text-xs mt-1">{errors.user_name}</p>}
        </div>
        <div>
          <label htmlFor="clinic_name" className="block text-sm font-medium text-gray-700 mb-1">Clinic Name</label>
          <input type="text" name="clinic_name" id="clinic_name" className="w-full px-4 py-2 border-2 border-gray-400 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input type="email" name="user_email" id="user_email" className={`w-full px-4 py-2 border-2 rounded-lg focus:ring-blue-500 focus:border-blue-500 ${errors.user_email ? 'border-red-500' : 'border-gray-400'}`} />
          {errors.user_email && <p className="text-red-500 text-xs mt-1">{errors.user_email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input type="tel" name="phone" id="phone" className={`w-full px-4 py-2 border-2 rounded-lg focus:ring-blue-500 focus:border-blue-500 ${errors.phone ? 'border-red-500' : 'border-gray-400'}`} />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="inquiry_type" className="block text-sm font-medium text-gray-700 mb-1">Inquiry Type</label>
        <select 
          name="inquiry_type" 
          id="inquiry_type" 
          className="w-full px-4 py-2 border-2 border-gray-400 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white"
        >
          <option value="purchase">Machine Purchase</option>
          <option value="rental">Machine Rental</option>
          <option value="distributor">Distributor/Wholesale Inquiry</option>
          <option value="support">Technical Support</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
        <input type="text" name="subject" id="subject" className="w-full px-4 py-2 border-2 border-gray-400 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <textarea name="message" id="message" rows="5" className={`w-full px-4 py-2 border-2 rounded-lg focus:ring-blue-500 focus:border-blue-500 ${errors.message ? 'border-red-500' : 'border-gray-400'}`}></textarea>
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>
      <div className="flex items-center justify-between">
        <button type="submit" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md disabled:opacity-50" disabled={status === 'Sending...'}>
          {status === 'Sending...' ? 'Sending...' : 'Send Message'}
        </button>
      </div>

      {status && status !== 'Sending...' && (
        <div className={`fixed bottom-6 right-6 z-50 px-6 py-4 rounded-xl shadow-2xl text-white font-medium transition-all duration-300 flex items-center gap-3 ${status.includes('Failed') ? 'bg-red-600' : 'bg-green-600'}`}>
          <span className="text-xl">{status.includes('Failed') ? '❌' : '✅'}</span>
          {status}
        </div>
      )}
    </form>
  );
};

export default ContactForm;