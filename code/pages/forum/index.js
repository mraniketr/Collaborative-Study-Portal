import React from 'react'
import DiscussionCard from '../../components/Discussioncard'
import Navbar from '../../components/Navbar'

const Forum = () => {
    return (
        <React.Fragment>
            <Navbar />
            <div className='flex flex-col pb-3 bg-white  pt-16 px-16 items-start'>
                <div className='flex flex-row w-full items-center mt-6 text-base py-2 border-b mb-3 border-black'>
                    <div className='flex'> Join our community to help each other grow and increase their knowledge</div>
                    <div className='flex flex-row flex-grow justify-end'>
                        <button className='h-10 bg-blue-500 text-white max-w-[350px] px-4 rounded-md' >Start new discussion</button>
                    </div>
                </div>
                <div className='flex flex-col space-y-4'>
                    <DiscussionCard />
                    <DiscussionCard />
                    <DiscussionCard />
                    <DiscussionCard />
                    <DiscussionCard />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Forum