import React from "react";

import useForm from "../hooks/useForm";
import Header from "../components/header";

const Edit = ({ history }) => {
  const handleFormSubmit = async (vals) => {
    try {
      history.push("/");
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const { values, handleSubmit, handleInputChange } = useForm(handleFormSubmit);

  return (
    <div>
      <Header />

      <div className="add">
        <h2>Edit product</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={values.title}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={values.description}
            onChange={handleInputChange}
          />
          <button type="submit">Edit</button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
