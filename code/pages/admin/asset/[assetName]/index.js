import React from "react";
import Navbar from "../../../../components/Navbar";
import Link from "next/link";

import { withPageAuthRequired } from "@auth0/nextjs-auth0";

const AssetEdit = ({ data, collName }) => {
	const handleReject = async (val, collName) => {
		console.log("Deleted", val["_id"]);
		const res = await fetch("http://localhost:3000/api/DeleteData", {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ collection: collName, deleteId: val["_id"] }),
		});
		console.log(res);
		location.reload();
	};

	const handleApprove = async (val, collName) => {
		console.log("Approve", val["_id"]);
		val["activeStatus"] = true;
		delete val["_id"];
		var deleteFilterKeys = Object.keys(val).filter((val) => val.includes("Id"));
		console.log(deleteFilterKeys);
		var deleteFilter = {};
		deleteFilterKeys.map((x) => (deleteFilter[x] = val[x]));

		const res = await fetch("http://localhost:3000/api/DeleteData", {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ collection: collName, filter: deleteFilter }),
		});
		console.log(res);

		const res2 = await fetch("http://localhost:3000/api/InsertData", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ collection: collName, insertObj: val }),
		});
		location.reload();
	};
	return (
		<React.Fragment>
			<Navbar />
			<div className="flex flex-col ">
				<div className="flex flex-row items-end py-6 text-xl text-white bg-gray-400 border-black shadow-sm h-44 px-36">
					Pending Requests
				</div>
				<div className="grid grid-cols-3 gap-20 p-10">
					{data
						? data?.map((val, idx) => {
								return (
									<div
										className="flex flex-col p-6 bg-white rounded-xl"
										key={idx}
									>
										<div>
											{Object.keys(val)?.map((x, i) => {
												return (
													<li
														key={i}
														className="flex flex-row justify-between gap-10 py-0.5 space-x-6 hover:bg-slate-100"
													>
														<div className="flex basis-1/3">{x}</div>
														<div className="flex basis-2/3 line-clamp-1">
															{`${val[x]}`}
														</div>
													</li>
												);
											})}
										</div>
										<div className="flex flex-row justify-between mt-4 space-x-3">
											<button
												onClick={() => handleApprove(val, collName)}
												className="flex justify-center w-full py-2 bg-green-400 rounded-sm hover:bg-green-500"
											>
												Approve
											</button>

											<button
												onClick={() => handleReject(val, collName)}
												className="flex justify-center w-full py-2 bg-red-500 rounded-sm hover:bg-red-400"
											>
												Reject
											</button>
										</div>
									</div>
								);
						  })
						: "No Pending Requests"}
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
		console.log(data?.data);

		return {
			props: {
				data: data.data ?? null,
				collName: context.query.assetName,
			},
		};
	},
});
export default AssetEdit;
