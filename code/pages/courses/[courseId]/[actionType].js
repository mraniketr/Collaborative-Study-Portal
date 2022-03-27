import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { Field, Form, Formik, useFormik } from "formik";
import { useRouter } from "next/router";
import Navbar from "../../../components/Navbar";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

const Add = () => {
	const router = useRouter();
	const { course_id, actionType } = router.query;
	const [initialValue, setInitialValue] = useState({});
	useEffect(() => {
		console.log(actionType);
		if (actionType == "add") {
			setInitialValue({
				courseName: "",
				subjects: [""],
			});
		} else {
			fetchCourseDetails();
		}
	}, []);
	const fetchCourseDetails = async () => {
		const res = await fetch(`${process.env.AUTH0_BASE_URL}/api/ReadData`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				collection: "courses",
				filter: { activeStatus: true, courseId: course_id },
			}),
		});
		const data = await res.json();
		console.log(data);
		setInitialValue({
			courseName: data.data[0].courseName,
			subjects: data.data[0].subjects,
		});
	};

	const validationSchema = yup.object().shape({
		courseName: yup.string().required(),
		subjects: yup.array().required(),
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
									collection: "courses",
									insertObj: {
										activeStatus: false,
										courseName: values.courseName,
										subjects: values.subjects
											.filter((e) => e !== "")
											.map((e, index) => ({
												subjectName: e,
												subjectId: index,
											})),
										courseId: course_id,
									},
								}),
							}
						);
						const data = await res.json();
						console.log(values);
						router.push(`/courses/`);
					}}
				>
					{({ values, ...formProps }) => (
						<Form className="flex flex-row justify-center">
							<div className="flex flex-col w-[500px] mt-4 bg-white rounded-lg p-6">
								<div className="flex flex-row mb-3 text-2xl capitalize">
									{actionType == "add" ? "Add New Course" : "Edit Course"}
								</div>
								<div className="flex flex-col my-3">
									<label htmlFor="firstName" className="text-sm">
										Course Name
									</label>
									<Field
										id="courseName"
										name="courseName"
										className="px-3 py-2 border border-gray-200 rounded-md"
										placeholder="Jane"
									/>
								</div>
								{actionType == "add" &&
									values.subjects?.map((subject, index) => {
										return (
											<div key={index} className="flex flex-col my-3">
												<label htmlFor="firstName" className="text-sm">
													Subject #{index + 1}
												</label>
												<Field
													id={`subject[${index}]`}
													name={`subject[${index}]`}
													// value={values.subjects[index]}
													className="px-3 py-2 border border-gray-200 rounded-md"
													placeholder="Jane"
													onChange={(e) => {
														console.log(e.target);
														formProps.setFieldValue(
															`subjects[${index}]`,
															e.target.value
														);
														if (
															values.subjects[index + 1] == undefined ||
															values.subjects[index + 1] == ""
														) {
															formProps.setFieldValue(
																`subjects[${index + 1}]`,
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

export default Add;
