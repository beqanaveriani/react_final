import { useState } from "react";

const useForm = (callback) => {
  const [values, setInputs] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    callback(values);
    setSubmitted(true);
  };

  const handleInputChange = (event) => {
    event.persist();
    setInputs((vals) => ({
      ...vals,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    handleSubmit,
    handleInputChange,
    values,
    submitted,
  };
};

export default useForm;
