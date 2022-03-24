import React from "react";
import Navbar from "../../components/Navbar";
import Link from "next/link";

import { withPageAuthRequired } from "@auth0/nextjs-auth0";

const Courses = ({ courses }) => {
	return (
		<React.Fragment>
			<Navbar />
			<div className="flex flex-col ">
				<div className="flex flex-row items-end py-6 text-xl text-white bg-gray-400 border-black shadow-sm h-44 px-36">
					Get Started with learning by selecting the course
				</div>
				{courses?.map((course, c_index) => {
					return (
						<div key={c_index} className="flex flex-col py-4 px-36">
							<div className="flex flex-row w-full py-2 mb-2 border-b border-black">
								{course.courseName ?? ""}
							</div>
							<div className="grid grid-cols-5 gap-6">
								{course?.subjects?.map((subject, s_index) => {
									return (
										<Link
											href={`/courses/${course.courseId}/${subject.subjectId}`}
										>
											<button
												key={s_index}
												className="flex justify-center px-4 py-3 bg-blue-300 border border-blue-700 rounded-lg hover:bg-blue-400"
											>
												{subject.subjectName}
											</button>
										</Link>
									);
								})}
							</div>
						</div>
					);
				})}
			</div>
		</React.Fragment>
	);
};

export const getServerSideProps = withPageAuthRequired({
	async getServerSideProps(context) {
		const res = await fetch("http://localhost:3000/api/ReadData", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ collection: "courses" }),
		});
		const data = await res.json();
		console.log(data);
		return {
			props: {
				courses: data.data,
			},
		};
	},
});

export default Courses;
