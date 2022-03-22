import React from 'react'
import Navbar from '../../components/Navbar'

import { withPageAuthRequired } from '@auth0/nextjs-auth0';


const Courses = ({ courses }) => {
    return (
        <React.Fragment>
            <Navbar />
            <div className='flex flex-col '>
                <div className='bg-gray-400 h-44 flex flex-row items-end shadow-sm border-black text-white text-xl py-6 px-36'>
                    Get Started with learning by selecting the course
                </div>
                {courses?.map((course, index) => {
                    return (<div className='flex flex-col px-36 py-4'>
                        <div className='flex flex-row w-full border-b border-black py-2 mb-2'>
                            {course.courseName ?? ""}
                        </div>
                        <div className='grid grid-cols-5 gap-6'>
                            {course?.subjects.map((subject, s_index) => {
                                return (<button className='px-4 py-3 flex justify-center rounded-lg border border-blue-700 bg-blue-300 hover:bg-blue-400'>{subject.subjectName}</button>)
                            })}
                        </div>
                    </div>)
                })}

            </div>
        </React.Fragment>
    )
}
export const getServerSideProps = withPageAuthRequired({

async getServerSideProps(context) {
    const res = await fetch('http://localhost:3000/api/ReadData', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ collection: "courses" }),
    });
    const data = await res.json();
    console.log(data)
    return {
        props: {
            courses: data.data,
        },
    }
}
});

export default Courses