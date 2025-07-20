import React, { useState } from 'react';
import Blurcircle from './Blurcircle';
import { dummyTrailers } from '../assets/assets';
import { MdPlayCircleOutline } from 'react-icons/md';
import { FaPlayCircle } from "react-icons/fa";

const Trailer = () => {
    const [, setCurrentTrailer] = useState(dummyTrailers[0]);

    return (
        <div className="px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden">
            <p className="text-gray-300 font-medium text-lg max-w-[960px] mx-auto">
                Trailers
            </p>

            {/* 🎬 Main Video Player */}
            <div className="relative mt-6 max-w-[960px] mx-auto aspect-video">
                <Blurcircle top="-100px" right="-100px" />
                <div className="absolute inset-0 flex items-center justify-center w-full h-full">
                    <video
                        src="video/ironheart.mp4"
                        autoPlay
                        muted
                        controls
                        loop
                        className="w-full h-full object-cover rounded-xl"
                    />
                </div>
            </div>

            {/* ✅ FIXED: Thumbnail Grid MOVED OUTSIDE the video container */}
            {/* 🛠️ Mistake: You placed the thumbnail grid *inside* the video container (inside `.relative aspect-video`) */}
            {/* 💡 Fix: Move the grid outside that div to position it *below* the video, not overlapping it */}
            <div className="group grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 mt-8 max-w-4xl mx-auto">
                {dummyTrailers.map((trailer) => (
                    <div
                        key={trailer.image}
                        className="relative hover:opacity-50 hover:-translate-y-1 duration-300 transition cursor-pointer"
                        onClick={() => setCurrentTrailer(trailer)}
                    >
                        <img
                            src={trailer.image}
                            alt={trailer.title}
                            className="w-full h-28 md:h-36 object-cover rounded-lg brightness-75"
                        />

                        <FaPlayCircle
                            strokeWidth={1.6}
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-8 h-8 md:w-10 md:h-10"
                        />

                        <p className="text-gray-200 text-sm mt-2 text-center">
                            {trailer.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Trailer;
