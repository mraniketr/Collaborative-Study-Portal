import React from "react";
import Navbar from "../../../../../../../components/Navbar";
import Link from "next/link";

import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { PencilIcon, PlusIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

const Chapters = ({ chapter }) => {
	const router = useRouter();
	const { subjectId, courseId, chapterId } = router.query;
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
						<div className="flex flex-row items-center justify-start w-full py-2 mb-2 border-b border-black">
							{chapter.chapterName ?? ""}
							<Link
								href={`/courses/${courseId}/subjects/${subjectId}/chapters/${chapterId}/edit`}
							>
								<PencilIcon className="w-4 h-4 ml-2 text-gray-400 hover:text-gray-500" />
							</Link>
						</div>
						<div className="grid grid-cols-5 gap-6">
							{chapter?.topics?.map((topic, t_index) => {
								return (
									<Link
										key={t_index}
										href={`/courses/${chapter.courseId}/subjects/${chapter.subjectId}/chapters/${chapter.chapterId}/topics/${topic.topicId}/learn`}
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
							<button
								onClick={() => {
									var maxTopicId = -1;
									chapter?.topics.forEach((topic) => {
										if (topic.topicId > maxTopicId) {
											maxTopicId = topic.topicId;
										}
									});
									router.push(
										`/courses/${courseId}/subjects/${subjectId}/chapters/${chapterId}/topics/${
											parseInt(maxTopicId) + 1
										}/add`
									);
								}}
								className="flex justify-center px-4 py-3 border border-blue-700 rounded-lg hover:bg-blue-700 hover:text-white"
							>
								+ Add New Topic
							</button>
						</div>
					</div>
				</div>
			)}
		</React.Fragment>
	);
};

export const getServerSideProps = withPageAuthRequired({
	async getServerSideProps(context) {
		const res = await fetch(`${process.env.AUTH0_BASE_URL}/api/ReadData`, {
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
