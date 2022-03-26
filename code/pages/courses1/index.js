import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Link from "next/link";
import { useRouter } from "next/router";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { PencilIcon, PlusIcon } from "@heroicons/react/solid";

const Courses = ({ courses }) => {
	const router = useRouter();
	const [maxCourseId, setMaxCourseId] = useState(-1);
	useEffect(() => {
		courses.forEach((e) => {
			if (e.courseId > maxCourseId) setMaxCourseId(e.courseId);
		});
	}, []);
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
							<div className="flex flex-row items-center justify-start w-full py-2 mb-2 space-x-3 border-b border-black">
								{course.courseName ?? ""}
								<Link href={`/courses/update/edit/course/${course.courseId}`}>
									<PencilIcon className="w-4 h-4 ml-2 text-gray-400 hover:text-gray-500" />
								</Link>
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

								<button
									onClick={() => {
										var maxSubjectId = -1;
										course?.subjects.forEach((subject) => {
											if (subject.subjectId > maxSubjectId) {
												maxSubjectId = subject.subjectId;
											}
										});
										router.push(
											`/courses/update/add/subject/${
												parseInt(maxSubjectId) + 1
											}`
										);
									}}
									className="flex justify-center px-4 py-3 border border-blue-700 rounded-lg hover:bg-blue-700 hover:text-white"
								>
									+ Add New Subject
								</button>
							</div>
						</div>
					);
				})}

				<Link href={`/courses/update/add/course/${parseInt(maxCourseId) + 1}`}>
					<div className="absolute flex items-center justify-center w-10 h-10 p-2 text-xl text-white bg-blue-700 rounded-full bottom-6 right-10">
						<PlusIcon className="" />
					</div>
				</Link>
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
			body: JSON.stringify({
				collection: "courses",
				filter: { activeStatus: true },
			}),
		});
		const data = await res.json();
		console.log(data);
		return {
			props: {
				courses: data.data ?? null,
			},
		};
	},
});

export default Courses;
