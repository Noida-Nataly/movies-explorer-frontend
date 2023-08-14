import {useCallback, useRef, useState} from "react";

//хук управления формой
export default function useForm() {
  const [values, setValues] = useState({});

  const submitCallback = useCallback((event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setValues((prev) => ({ ...prev, [name]: value }));
  }, []);

  return {values, submitCallback, setValues};
}
