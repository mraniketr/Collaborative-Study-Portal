import React from "react";
import Navbar from "../../components/Navbar";
import Link from "next/link";

import { withPageAuthRequired } from "@auth0/nextjs-auth0";

const Admin = ({ assets }) => {
	return (
		<React.Fragment>
			<Navbar />
			<div className="flex flex-col ">
				<div className="flex flex-row items-end py-6 text-xl text-white bg-gray-400 border-black shadow-sm h-44 px-36">
					Get Started with learning by selecting the Resource to approve
				</div>

				<div className="flex flex-col py-4 px-36">
					<div className="flex flex-row w-full py-2 mb-2 border-b border-black">
						Asset Names
					</div>
					<div className="grid grid-cols-5 gap-6">
						{assets?.map((value, s_index) => {
							return (
								<Link key={s_index} href={`/admin/asset/${value}`}>
									<button className="flex justify-center px-4 py-3 bg-blue-300 border border-blue-700 rounded-lg hover:bg-blue-400">
										{value}
									</button>
								</Link>
							);
						})}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export const getServerSideProps = withPageAuthRequired({
	async getServerSideProps(context) {
		const assetNames = ["courses", "subjects", "chapters", "topics"];
		console.log(assetNames);
		return {
			props: {
				assets: assetNames,
			},
		};
	},
});

export default Admin;
