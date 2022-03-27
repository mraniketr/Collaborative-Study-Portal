import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { Field, Form, Formik, useFormik } from "formik";
import { useRouter } from "next/router";
import Navbar from "../../../../../../../../../components/Navbar";

const Update = ({ topic }) => {
	const router = useRouter();
	const { courseId, subjectId, chapterId, topicId, actionType } = router.query;
	const [initialValue, setInitialValue] = useState();

	const validationSchema = yup.object().shape({
		topicName: yup.string().required(),
		topicDescription: yup.string().required(),
		videoURL: yup.string().required(),
	});

	useEffect(() => {
		if (actionType == "add") {
			setInitialValue({
				topicName: "",
				topicDescription: "",
				videoURL: "",
			});
		} else {
			fetchTopicDetails();
		}
	}, []);
	const fetchTopicDetails = async () => {
		const res = await fetch("http://localhost:3000/api/ReadData", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				collection: "topics",
				filter: {
					courseId: courseId,
					subjectId: subjectId,
					chapterId: chapterId,
					topicId: topicId,
					activeStatus: true,
				},
			}),
		});
		const data = await res.json();
		console.log(data);
		setInitialValue({
			topicName: data.data[0].topicName,
			topicDescription: data.data[0].topicDescription,
			videoURL: data.data[0].videoURL,
		});
	};

	return (
		<React.Fragment>
			<Navbar />
			<div className="flex flex-col p-16">
				<Formik
					enableReinitialize
					initialValues={initialValue}
					validationSchema={() => validationSchema}
					onSubmit={async (values) => {
						var res = await fetch("http://localhost:3000/api/InsertData", {
							method: "POST",
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify({
								collection: "topics",
								insertObj: {
									activeStatus: false,
									topicId: topicId,
									topicName: values.topicName,
									topicDescription: values.topicDescription,
									videoURL: values.videoURL,
									chapterId: chapterId,
									courseId: courseId,
									subjectId: subjectId,
								},
							}),
						});
						const data = await res.json();
						console.log(data);
						router.push(
							`/courses/${courseId}/subject/${subjectId}/chapters/${chapterId}/topics/${topicId}/learn`
						);
					}}
				>
					<Form className="flex flex-row justify-center">
						<div className="flex flex-col w-[500px] mt-4 bg-white rounded-lg p-6">
							<div className="flex flex-row mb-3 text-2xl">
								{actionType == "add" ? "Add New Topic" : "Edit Topic"}
							</div>
							<div className="flex flex-col my-3">
								<label htmlFor="firstName" className="text-sm">
									Topic Name
								</label>
								<Field
									id="topicName"
									name="topicName"
									className="px-3 py-2 border border-gray-200 rounded-md"
									placeholder="Jane"
								/>
							</div>
							<div className="flex flex-col my-3">
								<label htmlFor="lastName" className="text-sm">
									Topic Description
								</label>
								<Field
									id="topicDescription"
									name="topicDescription"
									className="px-3 py-2 border border-gray-200 rounded-md"
									placeholder="Write description here..."
								/>
							</div>
							<div className="flex flex-col my-3">
								<label htmlFor="lastName" className="text-sm">
									Video URL
								</label>
								<Field
									id="videoURL"
									name="videoURL"
									className="px-3 py-2 border border-gray-200 rounded-md focus:border focus:outline-1"
									placeholder="https://www.youtube.com/watch?v=zueyEdRZQlk"
								/>
							</div>
							<button
								type="submit"
								className="px-5 py-2 mt-1 text-blue-700 border border-blue-700 rounded-md hover:text-white hover:bg-blue-700 w-fit"
							>
								Submit
							</button>
						</div>
					</Form>
				</Formik>
			</div>
		</React.Fragment>
	);
};

export default Update;
