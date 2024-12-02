"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { QuoteIcon } from "lucide-react";
import Image from "next/image";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

interface Testimonial {
  comment: string;
  imgSrc: string;
  parentName: string;
  studentName: string;
}

const testimonials: Testimonial[] = [
  {
    comment:
      "The school completely transformed how my son learns. He feels valued and is always excited about classes!",
    imgSrc: "/assets/mentor/avatargirl.svg",
    parentName: "Emily Johnson",
    studentName: "Michael Johnson",
  },
  {
    comment:
      "The teachers are incredible and always available. My daughter has developed confidence and loves the practical projects!",
    imgSrc: "/assets/mentor/avatargirl.svg",
    parentName: "Sarah Thompson",
    studentName: "Emma Thompson",
  },
  {
    comment:
      "Beyond excellent teaching, the school also promotes important values. I feel my son is in great hands!",
    imgSrc: "/assets/mentor/avatargirl.svg",
    parentName: "David Rodriguez",
    studentName: "Alex Rodriguez",
  },
];

const ParentTestimonials = () => {
  return (
    <section
      className="py-16 bg-gradient-to-b from-blue-50 to-white"
      aria-labelledby="testimonials-heading"
    >
      <div className="container mx-auto px-4">
        <h2
          id="testimonials-heading"
          className="text-center text-4xl font-extrabold text-gray-800 mb-12 tracking-tight"
        >
          Parent Voices
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="h-full">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl p-6 relative h-full flex flex-col justify-between">
                <QuoteIcon
                  className="absolute top-4 left-4 text-blue-100 opacity-50"
                  size={48}
                />

                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 mt-2">
                    <Image
                      src={testimonial.imgSrc}
                      alt={`${testimonial.parentName}`}
                      width={96}
                      height={96}
                      className="w-24 h-24 object-cover rounded-full border-4 border-blue-100 shadow-md"
                    />
                  </div>

                  <p className="text-gray-600 italic mb-4 relative z-10 min-h-[120px]">
                    {testimonial.comment}
                  </p>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {testimonial.parentName}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Parent of {testimonial.studentName}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ParentTestimonials;
