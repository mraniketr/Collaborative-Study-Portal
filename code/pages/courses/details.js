import React from "react";
import Navbar from "../../components/Navbar";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon, PlayIcon } from "@heroicons/react/solid";
import classNames from "classnames";

const CourseDetails = ({ subjectDetails }) => {
	// const fetchTopics = async (chapterId) => {
	// 	const res = await fetch("http://localhost:3000/api/ReadData", {
	// 		method: "POST",
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 		},
	// 		body: JSON.stringify({
	// 			collection: "chapters",
	// 			filter: {
	// 				subjectId: subjectDetails.subjectId,
	// 				courseId: subjectDetails.courseId,
	// 				chapterId: chapterId,
	// 			},
	// 		}),
	// 	});
	// 	const data = await res.json();
	// 	return data.data;
	// };
	return (
		// <React.Fragment>
		// 	<Navbar />
		// 	<div className="flex flex-col items-start pt-16 px-36">
		// 		<div className="flex flex-row items-center w-full py-2 text-base border-b border-black">
		// 			Class 10 <span className="mx-4">{">"} </span>{" "}
		// 			{subjectDetails?.subjectName}
		// 		</div>
		// 		{subjectDetails?.chapters?.map((chapter, index) => (
		// 			<div className="w-full mt-3">
		// 				<Disclosure key={index}>
		// 					{({ open }) => {
		// 						var loading = true;
		// 						return (
		// 							<>
		// 								<Disclosure.Button onClick={} className="flex items-start justify-between w-full px-2 py-2 bg-gray-200 border border-gray-500">
		// 									<span>
		// 										{" "}
		// 										<span className="mr-3"> 1.</span>
		// 										{chapter.chapterName}
		// 									</span>{" "}
		// 									<ChevronUpIcon
		// 										className={classNames(
		// 											"w-5 h-5 text-blue-500",
		// 											open ? "transform rotate-180" : ""
		// 										)}
		// 									/>
		// 								</Disclosure.Button>
		// 								{loading ? (
		// 									"Loading"
		// 								) : (
		// 									<React.Fragment>
		// 										<Disclosure.Panel className="flex items-center w-full px-2 py-2 mt-1 bg-gray-100 border border-gray-500">
		// 											<PlayIcon className={"w-5 h-5 mr-5 text-blue-500"} />{" "}
		// 											<span>
		// 												<span className="mr-2"> 1.1</span> Who are we?
		// 											</span>
		// 										</Disclosure.Panel>
		// 										<Disclosure.Panel className="flex items-center w-full px-2 py-2 mt-1 bg-gray-100 border border-gray-500">
		// 											<PlayIcon className={"w-5 h-5 mr-5 text-blue-500"} />{" "}
		// 											<span>
		// 												<span className="mr-2"> 1.2</span> Who are we?
		// 											</span>
		// 										</Disclosure.Panel>
		// 										<Disclosure.Panel className="flex items-center w-full px-2 py-2 mt-1 bg-gray-100 border border-gray-500">
		// 											<PlayIcon className={"w-5 h-5 mr-5 text-blue-500"} />{" "}
		// 											<span>
		// 												<span className="mr-2"> 1.3</span> Who are we?
		// 											</span>
		// 										</Disclosure.Panel>
		// 									</React.Fragment>
		// 								)}
		// 							</>
		// 						);
		// 					}}
		// 				</Disclosure>
		// 			</div>
		// 		))}
		// 	</div>
		// </React.Fragment>
		""
	);
};

// export async function getServerSideProps(context) {
// 	const res = await fetch("http://localhost:3000/api/ReadData", {
// 		method: "POST",
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 		body: JSON.stringify({
// 			collection: "subjects",
// 			filter: {
// 				subjectId: "1",
// 				courseId: "1",
// 			},
// 		}),
// 	});
// 	const data = await res.json();
// 	return {
// 		props: {
// 			subjectDetails: data.data[0],
// 		},
// 	};
// }

export default CourseDetails;
