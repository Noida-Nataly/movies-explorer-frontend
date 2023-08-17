import React, {useEffect} from "react";

//хук управления формой и валидации формы
export function useFormWithValidation({initialState}) {
  const [values, setValues] = React.useState({password: '', name: '', email: ''});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

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
    setIsValid(target.closest("form").checkValidity());
  };

  return { values, handleChangeInput, errors, setValues, isValid };
}