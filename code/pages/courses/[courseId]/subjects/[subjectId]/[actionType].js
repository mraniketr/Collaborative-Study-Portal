import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { Field, Form, Formik, useFormik } from "formik";
import { useRouter } from "next/router";
import Navbar from "../../../../../components/Navbar";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

const Update = () => {
	const router = useRouter();
	const { courseId, subjectId, actionType } = router.query;
	const [initialValue, setInitialValue] = useState({
		subjectName: "",
		chapters: [""],
	});

	useEffect(() => {
		if (actionType == "add") {
			setInitialValue({
				subjectName: "",
				chapters: [""],
			});
		} else {
			fetchSubjectDetails();
		}
	}, []);
	const fetchSubjectDetails = async () => {
		const res = await fetch(`${process.env.AUTH0_BASE_URL}/api/ReadData`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				collection: "subjects",
				filter: {
					activeStatus: true,
					courseId: courseId,
					subjectId: subjectId,
				},
			}),
		});
		const data = await res.json();
		console.log(data);
		setInitialValue({
			subjectName: data.data[0].subjectName,
			chapters: data.data[0].chapters,
		});
	};

	const validationSchema = yup.object().shape({
		subjectName: yup.string().required(),
		chapters: yup.array().required(),
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
						var res = await fetch(
							`${process.env.AUTH0_BASE_URL}/api/InsertData`,
							{
								method: "POST",
								headers: {
									"Content-Type": "application/json",
								},
								body: JSON.stringify({
									collection: "subjects",
									insertObj: {
										activeStatus: false,
										subjectName: values.subjectName,
										chapters: values.chapters
											.filter((e) => e !== "")
											.map((e, index) => ({
												chapterName: e,
												chapterId: index,
											})),
										courseId: courseId,
										subjectId: subjectId,
									},
								}),
							}
						);
						const data = await res.json();
						console.log(data);
						router.push(`/courses/`);
					}}
				>
					{({ values, ...formProps }) => (
						<Form className="flex flex-row justify-center">
							<div className="flex flex-col w-[500px] mt-4 bg-white rounded-lg p-6">
								<div className="flex flex-row mb-3 text-2xl">
									{actionType == "add" ? "Add New Subject" : "Edit Subject"}
								</div>
								<div className="flex flex-col my-3">
									<label htmlFor="subjectName" className="text-sm">
										Subject Name
									</label>
									<Field
										id="subjectName"
										name="subjectName"
										className="px-3 py-2 border border-gray-200 rounded-md"
										placeholder="Jane"
									/>
								</div>
								{actionType == "add" &&
									values.chapters?.map((subject, index) => {
										return (
											<div key={index} className="flex flex-col my-3">
												<label htmlFor="firstName" className="text-sm">
													Chapter #{index + 1}
												</label>
												<Field
													id={`chapter[${index}]`}
													name={`chapter[${index}]`}
													// value={values.chapters[index]}
													className="px-3 py-2 border border-gray-200 rounded-md"
													placeholder="Jane"
													onChange={(e) => {
														console.log(e.target);
														formProps.setFieldValue(
															`chapters[${index}]`,
															e.target.value
														);
														if (
															values.chapters[index + 1] == undefined ||
															values.chapters[index + 1] == ""
														) {
															formProps.setFieldValue(
																`chapters[${index + 1}]`,
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

export default Update;
