import React from "react";

const Hero = () => {
  return (
    <main className="hero container">
      <div className="hero-left">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="sec-btn">Category</button>
        </div>

        <div className="shopping">
          <p>Also Available on</p>
          <div className="brand-icons">
            <img src="/src/assets/flipkart.png" alt="Flipkart Logo" />
            <img src="/src/assets/amazon.png" alt="Amazon Logo" />
          </div>
        </div>
      </div>
      <div className="hero-right">
        <img src="/src/assets/shoe_image.png" alt="Shoe Image" />
      </div>
    </main>
  );
};

export default Hero;
