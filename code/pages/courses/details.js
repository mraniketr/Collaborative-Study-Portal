import React from 'react'
import Navbar from '../../components/Navbar'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon, PlayIcon } from '@heroicons/react/solid'
import classNames from 'classnames'

const CourseDetails = () => {
    return (
        <React.Fragment>
            <Navbar />
            <div className='flex flex-col px-36 pt-16 items-start'>
                <div className='flex flex-row w-full items-center text-base py-2 border-b border-black'>
                    Class 10 <span className='mx-4'>{">"} </span> Science
                </div>
                <div className='w-full mt-3'>
                    <Disclosure>
                        {({ open }) => (<>
                            <Disclosure.Button className="py-2 px-2 w-full flex justify-between items-start bg-gray-200 border border-gray-500">
                                <span>  <span className='mr-3'> 1.</span>Animals around Us</span> <ChevronUpIcon
                                    className={classNames("w-5 h-5 text-blue-500", open ? 'transform rotate-180' : '')}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="py-2 px-2 w-full flex  items-center bg-gray-100 mt-1 border border-gray-500">
                                <PlayIcon
                                    className={"w-5 h-5 mr-5 text-blue-500"}
                                />  <span><span className='mr-2'> 1.1</span>  Who are we?</span>
                            </Disclosure.Panel>
                            <Disclosure.Panel className="py-2 px-2 w-full flex  items-center bg-gray-100 mt-1 border border-gray-500">
                                <PlayIcon
                                    className={"w-5 h-5 mr-5 text-blue-500"}
                                />  <span><span className='mr-2'> 1.2</span>  Who are we?</span>
                            </Disclosure.Panel>
                            <Disclosure.Panel className="py-2 px-2 w-full flex  items-center bg-gray-100 mt-1 border border-gray-500">
                                <PlayIcon
                                    className={"w-5 h-5 mr-5 text-blue-500"}
                                />  <span><span className='mr-2'> 1.3</span>  Who are we?</span>
                            </Disclosure.Panel></>
                        )}
                    </Disclosure>
                </div>
                <div className='w-full mt-3'>
                    <Disclosure>
                        {({ open }) => (<>
                            <Disclosure.Button className="py-2 px-2 w-full flex justify-between items-start bg-gray-200 border border-gray-500">
                                <span>  <span className='mr-3'> 2.</span>Animals around Us</span> <ChevronUpIcon
                                    className={classNames("w-5 h-5 text-blue-500", open ? 'transform rotate-180' : '')}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="py-2 px-2 w-full flex  items-center bg-gray-100 mt-1 border border-gray-500">
                                <PlayIcon
                                    className={"w-5 h-5 mr-5 text-blue-500"}
                                />  <span><span className='mr-2'> 2.1</span>  Who are we?</span>
                            </Disclosure.Panel>
                            <Disclosure.Panel className="py-2 px-2 w-full flex  items-center bg-gray-100 mt-1 border border-gray-500">
                                <PlayIcon
                                    className={"w-5 h-5 mr-5 text-blue-500"}
                                />  <span><span className='mr-2'> 2.2</span>  Who are we?</span>
                            </Disclosure.Panel>
                            <Disclosure.Panel className="py-2 px-2 w-full flex  items-center bg-gray-100 mt-1 border border-gray-500">
                                <PlayIcon
                                    className={"w-5 h-5 mr-5 text-blue-500"}
                                />  <span><span className='mr-2'> 2.3</span>  Who are we?</span>
                            </Disclosure.Panel></>
                        )}
                    </Disclosure>
                </div>
                <div className='w-full mt-3'>
                    <Disclosure>
                        {({ open }) => (<>
                            <Disclosure.Button className="py-2 px-2 w-full flex justify-between items-start bg-gray-200 border border-gray-500">
                                <span>  <span className='mr-3'> 3.</span>Animals around Us</span> <ChevronUpIcon
                                    className={classNames("w-5 h-5 text-blue-500", open ? 'transform rotate-180' : '')}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="py-2 px-2 w-full flex  items-center bg-gray-100 mt-1 border border-gray-500">
                                <PlayIcon
                                    className={"w-5 h-5 mr-5 text-blue-500"}
                                />  <span><span className='mr-2'> 1.1</span>  Who are we?</span>
                            </Disclosure.Panel>
                            <Disclosure.Panel className="py-2 px-2 w-full flex  items-center bg-gray-100 mt-1 border border-gray-500">
                                <PlayIcon
                                    className={"w-5 h-5 mr-5 text-blue-500"}
                                />  <span><span className='mr-2'> 1.1</span>  Who are we?</span>
                            </Disclosure.Panel>
                            <Disclosure.Panel className="py-2 px-2 w-full flex  items-center bg-gray-100 mt-1 border border-gray-500">
                                <PlayIcon
                                    className={"w-5 h-5 mr-5 text-blue-500"}
                                />  <span><span className='mr-2'> 1.1</span>  Who are we?</span>
                            </Disclosure.Panel></>
                        )}
                    </Disclosure>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CourseDetails