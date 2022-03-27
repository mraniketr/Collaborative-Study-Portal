import Head from "next/head";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0";
import Navbar from "../components/Navbar";

import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-responsive-button/dist/index.css";
import Link from "next/link";

export default function Index() {
	const { user, error, isLoading } = useUser();

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>{error.message}</div>;

	return (
		<React.Fragment>
			<Navbar />
			<div className="relative flex flex-col items-start w-full pt-16">
				<div className="w-full bg-gray-100">
					<div className="container flex flex-col items-center py-12 mx-auto sm:py-24">
						<div className="flex-col items-center justify-center w-11/12 mb-5 sm:w-2/3 lg:flex sm:mb-10">
							<h1 className="text-2xl font-black leading-7 text-center text-gray-800 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl md:leading-10">
								Learn.
								<span className="text-blue-700">&nbsp;Collab.&nbsp;</span>
								Grow.
							</h1>
							<p className="mt-5 text-sm font-normal text-center text-gray-400 sm:mt-10 lg:w-10/12 sm:text-lg">
								Open-Source Learning and Collaboration Platform

							</p>
						</div>
						<div className="flex items-center justify-center">
							<Link href={user ? "/courses" : "/api/auth/login"}>
								<button  className="px-4 py-2 text-sm text-white transition duration-150 ease-in-out bg-blue-700 border border-blue-700 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 hover:bg-blue-600 lg:text-xl lg:font-bold sm:px-12 sm:py-4">
									Get Started
								</button>
							</Link>
						</div>
					</div>
				</div>
				<div className="flex flex-row justify-between w-full px-32 py-12 space-x-2 bg-white">
					<div className="flex flex-col basis-2/5">
						<div className="flex flex-row text-3xl font-semibold">
							Get Access to open community
						</div>
						<div className="flex flex-row mt-3 text-base max-w-[600px]">
							Collabrate with people around the world. 
							Get your doubts cleared.
						</div>
					</div>
					<div className="flex flex-col basis-2/5">
						<div className=" rounded-xl shadow-[0px_2px_18px_10px_rgb(0,0,0,0.17)]">
							<img src="/ForumImg.png" className="rounded-lg" />
						</div>
					</div>
				</div>
				<div className="flex flex-row justify-between w-full px-32 py-12 space-x-12 bg-gray-100">
					<div className="flex flex-col basis-2/5">
						<div className=" rounded-xl shadow-[0px_2px_18px_10px_rgb(0,0,0,0.17)]">
							<img src="/CoursesImg.png" className="rounded-lg" />
						</div>
					</div>
					<div className="flex flex-col basis-2/5">
						<div className="flex flex-row text-3xl font-semibold">
							Get currated study material from people around the world
						</div>
						<div className="flex flex-row mt-3 text-base max-w-[600px]">
							Get organised content at one place
						</div>
					</div>
				</div>
				<div className="flex flex-row justify-center w-full py-2 text-sm italic text-center text-white bg-gray-800">
					<q>
						Higher education should not be a luxury. It is a necessity, an
						economic imperative that every family in America should be able to
						afford
					</q>
					&nbsp; -
					<span className="italic">&nbsp; Former President Barak Obama</span>
				</div>
			</div>
		</React.Fragment>
	);
}
