import { dummyShowsData } from '../assets/assets'
import MovieCard from '../Components/MovieCard'
import BlurCircle from '../Components/BlurCircle'

const Favourite = () => {
    return dummyShowsData.length > 0 ? (
        <div className='relative my-40 mb-60 px-6 md:px-16 lg:px-40 xl:px-44
        overflow-hidden min-h-[80vh]'>

            <BlurCircle top='150px' left='0px' />
            <BlurCircle bottom='50px' right='50px' />

            <h1 className='text-lg font-medium my-4'>
                Favourites
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 mx-auto
            max-sm:justify-center gap-8'>
                {dummyShowsData.map((movie) => (
                    <MovieCard movie={movie} key={movie._id} />
                ))}
            </div>
        </div>
    ) : (
        <div className='flex flex-col items-center justify-center h-screen'>
            <h1 className='text-3xl font-bold text-center'>
                No movies available
            </h1>
        </div>
    )
}

export default Favourite
