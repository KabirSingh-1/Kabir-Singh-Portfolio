// import React, { useState, useRef } from 'react';
// import { motion } from 'framer-motion';
// import { SectionWrapper } from './hoc/sectionWrapper';

// const slideIn = (direction = 'left', type = 'tween', delay = 0.2, duration = 1) => {
//   return {
//     hidden: {
//       x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
//       y: direction === 'up' ? '100%' : direction === 'down' ? '-100%' : 0,
//       opacity: 0,
//     },
//     show: {
//       x: 0,
//       y: 0,
//       opacity: 1,
//       transition: { type, delay, duration, ease: 'easeOut' },
//     },
//   };
// };

// const Contact = () => {
//   const formRef = useRef(null);
//   const [form, setForm] = useState({ name: '', email: '', message: '' });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     // Simulate form submission
//     console.log('Form submitted:', form);

//     setTimeout(() => {
//       setLoading(false);
//       alert('Thank you! I will get back to you as soon as possible.');
//       setForm({ name: '', email: '', message: '' });
//     }, 1500);
//   };
//   return (
//     <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
//       <motion.div
//         variants={slideIn('left', 'tween', 0.2, 1)}
//         className="flex-[0.75] bg-black/50 backdrop-blur-sm p-8 rounded-2xl border border-neutral-700"
//       >
//         <p className="sm:text-lg text-base text-neutral-400 uppercase tracking-wider font-poppins">Get in touch</p>
//         <h3 className="text-white font-black md:text-6xl sm:text-5xl xs:text-4xl text-3xl font-space-grotesk">Contact.</h3>

//         <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
//           <label className="flex flex-col">
//             <span className="text-white font-medium mb-4">Your Name</span>
//             <input
//               type="text"
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               placeholder="What's your name?"
//               className="bg-neutral-800 py-4 px-6 placeholder:text-neutral-500 text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-violet-500"
//               required
//             />
//           </label>
//           <label className="flex flex-col">
//             <span className="text-white font-medium mb-4">Your Email</span>
//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               placeholder="What's your email?"
//               className="bg-neutral-800 py-4 px-6 placeholder:text-neutral-500 text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-violet-500"
//               required
//             />
//           </label>
//           <label className="flex flex-col">
//             <span className="text-white font-medium mb-4">Your Message</span>
//             <textarea
//               rows="7"
//               name="message"
//               value={form.message}
//               onChange={handleChange}
//               placeholder="What do you want to say?"
//               className="bg-neutral-800 py-4 px-6 placeholder:text-neutral-500 text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-violet-500"
//               required
//             />
//           </label>
//           <button
//             type="submit"
//             className="bg-violet-700 hover:bg-violet-800 transition-colors py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
//           >
//             {loading ? 'Sending...' : 'Send'}
//           </button>
//         </form>
//       </motion.div>

//     </div>
//   );
// };


// export default SectionWrapper(Contact, 'contact');

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from './hoc/sectionWrapper';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';

const slideIn = (direction = 'left', type = 'tween', delay = 0.2, duration = 1) => ({
  hidden: {
    x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
    y: direction === 'up' ? '100%' : direction === 'down' ? '-100%' : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { type, delay, duration, ease: 'easeOut' },
  },
});

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_jnq0p4p', // Replace with EmailJS Service ID
        'template_nxln3p5', // Replace with EmailJS Template ID
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        '2_NW_aQaOObnFn1B-' // Replace with EmailJS Public Key
      )
      .then(() => {
        setLoading(false);
        toast.success('✅ Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setLoading(false);
        toast.error('❌ Failed to send message. Try again!');
      });
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <Toaster position="top-right" reverseOrder={false} />
      
      {/* Contact Form */}
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex-[0.75] bg-black/50 backdrop-blur-md p-8 rounded-2xl border border-neutral-700 shadow-lg"
      >
        <p className="sm:text-lg text-base text-neutral-400 uppercase tracking-wider font-poppins">
          Get in touch
        </p>
        <h3 className="text-white font-black md:text-6xl sm:text-5xl xs:text-4xl text-3xl font-space-grotesk">
          Contact.
        </h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-neutral-800 py-4 px-6 placeholder:text-neutral-500 text-white rounded-lg outline-none focus:ring-2 focus:ring-violet-500"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-neutral-800 py-4 px-6 placeholder:text-neutral-500 text-white rounded-lg outline-none focus:ring-2 focus:ring-violet-500"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-neutral-800 py-4 px-6 placeholder:text-neutral-500 text-white rounded-lg outline-none focus:ring-2 focus:ring-violet-500"
              required
            />
          </label>
          <button
            type="submit"
            className="bg-gradient-to-r from-violet-600 to-pink-500 hover:from-violet-700 hover:to-pink-600 transition-colors py-3 px-8 w-fit text-white font-bold rounded-xl shadow-md hover:shadow-violet-500/40"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');

