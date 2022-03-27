import { useUser } from "@auth0/nextjs-auth0";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import InputField from "../../components/InputField";
import Navbar from "../../components/Navbar";

const Feedback = () => {
	const [data, setData] = useState({});
	const [message, setMessage] = useState({});
	const { user, error, isLoading } = useUser();
	return (
		<React.Fragment>
			<Navbar />
			<div className="flex flex-row items-center justify-center w-screen h-screen">
				<div className="flex flex-col p-6 bg-white rounded-sm shadow-sm w-96">
					<div className="flex flex-row text-2xl font-semibold">Rate Us</div>
					<div
						className={classNames("flex flex-row text-sm mt-3 text-gray-500")}
					>
						1-5
					</div>
					<StarRating
						onChange={(val) => setData((prev) => ({ ...prev, ratings: val }))}
					/>
					<InputField
						name={"message"}
						placeholder="Write here..."
						label="Message for us"
						type={"text"}
						onChange={(e) =>
							setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
						}
					/>
					<div className="flex flex-row">
						<button
							className="w-full mt-4 text-lg text-white bg-blue-700 rounded-md h-11"
							onClick={async () => {
								try {
									var res = await fetch(
										`${process.env.AUTH0_BASE_URL}/api/InsertData`,
										{
											method: "POST",
											headers: {
												"Content-Type": "application/json",
											},
											body: JSON.stringify({
												collection: "feedback",
												insertObj: {
													uId: user?.email,
													...data,
												},
											}),
										}
									);
									setData({});
									setMessage({ success: true, message: "Feedback Submitted" });
									setTimeout(() => {
										setMessage({});
									}, 5000);
								} catch (e) {}
								setMessage({
									success: false,
									message: "Submission error",
								});
							}}
						>
							Submit
						</button>
					</div>
					<div
						className={classNames(
							"flex flex-row text-sm mt-1",
							message.success == undefined
								? "hidden"
								: message.success == true
								? "text-green-500"
								: "text-red-500"
						)}
					>
						{message.message}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};
const StarRating = ({ onChange }) => {
	const [rating, setRating] = useState(0);
	const [hover, setHover] = useState(0);
	useEffect(() => {
		onChange(rating);
	}, [rating]);
	return (
		<div className="flex space-x-1">
			{[...Array(5)].map((star, index) => {
				index += 1;
				return (
					<button
						type="button"
						key={index}
						className={classNames(
							index <= (hover || rating) ? "text-yellow-500" : ""
						)}
						onClick={() => setRating(index)}
						onMouseEnter={() => setHover(index)}
						onMouseLeave={() => setHover(rating)}
					>
						<span className="star">&#9733;</span>
					</button>
				);
			})}
		</div>
	);
};
export default Feedback;
