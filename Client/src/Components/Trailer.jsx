import React, { useState } from 'react';
import { dummyTrailers } from '../assets/assets';
import Blurcircle from './Blurcircle';
import ReactPlayer from 'react-player';

const Trailer = () => {
    const [currentTrailer] = useState(dummyTrailers[0]);

    console.log("🚀 Trailer URL: ", currentTrailer.videoUrl); // Debug

    return (
        <div className="px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden">
            <p className="text-gray-300 font-medium text-lg max-w-[960px] mx-auto">
                Trailers
            </p>
            <div className="relative mt-6 max-w-[960px] mx-auto aspect-video">
                <Blurcircle top="-100px" right="-100px" />
                <ReactPlayer
                    url={currentTrailer.videoUrl}
                    controls={true}
                    width="100%"
                    height="100%"
                    playing={false}
                />  
            </div>
        </div>
    );
};

export default Trailer;
