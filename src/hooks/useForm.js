import { useState } from "react";

export const useForm = (values = {}) => {
  const [formValues, setFormValues] = useState(values);

  const resetValues = () => setFormValues(values);

  const handleInputChange = ({ target }) =>
    setFormValues({
      ...values,
      [target.name]: target.value,
    });

  return [formValues, handleInputChange, resetValues];
};
