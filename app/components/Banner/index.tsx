"use client";

import React from "react";
import { CheckCircle, Star, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
  // Array of school images for the carousel
  const schoolImages = [
    "/assets/banner/schol2.jpg",
    "/assets/banner/schol.png",
    "/assets/banner/schol.jpg",
    "/assets/banner/schol1.jpg",
  ];

  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-white min-h-screen flex items-center">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-pattern"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-6 opacity-100 translate-x-0">
            <div className="inline-flex items-center gap-3 bg-green-50 px-4 py-2 rounded-full">
              <Star className="text-green-600 w-5 h-5" />
              <span className="text-green-800 font-medium">
                30% Off First Enrollment
              </span>
            </div>

            <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
              Tete Junior School
              <span className="block text-3xl font-light text-gray-600 mt-2">
                Where Potential Meets Opportunity
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Empowering young minds through innovative learning, compassionate
              guidance, and a commitment to excellence.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: CheckCircle, text: "Flexible Learning" },
                { icon: CheckCircle, text: "Personalized Paths" },
                { icon: CheckCircle, text: "Supportive Community" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white shadow-md rounded-lg p-3"
                >
                  <item.icon className="text-blue-600 w-6 h-6" />
                  <span className="text-sm font-medium text-gray-700">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex space-x-4">
              <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Explore Courses <ArrowRight className="w-5 h-5" />
              </button>
              <button className="flex items-center gap-2 border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                Contact Us
              </button>
            </div>
          </div>

          {/* Image Section with Swiper Carousel */}
          <div className="flex justify-center relative">
            <div className="relative w-full max-w-xl">
              <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={true}
                className="rounded-3xl shadow-2xl"
              >
                {schoolImages.map((img, index) => (
                  <SwiperSlide key={index}>
                    <div className="w-full h-auto">
                      <img
                        src={img}
                        alt={`Tete Junior School ${index + 1}`}
                        width={100}
                        height={100}
                        className="w-full h-auto object-cover rounded-3xl transform hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="absolute -bottom-10 -right-10 bg-white shadow-xl rounded-2xl p-4 flex items-center gap-3">
                <div className="bg-yellow-100 rounded-full p-2">
                  <Star className="text-yellow-600 w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    Top Rated School
                  </p>
                  <p className="text-xs text-gray-500">
                    Recognized for Educational Excellence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
