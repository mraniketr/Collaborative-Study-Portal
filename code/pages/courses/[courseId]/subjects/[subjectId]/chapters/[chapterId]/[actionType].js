import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { Field, Form, Formik, useFormik } from "formik";
import { useRouter } from "next/router";
import Navbar from "../../../../../../../components/Navbar";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

const update = () => {
	const router = useRouter();
	const { courseId, subjectId, chapterId, actionType } = router.query;
	const [initialValue, setInitialValue] = useState({
		chapterName: "",
		topics: [""],
	});

	useEffect(() => {
		if (actionType == "add") {
			setInitialValue({
				chapterName: "",
				topics: [""],
			});
		} else {
			fetchChapterDetails();
		}
	}, []);
	const fetchChapterDetails = async () => {
		const res = await fetch("http://localhost:3000/api/ReadData", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				collection: "chapters",
				filter: {
					activeStatus: true,
					courseId: courseId,
					subjectId: subjectId,
					chapterId: chapterId,
				},
			}),
		});
		const data = await res.json();
		console.log(data);
		setInitialValue({
			chapterName: data.data[0].chapterName,
			topics: data.data[0].chapters,
		});
	};

	const validationSchema = yup.object().shape({
		chapterName: yup.string().required(),
		topics: yup.array().required(),
	});

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
								collection: "chapters",
								insertObj: {
									activeStatus: false,
									chapterName: values.chapterName,
									topics: values.topics
										.filter((e) => e !== "")
										.map((e, index) => ({
											chapterName: e,
											chapterId: index,
										})),
									courseId: courseId,
									subjectId: subjectId,
									chapterId: chapterId,
								},
							}),
						});
						const data = await res.json();
						console.log(data);
						router.push(`/courses/${courseId}/subjects/${subjectId}`);
					}}
				>
					{({ values, ...formProps }) => (
						<Form className="flex flex-row justify-center">
							<div className="flex flex-col w-[500px] mt-4 bg-white rounded-lg p-6">
								<div className="flex flex-row mb-3 text-2xl">
									{actionType == "add" ? "Add New Chapter" : "Edit Chapter"}
								</div>
								<div className="flex flex-col my-3">
									<label htmlFor="chapterName" className="text-sm">
										Chapter Name
									</label>
									<Field
										id="chapterName"
										name="chapterName"
										className="px-3 py-2 border border-gray-200 rounded-md"
										placeholder="Jane"
									/>
								</div>
								{actionType == "add" &&
									values.topics?.map((subject, index) => {
										return (
											<div className="flex flex-col my-3">
												<label htmlFor="firstName" className="text-sm">
													Topic #{index + 1}
												</label>
												<Field
													id={`topic[${index}]`}
													name={`topic[${index}]`}
													// value={values.chapters[index]}
													className="px-3 py-2 border border-gray-200 rounded-md"
													placeholder="Jane"
													onChange={(e) => {
														console.log(e.target);
														formProps.setFieldValue(
															`topics[${index}]`,
															e.target.value
														);
														if (
															values.topics[index + 1] == undefined ||
															values.topics[index + 1] == ""
														) {
															formProps.setFieldValue(
																`topics[${index + 1}]`,
																""
															);
														}
													}}
												/>
											</div>
										);
									})}
								<button
									type="submit"
									className="px-5 py-2 mt-1 text-blue-700 border border-blue-700 rounded-md hover:text-white hover:bg-blue-700 w-fit"
								>
									Submit
								</button>
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</React.Fragment>
	);
};

export default update;
