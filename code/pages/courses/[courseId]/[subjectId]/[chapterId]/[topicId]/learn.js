import React from "react";
import Navbar from "../../../../../../components/Navbar";
import { Disclosure, Tab } from "@headlessui/react";
import { ChevronUpIcon, PlayIconm, PencilIcon } from "@heroicons/react/solid";
import classNames from "classnames";
import DiscussionCard from "../../../../../../components/Discussioncard";
import ResourceCard from "../../../../../../components/ResourceCard";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Link from "next/link";

const ViewCourse = ({ topic }) => {
	return (
		<React.Fragment>
			<Navbar />
			<div className="relative flex flex-col items-start px-6 pt-16">
				<div className="flex flex-row items-center w-full py-2 text-base border-b border-black">
					Class 10 <span className="mx-4">{">"} </span> Science
				</div>
				<div className="flex flex-row w-full h-full mb-3">
					<div className="w-full h-full pt-3 pr-3">
						<div className="w-full mb-3 bg-blue-200 h-[50vh]">
							<video
								autoPlay
								controls
								loop
								// src={
								// 	"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
								// }
								className="w-full h-full"
							>
								<source
									src={
										"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
									}
								/>
							</video>
						</div>
						<div className="w-full ">
							<Tab.Group>
								<Tab.List className="flex w-full max-w-md p-1 space-x-1 bg-blue-900/20 rounded-xl">
									<Tab
										key={"Overview"}
										className={({ selected }) =>
											classNames(
												"w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg",
												"focus:outline-none focus:ring-0",
												selected
													? "bg-white shadow"
													: "text-blue-100 hover:bg-white/[0.12] hover:text-white"
											)
										}
									>
										{"Overview"}
									</Tab>
									<Tab
										key={"Discussion"}
										className={({ selected }) =>
											classNames(
												"w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg",
												"focus:outline-none focus:ring-0",
												selected
													? "bg-white shadow"
													: "text-white hover:bg-white/[0.12] hover:text-white"
											)
										}
									>
										{"Discussion"}
									</Tab>
									<Tab
										key={"Resources"}
										className={({ selected }) =>
											classNames(
												"w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg",
												"focus:outline-none focus:ring-0",
												selected
													? "bg-white shadow"
													: "text-white hover:bg-white/[0.12] hover:text-white"
											)
										}
									>
										{"Resources"}
									</Tab>
								</Tab.List>
								<Tab.Panels className="w-full mt-2">
									<Tab.Panel className="p-3 bg-white rounded-xl focus:outline-none focus:ring-0">
										<div className="flex flex-row text-base text-black">
											{topic.topicDescription}
										</div>
										<div className="flex flex-row mt-6 text-sm">
											Video uploaded on: 22 Dec 2021
										</div>
									</Tab.Panel>
									<Tab.Panel className="p-3 bg-white rounded-xl focus:outline-none focus:ring-0">
										<div className="flex flex-col space-y-3">
											<DiscussionCard />
											<DiscussionCard />
											<button className="h-10 bg-blue-500 text-white max-w-[350px] rounded-md">
												Start new discussion
											</button>
										</div>
									</Tab.Panel>
									<Tab.Panel className="p-3 bg-white rounded-xl focus:outline-none focus:ring-0">
										<div className="flex flex-col space-y-3">
											<ResourceCard />
											<ResourceCard />
										</div>
									</Tab.Panel>
								</Tab.Panels>
							</Tab.Group>
						</div>
					</div>
				</div>
			</div>
			<Link
				href={`/courses/${topic.courseId}/${topic.subjectId}/${topic.chapterId}/${topic.topicId}/update`}
			>
				<div className="absolute flex items-center justify-center w-10 h-10 p-2 text-xl text-white bg-blue-700 rounded-full bottom-6 right-10">
					<PencilIcon className="" />
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
				collection: "topics",
				filter: {
					courseId: context.query.courseId,
					subjectId: context.query.subjectId,
					chapterId: context.query.chapterId,
					topicId: context.query.topicId,
					activeStatus: true,
				},
			}),
		});
		const data = await res.json();
		console.log(data);
		return {
			props: {
				topic: data.data[0],
			},
		};
	},
});

export default ViewCourse;
