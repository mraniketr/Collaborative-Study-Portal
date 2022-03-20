import React from 'react'
import { UserCircleIcon } from '@heroicons/react/solid'

const DiscussionCard = () => {
    return (
        <div className='flex flex-row rounded-md bg-white border p-4'>
            <div className='flex flex-col'>
                <div className='flex flex-row items-center justify-start'>
                    <div className='mr-4'><UserCircleIcon className='w-9 h-9' /></div>
                    <div className='flex flex-col'>
                        <div className='flex flex-row text-lg '>John Clington</div>
                        <div className='flex flex-row text-sm '>Asked 2 days back</div>
                    </div>
                </div>
                <div className='flex flex-col mt-6'>
                    <div className='flex flex-row text-base font-bold'>What is the use of photosynthesis in plants?</div>
                    <div className='flex flex-row text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</div>
                </div>
                <div className='flex flex-row text-sm mt-6'>
                    Total replies: 299
                </div>

            </div>
            <div className='flex flex-col max-w-[250px] border-l border-black ml-3 pl-3'>
                <div className='flex flex-col'>
                    <div className='flex flex-row text-sm mb-1'>Category:</div>
                    <div className='flex flex-wrap '>
                        <div className='bg-blue-50 m-1 border flex rounded-md border-blue-500 py-0.5 px-2'>Class 10th</div>
                        <div className='bg-blue-50 m-1 border flex rounded-md border-blue-500 py-0.5 px-2'>Class 10th</div>
                        <div className='bg-blue-50 m-1 border flex rounded-md border-blue-500 py-0.5 px-2'>Class 10th</div>
                        <div className='bg-blue-50 m-1 border flex rounded-md border-blue-500 py-0.5 px-2'>Class 10th</div>
                        <div className='bg-blue-50 m-1 border flex rounded-md border-blue-500 py-0.5 px-2'>Class 10th</div>
                        <div className='bg-blue-50 m-1 border flex rounded-md border-blue-500 py-0.5 px-2'>Class 10th</div>
                        <div className='bg-blue-50 m-1 border flex rounded-md border-blue-500 py-0.5 px-2'>Class 10th</div>
                        <div className='bg-blue-50 m-1 border flex rounded-md border-blue-500 py-0.5 px-2'>Class 10th</div>
                    </div>
                </div>
                <div className='flex flex-row text-sm mt-6'>
                    Last reply 10 mins ago
                </div>
            </div>
        </div>
    )
}

export default DiscussionCard