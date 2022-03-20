import React from 'react'
import Navbar from '../../components/Navbar'
import { UserCircleIcon, BookmarkIcon } from '@heroicons/react/solid'
import MessageCard from '../../components/MessageCard'
const ViewForum = () => {
    return (
        <React.Fragment>
            <Navbar />
            <div className='flex flex-col pb-3 bg-white  pt-16 px-16 items-start'>
                <div className='flex flex-col w-full bg-slate-300 mt-3 py-3 px-5'>
                    <div className='flex flex-row text-base font-bold'>What is the use of photosynthesis in plants?</div>
                    <div className='flex wrap items-center mt-1 text-sm text-black'>
                        <UserCircleIcon className='flex w-4 h-4 mr-2' />
                        <div className='flex'>John Clington</div>
                        <div className='flex w-1 h-1 mx-3 bg-slate-900 rounded-full'></div>
                        <BookmarkIcon className='flex w-4 h-4 mr-2 transform -rotate-45' />
                        <div className='flex flex-row space-x-1'>
                            <div className='bg-white border rounded-md border-black px-2 py-0.5'>Class 10th</div>
                            <div className='bg-white border rounded-md border-black px-2 py-0.5'>Class 10th</div>
                            <div className='bg-white border rounded-md border-black px-2 py-0.5'>Class 10th</div>
                        </div>

                    </div>
                </div>
                <div className='flex flex-col w-full mt-3 space-y-3'>
                    <MessageCard />
                    <MessageCard isReply={true} />
                </div>
            </div>
        </React.Fragment>
    )
}

export default ViewForum