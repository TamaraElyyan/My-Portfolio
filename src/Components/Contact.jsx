
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ngjcrf4', 
        'template_u8y0azb', 
        form.current,
        'GioKnTKLRGtlsD-DI' 
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
          console.log(result.text);
        },
        (error) => {
          alert('Failed to send message. Please try again.');
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="bg-gray-900 py-8 px-4 md:px-16">
      <h3 className="text-lg uppercase tracking-wide text-gray-400 mb-2 font-bold">Contact me</h3>
      <h2 className="text-3xl text-teal-400 font-bold  mb-8">
        Tell me about your project
      </h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-6">
        <label className="block">
          
          <input
            type="text"
            name="name"
            className="mt-1 block w-full p-2 bg-gray-800 text-gray-300 rounded"
            placeholder="Name"
            required
          />
        </label>
        <label className="block">
         
          <input
            type="text"
            name="company"
            className="mt-1 block w-full p-2 bg-gray-800 text-gray-300 rounded"
            placeholder="Company (optional)"
          />
        </label>
        <label className="block">
          
          <input
            type="email"
            name="email"
            className="mt-1 block w-full p-2 bg-gray-800 text-gray-300 rounded"
            placeholder="Email"
            required
          />
        </label>
        <label className="block">
          
          <textarea
            name="message"
            className="mt-1 block w-full p-2 bg-gray-800 text-gray-300 rounded h-32"
            placeholder="Message"
            required
          />
        </label>
        <button
          type="submit"
          className="mt-4 bg-teal-600 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
