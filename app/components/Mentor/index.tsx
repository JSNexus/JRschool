"use client";
import React, { Component } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Define interface for team member data
interface TeamMemberType {
  name: string;
  role: string;
  department: string;
  imgSrc: string;
  linkedinUrl?: string;
}

// Team members data
const teamMembers: TeamMemberType[] = [
  {
    name: "Dr. Maria Silva",
    role: "Academic Director",
    department: "Academic Management",
    imgSrc: "/assets/mentor/avatargirl.svg",
    linkedinUrl: "https://linkedin.com/in/mariasilva",
  },
  {
    name: "Prof. João Santos",
    role: "Teaching Coordinator",
    department: "Educational Development",
    imgSrc: "/assets/mentor/avatarmen.svg",
    linkedinUrl: "https://linkedin.com/in/joaosantos",
  },
  {
    name: "Profa. Ana Oliveira",
    role: "Academic Coordinator",
    department: "Research and Extension",
    imgSrc: "/assets/mentor/avatargirl.svg",
    linkedinUrl: "https://linkedin.com/in/anaoliveira",
  },
  {
    name: "Prof. Carlos Mendes",
    role: "Innovation Director",
    department: "Strategic Development",
    imgSrc: "/assets/mentor/avatarmen.svg",
    linkedinUrl: "https://linkedin.com/in/carlosmendes",
  },
];

export default class EducationalTeamCarousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <section className="py-16 bg-gray-50" id="our-team">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Academic Leadership
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the professionals leading our educational excellence.
            </p>
          </div>

          <Slider {...settings}>
            {teamMembers.map((member, index) => (
              <div key={index} className="px-4">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl mx-auto max-w-xs">
                  <div className="relative h-60 w-full">
                    <Image
                      src={member.imgSrc}
                      alt={`Photo of ${member.name}`}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {member.name}
                    </h3>
                    <div className="space-y-1">
                      <p className="text-base text-gray-600">{member.role}</p>
                      <p className="text-sm text-gray-500">
                        {member.department}
                      </p>
                    </div>
                    {member.linkedinUrl && (
                      <div className="mt-3">
                        <a
                          href={member.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect x="2" y="9" width="4" height="12" />
                            <circle cx="4" cy="4" r="2" />
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    );
  }
}
