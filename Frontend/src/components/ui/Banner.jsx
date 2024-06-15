import React from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel";
import banner1 from "../../../public/banner.jpg";
import banner2 from "../../../public/banner.jpg";
import banner3 from "../../../public/banner.jpg";

function Banner() {
  return (
    <div className="relative flex flex-col md:flex-row w-full min-h-screen">
      {/* Login Button */}
      
        
      {/* Banner Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-20 bg-white z-10">
        <div className="space-y-8">
          <h1 className="text-2xl md:text-4xl font-bold">
            Eagle Foundation is here to save lives and create a{" "}
            <span className="text-pink-500">brighter future!!!</span>
          </h1>
          <p className="text-sm md:text-xl">
            Welcome to the Eagle Foundation, your beacon of hope and stability
            for tribal communities. At Eagle Foundation, we are dedicated to
            empowering tribal families, curbing migration, and paving the way
            for a sustainable future. Our initiatives provide the tools and
            resources necessary for building a stable, self-sufficient life
            while preserving the rich cultural heritage of these communities.
            Join us in our mission to create a brighter, more secure future
            for all. Dive in and discover the impactful work we do today!
          </p>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Email"
              style={{
                border: "2px solid black",
                padding: "8px",
                borderRadius: "4px",
              }}
            />
          </label>
        </div>
        <button
          style={{
            backgroundColor: "yellow",
            color: "black",
            border: "none",
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            borderRadius: "5px",
            marginTop: "10px",
          }}
        >
          Get Started
        </button>
      </div>

      {/* Carousel Banner Image */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:pt-60 bg-white z-10">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          className="h-full"
        >
          <div>
            <img src={banner1} alt="Banner 1" className="w-full h-full object-cover" />
          </div>
          <div>
            <img src={banner2} alt="Banner 2" className="w-full h-full object-cover" />
          </div>
          <div>
            <img src={banner3} alt="Banner 3" className="w-full h-full object-cover" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Banner;