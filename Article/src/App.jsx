import React from "react";
import Form from "./components/Form";

const App = () => {
  return (
    <div className="h-[100vh] flex justify-center items-center  ">
      <div className=" p-3 h-[20%] w-[20%] justify-center items-center shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
        <div className="mb-2">
          <span className="text-xl">Article</span>
        </div>
        <div>
          <h2>Add a new article</h2>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default App;
