import React from 'react'
import { dummyShowsData } from '../assets/assets'
import Moviecard from '../Components/Moviecard'
import Blurcircle from '../Components/Blurcircle'

const Movies = () => {
    return dummyShowsData.length > 0 ? (
        <div className='relative my-40 mb-60 px-6 md:px-16 lg:px-40 xl:px-44
        overflow-hidden min-[80vh]:' >

            <Blurcircle top='150px' left='0px'/>
            <Blurcircle bottom='50px' right='50px'/>

            <h1 className='text-lg font-medium my-4'>
                Now Showing
            </h1>
            <div className='grid grid-cols md:grid-cols-4 sm:grid-cols-1 mx-auto 
            max-sm:justify-center gap-8'>
                {dummyShowsData.map((movie)=> (
                    <Moviecard movie={movie}
                    key={movie._id}/>
                ))}
            </div>
        </div>
    ) : (
        <div className='flex flex-col items-center justify-center h-screen'>
            <h1 className='text-3xl font-bolf text-center'>
                No movies available
            </h1>

        </div>
    )
}

export default Movies