import React from "react";
import Navbar from "../../../../../components/Navbar";
import Link from "next/link";

import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { PencilIcon, PlusIcon } from "@heroicons/react/solid";

const Chapters = ({ chapter }) => {
	return (
		<React.Fragment>
			<Navbar />
			{!chapter ? (
				<div className="flex flex-col px-20 pt-20">Chapter not present</div>
			) : (
				<div className="flex flex-col">
					<div className="flex flex-row items-end py-6 text-xl text-white bg-gray-400 border-black shadow-sm h-44 px-36">
						Get Started with learning by selecting the course
					</div>
					<div className="flex flex-col py-4 px-36">
						<div className="flex flex-row w-full py-2 mb-2 border-b border-black">
							{chapter.chapterName ?? ""}
						</div>
						<div className="grid grid-cols-5 gap-6">
							{chapter?.topics?.map((topic, t_index) => {
								return (
									<Link
										href={`/courses/${chapter.courseId}/${chapter.subjectId}/${chapter.chapterId}/${topic.topicId}/learn`}
									>
										<button
											key={t_index}
											className="flex justify-center px-4 py-3 bg-blue-300 border border-blue-700 rounded-lg hover:bg-blue-400"
										>
											{topic.topicName}
										</button>
									</Link>
								);
							})}
						</div>
					</div>
				</div>
			)}
			<Link
				href={`/courses/${chapter.courseId}/${chapter.subjectId}/${chapter.chapterId}/add`}
			>
				<div className="absolute flex items-center justify-center w-10 h-10 p-2 text-xl text-white bg-blue-700 rounded-full bottom-6 right-10">
					<PlusIcon className="" />
				</div>
			</Link>
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
				collection: "chapters",
				filter: {
					courseId: context.query.courseId,
					subjectId: context.query.subjectId,
					chapterId: context.query.chapterId,
				},
			}),
		});
		const data = await res.json();
		console.log(data);
		return {
			props: {
				chapter: data.data ? data.data[0] : null,
			},
		};
	},
});

export default Chapters;
