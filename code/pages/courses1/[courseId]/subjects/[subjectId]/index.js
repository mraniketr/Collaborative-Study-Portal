import React, { useEffect, useState } from "react";
import Navbar from "../../../../../components/Navbar";
import Link from "next/link";

import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";
import { PencilIcon, PlusIcon } from "@heroicons/react/solid";

const Subjects = ({ subject }) => {
	const router = useRouter();
	const { subjectId, courseId } = router.query;
	const [maxSubjectId, setMaxSubjectId] = useState(-1);
	useEffect(() => {
		subject.chapters.forEach((e) => {
			if (e.chapterId > maxSubjectId) setMaxSubjectId(e.chapterId);
		});
	}, []);
	return (
		<React.Fragment>
			<Navbar />
			{!subject ? (
				<div className="flex flex-col px-20 pt-20 col">Chapter not present</div>
			) : (
				<div className="flex flex-col ">
					<div className="flex flex-row items-end py-6 text-xl text-white bg-gray-400 border-black shadow-sm h-44 px-36">
						Get Started with learning by selecting the course
					</div>
					<div className="flex flex-col py-4 px-36">
						<div className="flex flex-row items-center justify-start w-full py-2 mb-2 border-b border-black">
							{subject.subjectName ?? ""}
							<Link href={`/courses/update/edit/subject/${subject.subjectId}`}>
								<PencilIcon className="w-4 h-4 ml-2 text-gray-400 hover:text-gray-500" />
							</Link>
						</div>
						<div className="grid grid-cols-5 gap-6">
							{subject?.chapters?.map((chapter, s_index) => {
								return (
									<Link
										href={`/courses/${subject.courseId}/${subject.subjectId}/${chapter.chapterId}`}
									>
										<button
											key={s_index}
											className="flex justify-center px-4 py-3 bg-blue-300 border border-blue-700 rounded-lg hover:bg-blue-400"
										>
											{chapter.chapterName}
										</button>
									</Link>
								);
							})}
						</div>
					</div>
				</div>
			)}
			<Link href={`/courses/${courseId}/${subjectId}/update`}>
				<div className="absolute flex items-center justify-center w-10 h-10 p-2 text-xl text-white bg-blue-700 rounded-full bottom-6 right-10">
					<PencilIcon className="" />
				</div>
			</Link>
			<Link href={`/courses/${courseId}/${subjectId}/add/${maxSubjectId}`}>
				<div className="absolute flex items-center justify-center w-10 h-10 p-2 text-xl text-white bg-blue-700 rounded-full bottom-20 right-10">
					<PlusIcon className="" />
				</div>
			</Link>
		</React.Fragment>
	);
};

export const getServerSideProps = withPageAuthRequired({
	async getServerSideProps(context) {
		console.log(context.query.subjectId);
		const res = await fetch("http://localhost:3000/api/ReadData", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				collection: "subjects",
				filter: {
					courseId: context.query.courseId,
					subjectId: context.query.subjectId,
				},
			}),
		});
		const data = await res.json();
		console.log(data);
		return {
			props: {
				subject: data.data ? data.data[0] : null,
			},
		};
	},
});

export default Subjects;
