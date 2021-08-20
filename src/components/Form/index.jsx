import React from "react";

import { useForm } from "../../hooks/useForm";

import { Input } from "./styles";

export const Form = ({ history }) => {
  const [{ heroeName }, handleInputChange, resetValues] = useForm({
    heroeName: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    history.push(`?q=${heroeName}`);

    resetValues();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="heroeName"
        value={heroeName}
        onChange={handleInputChange}
        placeholder="Type a name"
        autoComplete="no"
      />
    </form>
  );
};
