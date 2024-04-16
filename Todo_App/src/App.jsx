import React from "react";
import FormComponent from "./components/FormComponent";

const App = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white rounded">
        <div className="p-4 flex flex-col">
          <h1 className="text-4xl">My Todo List</h1>
          <FormComponent />
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default App;
