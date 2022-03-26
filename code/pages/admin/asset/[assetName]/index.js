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
					{data?.map((val, idx) => {
						return (
							<div className="flex flex-col" key={idx}>
								<div>
									{Object.keys(val)?.map((x, i) => {
										return (
											<div
												key={i}
												className="flex flex-row justify-between gap-10 "
											>
												<div>{x}</div>
												<div>{val[x]}</div>
											</div>
										);
									})}
								</div>
								<div className="flex flex-row justify-between">
									<button
										onClick={() => handleApprove(val, collName)}
										className="flex justify-center px-4 py-3 bg-green-400 border border-blue-700 rounded-lg hover:bg-blue-400"
									>
										Approve
									</button>

									<button
										onClick={() => handleReject(val, collName)}
										className="flex justify-center px-4 py-3 bg-red-400 border border-blue-700 rounded-lg hover:bg-blue-400"
									>
										Reject
									</button>
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
