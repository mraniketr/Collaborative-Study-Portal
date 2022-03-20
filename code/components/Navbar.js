import React from 'react'

const Navbar = () => {
    return (
        <div className='flex absolute w-full flex-row shadow-sm justify-between bg-blue-600 h-16 items-center px-36'>
            <div className='flex text-white font-bold text-2xl'>EzyPzy</div>
            <div className='flex flex-row space-x-6'>
                <div className='flex text-base text-white'>Courses</div>
                <div className='flex text-base text-white'>Forum</div>
                <div className='flex w-6 h-6 bg-gray-200 rounded-full'></div>
            </div>
        </div>
    )
}

export default Navbar