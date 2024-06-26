import React from "react";
import DeleteAllUser from "./DeleteAllUser";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteIndividualUser } from "../store/slices/UserSlice";
import Chance from "chance";
import { MdDeleteForever } from "react-icons/md";

const UserDetails = () => {
  var chance = new Chance();
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users);

  const addNewUser = () => {
    dispatch(addUser(chance.name({ middle: true })));
  };

  const deleteOneUser = (id) => {
    dispatch(deleteIndividualUser(id));
  };
  return (
    <>
      <div className="content w-full flex justify-center">
        <div className="admin-table w-[70%]">
          <div className="admin-subtitle flex mt-4">
            <p className="text-2xl flex-1">List of user Details</p>
            <button
              className="bg-blue-400 rounded"
              onClick={() => addNewUser()}
            >
              <p className="mx-4 my-2 text-white">Add New User</p>
            </button>
          </div>
          <div className="flex">
            <div className="flex-1">
              <ul>
                {users
                  ? users.map((user, id) => (
                      <li
                        className="text-lg mt-1 flex items-center justify-between "
                        key={id}
                      >
                        <p>{user}</p>
                        <button
                          className="mr-4"
                          onClick={() => deleteOneUser(id)}
                        >
                          <MdDeleteForever className=" text-red-500 text-2xl" />
                        </button>
                      </li>
                    ))
                  : null}
              </ul>
              <hr className="mt-4" />
            </div>
          </div>
          <DeleteAllUser />
        </div>
      </div>
    </>
  );
};

export default UserDetails;
