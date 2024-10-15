"use client"

// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "react-feather"

const MyCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const images = [
    {
      src: "https://mdbcdn.b-cdn.net/img/new/slides/041.webp",
      alt: "Wild Landscape",
      caption: "Wild Landscape",
    },
    {
      src: "https://mdbcdn.b-cdn.net/img/new/slides/042.webp",
      alt: "Camera",
      caption: "Camera",
    },
    {
      src: "https://mdbcdn.b-cdn.net/img/new/slides/043.webp",
      alt: "Exotic Fruits",
      caption: "Exotic Fruits",
    },
  ]

  const totalImages = images.length

  const prev = () => setCurrentIndex((curr) => (curr === 0 ? totalImages - 1 : curr - 1))
  const next = () => setCurrentIndex((curr) => (curr === totalImages - 1 ? 0 : curr + 1))

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages)
    }, 5000) 

    return () => clearInterval(interval)
  }, [totalImages])

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image.src}
            className="w-full h-full object-cover"
            alt={image.alt}
          />
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded">
            {image.caption}
          </div>
        </div>
      ))}
      
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-10 p-2 rounded-full"
        onClick={prev}
      >
        <ChevronLeft className="h-6 w-6 text-black" />
        <span className="sr-only">Previous slide</span>
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-10 p-2 rounded-full"
        onClick={next}
      >
        <ChevronRight className="h-6 w-6 text-black" />
        <span className="sr-only">Next slide</span>
      </button>
    </div>
  )
}

export default MyCarousel