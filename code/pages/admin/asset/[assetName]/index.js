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
        <div className="grid grid-cols-3 gap-20 p-10">
          {data.map((val, idx) => {
            return (
              <div className="flex flex-col">
                <div>
                  {Object.keys(val).map((x, i) => {
                    return (
                      <div className="flex flex-row justify-between gap-10 ">
                        <div>{x}</div>
                        <div>{val[x]}</div>
                      </div>
                    );
                  })}
                </div>
                <div className="flex flex-row justify-between">
                  <Link href={`/courses/`}>
                    <button className="flex justify-center px-4 py-3 bg-green-400 border border-blue-700 rounded-lg hover:bg-blue-400">
                      Approve
                    </button>
                  </Link>
                  <Link href={`/courses/`}>
                    <button className="flex justify-center px-4 py-3 bg-red-400 border border-blue-700 rounded-lg hover:bg-blue-400">
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
