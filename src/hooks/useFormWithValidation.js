import React, {useEffect} from "react";

//хук управления формой и валидации формы
export function useFormWithValidation({initialState}) {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});

  useEffect(() => {
    if (initialState) {
      setValues(initialState);
    }
  }, [])
  const handleChangeInput = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({...values, [name]: value});
    setErrors({...errors, [name]: target.validationMessage });
  };

  return { values, handleChangeInput, errors, setValues };
}