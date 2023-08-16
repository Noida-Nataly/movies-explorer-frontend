import { useState } from 'react';

export default function useForm() {
  const [values, setValues] = useState({});

  function handleChangeInput (event) {
    console.log(event.target.value)
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setValues((prev) => ({ ...prev, [name]: value }));
  }

  return { values, handleChangeInput, setValues };
}