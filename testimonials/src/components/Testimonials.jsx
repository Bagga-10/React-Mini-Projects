import React, { useState } from "react";
import "../styles.css";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "The best way to get started is to quit talking and begin doing.",
      author: "Walt Disney",
    },
    {
      quote:
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill",
    },
    {
      quote: "Don’t watch the clock; do what it does. Keep going.",
      author: "Sam Levenson",
    },
    {
      quote: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt",
    },
    {
      quote: "It always seems impossible until it’s done.",
      author: "Nelson Mandela",
    },
    {
      quote: "Do one thing every day that scares you.",
      author: "Eleanor Roosevelt",
    },
    {
      quote: "Start where you are. Use what you have. Do what you can.",
      author: "Arthur Ashe",
    },
    {
      quote: "Everything you’ve ever wanted is on the other side of fear.",
      author: "George Addair",
    },
    {
      quote:
        "The only limit to our realization of tomorrow is our doubts of today.",
      author: "Franklin D. Roosevelt",
    },
    {
      quote:
        "Hardships often prepare ordinary people for an extraordinary destiny.",
      author: "C.S. Lewis",
    },
  ];

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  return (
    <div className="testimonials">
      <div className="testimonials-quote">
        {testimonials[currentIndex].quote}
      </div>
      <div className="testimonials-author">
        - {testimonials[currentIndex].author}
      </div>

      <div className="testimonials-nav">
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default Testimonials;
