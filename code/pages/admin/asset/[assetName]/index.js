import React from "react";
import Navbar from "../../../../components/Navbar";
import Link from "next/link";

import { withPageAuthRequired } from "@auth0/nextjs-auth0";

const AssetEdit = ({ data }) => {
	return (
		<React.Fragment>
			<Navbar />
			<div className="flex flex-col ">
				<div className="flex flex-row items-end py-6 text-xl text-white bg-gray-400 border-black shadow-sm h-44 px-36">
					Pending Requests
				</div>
				<div className="grid grid-cols-3 p-10 bg-gray-200">
					{data.map((val, idx) => {
						return (
							<div className="flex flex-col p-6 bg-white border rounded-md">
								<div>
									{Object.keys(val).map((x, i) => {
										return (
											<li className="flex flex-row justify-between gap-10 hover:bg-gray-300">
												<div className="flex w-32 max-w-32">{x}</div>
												<div className="block w-full text-left truncate">
													{val[x]}
												</div>
											</li>
										);
									})}
								</div>
								<div className="flex flex-row justify-between mt-2">
									<Link href={`/courses/`}>
										<button className="flex justify-center px-4 py-3 bg-green-400 border border-green-400 rounded-lg hover:bg-green-500">
											Approve
										</button>
									</Link>
									<Link href={`/courses/`}>
										<button className="flex justify-center px-4 py-3 bg-red-500 border border-red-500 rounded-lg hover:bg-red-400">
											Reject
										</button>
									</Link>
								</div>
							</div>
						);
					})}
				</div>
			</div>
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
				collection: context.query.assetName,
				filter: {
					activeStatus: false,
				},
			}),
		});
		const data = await res.json();
		console.log(data.data);

		return {
			props: {
				data: data.data,
			},
		};
	},
});
export default AssetEdit;
