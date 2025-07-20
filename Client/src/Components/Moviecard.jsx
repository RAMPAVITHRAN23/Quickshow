// Moviecard.jsx
import { StarIcon } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import timeformat from '../lib/timeformat'

// Moviecard component displays a movie's info in a card format
const Moviecard = ({ movie }) => {
    const navigate = useNavigate()

    return (
        <div className='flex flex-col justify-between p-3 bg-gray-800 rounded-2xl
        hover:-translate-y-1 transition duration-300 w-full max-w-[280px]'>
            
            {/* Movie backdrop image, navigates to movie details on click */}
            <img
                onClick={() => {
                    navigate(`/movies/${movie.id}`);
                    scrollTo(0, 0);
                }}
                src={movie.backdrop_path}
                alt=""
                className='rounded-lg h-52 w-full object-cover cursor-pointer'
            />

            {/* Movie title */}
            <p className='font-semibold mt-2 truncate'>{movie.title}</p>

            {/* Release year, genres, and runtime */}
            <p className='text-sm text-gray-400 mt-2'>
                {new Date(movie.release_date).getFullYear()}.{" "}
                {movie.genres.slice(0, 2).map((g) => g.name).join(" | ")}.{" "}
                {timeformat(movie.runtime)}
            </p>

            <div className='flex items-center justify-between mt-4 pb-3'>
                {/* Buy Tickets button, navigates to movie details */}
                <button
                    onClick={() => {
                        navigate(`/movies/${movie.id}`);
                        scrollTo(0, 0);
                    }}
                    className='px-4 py-2 bg-primary hover:bg-primary-dull
                    transition rounded-full text-xs font-medium cursor-pointer'
                >
                    Buy Tickets
                </button>

                {/* Movie rating with star icon */}
                <div className='flex items-center gap-1 text-primary'>
                    <StarIcon className='w-4 h-4 fill-current' />
                    <span className='text-sm'>{movie.vote_average.toFixed(1)}</span>
                </div>
            </div>
        </div>
    )
}

export default Moviecard
