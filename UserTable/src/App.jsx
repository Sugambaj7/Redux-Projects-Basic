import React from "react";
import Navbar from "./components/Navbar";
import UserDetails from "./components/UserDetails";

const App = () => {
  return (
    <>
      <div className="min-h-[calc(100vh)] flex flex-col items-center">
        <Navbar />
        <UserDetails />
      </div>
    </>
  );
};

export default App;
