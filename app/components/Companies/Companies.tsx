"use client";
import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";

// IMAGES OF SCHOOL ACTIVITIES
interface Activity {
  imgSrc: string;
  altText: string;
}

const activities: Activity[] = [
  {
    imgSrc: "/assets/activit/1.png",
    altText: "Children practicing martial arts",
  },
  {
    imgSrc: "/assets/activit/1.png",
    altText: "Children painting in a classroom",
  },
  {
    imgSrc: "/assets/activit/1.png",
    altText: "Children reading together",
  },
  {
    imgSrc: "/assets/activit/1.png",
    altText: "Children experimenting with science",
  },
  {
    imgSrc: "/assets/activit/1.png",
    altText: "Children learning music",
  },
  {
    imgSrc: "/assets/activit/1.png",
    altText: "Children playing outdoor sports",
  },
];

// CAROUSEL SETTINGS
export default class ActivitiesCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 3000,
      cssEase: "ease-out",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
      ],
    };

    return (
      <div className="text-center my-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-darkblue text-3xl font-bold">
            Explore Children&apos;s Activities
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Discover the wide range of activities that help children learn and
            grow, from sports to arts and sciences.
          </p>
          <div className="py-14">
            <Slider {...settings}>
              {activities.map((activity, i) => (
                <div key={i} className="px-4">
                  <Image
                    src={activity.imgSrc}
                    alt={activity.altText}
                    width={300}
                    height={200}
                    className="rounded-lg shadow-lg object-cover mx-auto"
                  />
                  <p className="mt-4 text-gray-700 text-center font-medium">
                    {activity.altText}
                  </p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
