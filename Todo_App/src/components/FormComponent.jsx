import React from "react";

const FormComponent = () => {
  return (
    <div className="mt-3">
      <form action="">
        <input className="w-[100%] border border-grey-300 px-2 py-1" type="text" />
        <button className="bg-blue-600 text-white px-3 py-1 mt-2 rounded" type="submit">
            Add Todo
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
