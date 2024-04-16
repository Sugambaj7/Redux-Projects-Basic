import React from "react";

const Form = () => {
  return (
    <form>
      <div>
        <label className="mt-2" htmlFor="">
          Title
        </label>
        <input className="border border-black mt-2 ml-2 px-2" type="text" />
      </div>
      <button className="bg-blue-500 text-white px-3 py-1 mt-2">Save</button>
    </form>
  );
};

export default Form;
