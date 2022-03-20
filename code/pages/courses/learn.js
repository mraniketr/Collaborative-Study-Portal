import React from 'react'
import Navbar from '../../components/Navbar'
import { Disclosure, Tab } from '@headlessui/react'
import { ChevronUpIcon, PlayIcon } from '@heroicons/react/solid'
import classNames from 'classnames'
import DiscussionCard from '../../components/Discussioncard'
import ResourceCard from '../../components/ResourceCard'

const ViewCourse = () => {
    return (
        <React.Fragment>
            <Navbar />
            <div className='flex flex-col pt-16 px-6 items-start'>
                <div className='flex flex-row w-full items-center text-base py-2 border-b border-black'>
                    Class 10 <span className='mx-4'>{">"} </span> Science
                </div>
                <div className='flex w-full h-full mb-3 flex-row'>
                    <div className='w-full h-full pt-3 pr-3'>
                        <div className='bg-blue-200 h-96 w-full mb-3'></div>
                        <div className="w-full  ">
                            <Tab.Group>
                                <Tab.List className="flex max-w-md p-1 w-full space-x-1 bg-blue-900/20 rounded-xl">
                                    <Tab
                                        key={"Overview"}
                                        className={({ selected }) =>
                                            classNames(
                                                'w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg',
                                                'focus:outline-none focus:ring-0',
                                                selected
                                                    ? 'bg-white shadow'
                                                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                            )
                                        }
                                    >
                                        {"Overview"}
                                    </Tab>
                                    <Tab
                                        key={"Discussion"}
                                        className={({ selected }) =>
                                            classNames(
                                                'w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg',
                                                'focus:outline-none focus:ring-0',
                                                selected
                                                    ? 'bg-white shadow'
                                                    : 'text-white hover:bg-white/[0.12] hover:text-white'
                                            )
                                        }
                                    >
                                        {"Discussion"}
                                    </Tab>
                                    <Tab
                                        key={"Resources"}
                                        className={({ selected }) =>
                                            classNames(
                                                'w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg',
                                                'focus:outline-none focus:ring-0',
                                                selected
                                                    ? 'bg-white shadow'
                                                    : 'text-white hover:bg-white/[0.12] hover:text-white'
                                            )
                                        }
                                    >
                                        {"Resources"}
                                    </Tab>
                                </Tab.List>
                                <Tab.Panels className="mt-2 w-full">
                                    <Tab.Panel
                                        className='bg-white rounded-xl p-3 focus:outline-none focus:ring-0'
                                    >
                                        <div className='flex flex-row text-base text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
                                        <div className='flex flex-row text-sm mt-6'>Video uploaded on: 22 Dec 2021</div>
                                    </Tab.Panel>
                                    <Tab.Panel
                                        className='bg-white rounded-xl p-3 focus:outline-none focus:ring-0'
                                    >
                                        <div className='flex flex-col space-y-3'>
                                            <DiscussionCard />
                                            <DiscussionCard />
                                            <button className='h-10 bg-blue-500 text-white max-w-[350px] rounded-md' >Start new discussion</button>
                                        </div>
                                    </Tab.Panel>
                                    <Tab.Panel
                                        className='bg-white rounded-xl p-3 focus:outline-none focus:ring-0'
                                    >
                                        <div className='flex flex-col space-y-3'>
                                            <ResourceCard />
                                            <ResourceCard />
                                        </div>
                                    </Tab.Panel>
                                </Tab.Panels>
                            </Tab.Group>
                        </div>
                    </div>
                    <div className='min-w-[350px] max-w-[400px] border-l border-black pl-4'>
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
                    </div>
                </div>
            </div>
        </React.Fragment >
    )
}

export default ViewCourse