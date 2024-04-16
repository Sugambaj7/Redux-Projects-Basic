import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addArticle } from "../redux/actions/action.jsx";

const Form = () => {
  const [article, setNewArticle] = useState([]);
  const articleState = useSelector((state) => state.articles.listOfArticles);
  console.log(articleState, "k xa");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label className="mt-2" htmlFor="">
          Title
        </label>
        <input
          className="border border-black mt-2 ml-2 px-2"
          type="text"
          onChange={(event) => setNewArticle(event.target.value)}
        />
      </div>
      {/* <span>{articleState}</span> */}
      <button
        type="submit"
        onClick={() => dispatch(addArticle(article))}
        className="bg-blue-500 text-white px-3 py-1 mt-2"
      >
        Save
      </button>
    </form>
  );
};

export default Form;
