import React from 'react'
import Card from '../../Components/Cards/Card';

const Home = () => {
    const categories = [
        { name: 'React', level: 'Beginner' },
        { name: 'Next.js', level: 'Intermediate' },
        { name: 'Rust', level: 'Advanced' },
        { name: 'Node.js', level: 'Intermediate' }

    ];
    return (
        <div className=' w-full flex justify-center pt-10 sm:pt-20'>
            <div className='flex-col w-3/4 text-center'>
                <div className='hidden sm:block sm:text-5xl font-bold tracking-wide leading-relaxed'>
                    Master new concepts quickly and efficiently with our interactive flashcards
                </div>
                <div className='hidden sm:flex justify-around'>
                    <div className='flex gap-12 tracking-wider text-2xl uppercase font-bold mt-10'><div className='border-4 p-1 w-28 border-black'>Learn</div>
                        <div className='border-4 p-1 w-28 border-black'>Grow</div>
                        <div className='border-4 p-1 w-28 border-black'>Evolve</div></div>
                </div>
                <div className='flex-col sm:flex-row sm:flex sm:justify-evenly sm:mt-10 mb-36 sm:mb-0'>
                    {categories.map(ele =>
                        <Card key={ele.name} data={ele} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Home