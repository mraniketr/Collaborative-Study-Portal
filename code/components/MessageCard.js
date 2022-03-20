import React from 'react'
import { UserCircleIcon } from '@heroicons/react/solid'

const MessageCard = ({ isReply }) => {
    return (
        <div className='flex flex-row w-full py-3 bg-gray-200 border rounded-md border-gray-800 '>
            <div className='flex flex-col mt-9 w-fit items-center px-4'>
                <UserCircleIcon className='w-9 h-9 mb-2' />
                <div className='flex flex-row text-sm  text-center'>John Clington</div>
            </div>
            <div className='flex w-full flex-col border-l border-black px-4'>
                <div className='flex flex-row w-full text-sm text-gray-400 border-b border-black'>
                    <div className='flex flex-col grow'>
                        Feb 6, 2022
                    </div>
                    <div className='flex flex-col '>
                        #1
                    </div>
                </div>
                {isReply && <div className='bg-gray-300 pt-1 border-l-4 mt-3 border-gray-600'>
                    <div className='flex flex-row w-full pl-4 pb-1 text-sm text-gray-400 border-b border-black'>
                        <div className='flex flex-row items-center grow'>
                            <UserCircleIcon className='w-6 h-6 mr-2' />
                            <div className='flex flex-row text-sm  text-center'>John Clington</div>
                        </div>
                        <div className='flex flex-col pr-4'>
                            #1
                        </div>
                    </div>
                    <div className='block pl-4 pb-2 flex-row text-sm mt-4 text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat....<span className='font-bold'>Read More</span></div>
                </div>}
                <div className='flex flex-row text-sm mt-4 text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
                <div className='flex flex-row justify-between mt-6'>
                    <button className='h-10 bg-blue-500 text-white w-[250px] px-4 rounded-md' >Reply</button>
                    <button className='h-10 bg-red-400 text-white w-[150px] px-4 rounded-md' >Report</button>
                </div>
            </div>
        </div>
    )
}

export default MessageCard