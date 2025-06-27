import React from 'react';
import { FaDatabase, FaKeyboard, FaPenFancy, FaSpellCheck } from 'react-icons/fa';
import Lottie from 'lottie-react';
import groovyWalkAnimation from "../assets/Animation - 1747895151543.json";
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: 'easeOut'
    }
  })
};

const ExtraSection2 = () => {
  return (
    <section className="my-16 px-4 md:px-10 text-center">
      {/* Heading */}
      <div className="mb-14">
        <h1 className="flex justify-center items-center gap-4 text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
          <Lottie animationData={groovyWalkAnimation} className="h-16 md:h-20" />
          <Typewriter
            words={['Job Practice', 'Typing', 'Data Entry', 'Proofreading', 'Writing']}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Learn the essentials through hands-on, industry-relevant exercises designed to refine your abilities, solidify your understanding, and empower you to succeed in the modern tech landscape.
        </p>
      </div>

      {/* Animated Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {[{
          title: "Typing",
          icon: <FaKeyboard className="text-5xl mx-auto text-blue-600" />,
          desc: "Boost your typing speed and accuracy through structured exercises that track your performance and help you improve over time.",
          tag: "Skill Builder",
          tagColor: "text-blue-600"
        },
        {
          title: "Data Entry",
          icon: <FaDatabase className="text-5xl mx-auto text-green-600" />,
          desc: "Train your eyes and fingers for precision with tasks designed to improve your data entry accuracy, speed, and efficiency.",
          tag: "Accuracy Focused",
          tagColor: "text-green-600"
        },
        {
          title: "Proofreading",
          icon: <FaSpellCheck className="text-5xl mx-auto text-yellow-600" />,
          desc: "Sharpen your proofreading skills by practicing grammar checks, punctuation corrections, and typo spotting techniques.",
          tag: "Grammar Mastery",
          tagColor: "text-yellow-600"
        },
        {
          title: "Writing",
          icon: <FaPenFancy className="text-5xl mx-auto text-pink-600" />,
          desc: "Practice creative and professional writing with topic prompts, storytelling strategies, and tone enhancement techniques.",
          tag: "Creative Thinking",
          tagColor: "text-pink-600"
        }].map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariant}
            className="rounded-2xl bg-base-300 shadow-lg p-6 border-t-4 hover:shadow-xl transition duration-300 flex flex-col justify-between"
            style={{ borderColor: item.tagColor.replace('text', 'border') }}
          >
            <div>
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2 ">{item.title}</h3>
              <p className=" text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
            <div className="mt-6">
              <span className={`inline-block bg-base-200 ${item.tagColor} px-3 py-1 rounded-full text-xs font-semibold`}>
                {item.tag}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExtraSection2;
