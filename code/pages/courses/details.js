import React from "react";
import Navbar from "../../components/Navbar";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon, PlayIcon } from "@heroicons/react/solid";
import classNames from "classnames";

const CourseDetails = ({ subjectDetails }) => {
	return (
		<React.Fragment>
			<Navbar />
			<div className="flex flex-col items-start pt-16 px-36">
				<div className="flex flex-row items-center w-full py-2 text-base border-b border-black">
					Class 10 <span className="mx-4">{">"} </span>{" "}
					{subjectDetails?.subjectName}
				</div>
				{subjectDetails?.chapters?.map((chapter, index) => (
					<div className="w-full mt-3">
						<Disclosure key={index}>
							{({ open }) => (
								<>
									<Disclosure.Button className="flex items-start justify-between w-full px-2 py-2 bg-gray-200 border border-gray-500">
										<span>
											{" "}
											<span className="mr-3"> 1.</span>
											{chapter.chapterName}
										</span>{" "}
										<ChevronUpIcon
											className={classNames(
												"w-5 h-5 text-blue-500",
												open ? "transform rotate-180" : ""
											)}
										/>
									</Disclosure.Button>
									<Disclosure.Panel className="flex items-center w-full px-2 py-2 mt-1 bg-gray-100 border border-gray-500">
										<PlayIcon className={"w-5 h-5 mr-5 text-blue-500"} />{" "}
										<span>
											<span className="mr-2"> 1.1</span> Who are we?
										</span>
									</Disclosure.Panel>
									<Disclosure.Panel className="flex items-center w-full px-2 py-2 mt-1 bg-gray-100 border border-gray-500">
										<PlayIcon className={"w-5 h-5 mr-5 text-blue-500"} />{" "}
										<span>
											<span className="mr-2"> 1.2</span> Who are we?
										</span>
									</Disclosure.Panel>
									<Disclosure.Panel className="flex items-center w-full px-2 py-2 mt-1 bg-gray-100 border border-gray-500">
										<PlayIcon className={"w-5 h-5 mr-5 text-blue-500"} />{" "}
										<span>
											<span className="mr-2"> 1.3</span> Who are we?
										</span>
									</Disclosure.Panel>
								</>
							)}
						</Disclosure>
					</div>
				))}
			</div>
		</React.Fragment>
	);
};

export async function getServerSideProps(context) {
	const res = await fetch("http://localhost:3000/api/ReadData", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ collection: "subjects" }),
	});
	const data = await res.json();
	console.log(data);
	return {
		props: {
			subjectDetails: data.data[0],
		},
	};
}

export default CourseDetails;
