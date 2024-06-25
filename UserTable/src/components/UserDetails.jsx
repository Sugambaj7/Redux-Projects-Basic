import React from "react";
import DeleteAllUser from "./DeleteAllUser";

const UserDetails = () => {
  return (
    <>
      <div className="content w-full flex justify-center">
        <div className="admin-table w-[70%]">
          <div className="admin-subtitle flex mt-4">
            <p className="text-2xl flex-1">List of user Details</p>
            <button className="bg-blue-400 rounded">
              <p className="mx-4 my-2 text-white">Add New User</p>
            </button>
          </div>
          <div className="flex">
            <div className="flex-1">
              <ul>
                <li>heli</li>
                <li>heli</li>
              </ul>
              <hr />
            </div>
          </div>
          <DeleteAllUser />
        </div>
      </div>
    </>
  );
};

export default UserDetails;
