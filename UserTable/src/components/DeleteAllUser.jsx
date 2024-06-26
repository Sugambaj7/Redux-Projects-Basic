import React from "react";
import { useDispatch } from "react-redux";
import { deleteUsers } from "../store/actions";

const DeleteAllUser = () => {
  const dispatch = useDispatch();
  const deleteAllUser = () => {
    dispatch(deleteUsers());
  };
  return (
    <div className="flex justify-end">
      <button
        className="bg-blue-400 rounded mt-2"
        onClick={() => deleteAllUser()}
      >
        <p className="px-2 py-2 text-white">Delete All User</p>
      </button>
    </div>
  );
};

export default DeleteAllUser;
