import React from "react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";

const Navbar = () => {
  const { user, error, isLoading } = useUser();
  return (
    <div className="absolute flex flex-row items-center justify-between w-full h-16 bg-blue-600 shadow-sm px-36">
      <div className="flex text-2xl font-bold text-white">
        <Link href="/">
          <div className="text-white">EzyPzy</div>
        </Link>
      </div>
      <div className="flex flex-row space-x-6 ">
        <div className="flex text-base text-white cursor-pointer">
          <Link href="/courses">
            <div className="text-white">Courses</div>
          </Link>
        </div>
        <div className="flex text-base text-white cursor-pointer">
          <Link href="/forum">
            <div className="text-white">Forum</div>
          </Link>
        </div>
        <div className="flex flex-row ">
          {user ? (
            <React.Fragment>
              <div className="flex w-6 h-6 mr-2 bg-gray-200 rounded-full">
                <img
                  src={user.picture}
                  width="100%"
                  height={"100%"}
                  className="object-cover rounded-full"
                />
              </div>
              <div className="flex text-base text-white cursor-pointer">
                <Link href="/api/auth/me">{user.nickname}</Link>
              </div>
            </React.Fragment>
          ) : (
            <div className="flex text-base text-white cursor-pointer">
              <Link href="/api/auth/login">
                <div className="text-white">Login</div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
