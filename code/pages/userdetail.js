import Head from "next/head";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0";
import Navbar from "../components/Navbar";
import Link from "next/link";

export default function Index() {
	const { user, error, isLoading } = useUser();

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>{error.message}</div>;

	if (user) {
		return (
			<div>
				<Head>
					<title>Collaborative Study Portal</title>
					<meta name="description" content="Learn together Grow together" />
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<div>
					<Navbar />{" "}
				</div>

				<div style={{ padding: 64 }}>
					<div className="flex items-center justify-center w-full h-screen bg-gray-200">
						<div className="relative flex flex-col items-center h-auto px-4 pt-24 pb-8 transition bg-gray-400 rounded-md shadow-md w-96 hover:shadow-lg">
							<div className="absolute z-10 p-2 transition bg-gray-100 rounded-full shadow-lg w-28 h-28 -top-8 hover:shadow-xl">
								<div className="w-full h-full overflow-auto bg-black rounded-full">
									<Image src={user.picture} />
								</div>
							</div>
							<label className="text-lg font-bold text-gray-100">
								{user.name}
							</label>
							<p className="mt-2 leading-relaxed text-center text-gray-200">
								Email : {user.email}
							</p>
							<p className="mt-2 leading-relaxed text-center text-gray-200">
								Language : {user.locale}
							</p>
							<br />
							<Link
								className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
								href="/api/auth/logout"
							>
								Logout
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
