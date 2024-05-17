import React, {useState, useEffect} from "react";

const useValidate = (state, setState, validar, fn) => {
    const [errors, setErrors] = useState({});

    const [submitForm, setSubmitForm] = useState(false);

    const cleanErrors = (event) => {
        setErrors({})
    };

    useEffect(() => {
        setErrors({})
    }, [state?.id]);

    useEffect(() => {
        if (submitForm) {
            const noErrors = Object.keys(errors).length === 0;

            if (noErrors) {
                fn();
            }
            console.log("errors", errors);
            setSubmitForm(false);
        }
    }, [errors]);

    //contempla los diferentes tipos de input
    const handleChange = (e) => {

        if (e.target.type === "file") {

            /*     setState({
                   ...state,
                   [e.target.name]: e.target.files[0],
                 });

           */
            setState({
                ...state,
                [e.target.name]: Array.from(e.target.files),
            });


        } else if (e.target.type === "checkbox") {
            setState({
                ...state,
                [e.target.name]: e.target.checked === true ? 1 : 0,
            });
        }
        /*    else if (e.target.name.includes("[]")){
                r
                setState({
                    ...state,
                    [e.target.name]: [...state.e.target.name,e.target.value],
                });
            }*/
        else if (e.target.name.split(".").length === 2) {
            let field = e.target.name.split(".")
            let lev1 = field[0];
            let lev2 = field[1];

            setState({
                ...state,
                [lev1]: {
                    ...state?.[lev1],
                    [lev2]: e.target.value
                }

            });
        } else {
            setState({
                ...state,
                [e.target.name]: e.target.value,
            });
        }
    };

    const handleSubmit = (e) => {
        console.log(state)

        e.preventDefault();
        const errorsValidation = validar(state);
        setErrors(errorsValidation);
        setSubmitForm(true);
    };

    const handleBlur = () => {
        const errorsValidation = validar(state);
        setErrors(errorsValidation);
    };

    return {
        errors,
        handleChange,
        handleSubmit,
        handleBlur,
        cleanErrors
    };
};
export default useValidate;


// const handleChange = (e) => {
//   setOrder({
//     ...order,
//     // [e.target.name]: e.target.value,
//     [e.target.name]:
//       e.target.name === "status_id" || e.target.name === "product_id"
//         ? parseInt(e.target.value, 10)
//         : e.target.value,
//   });

//   console.log([e.target.name], order[e.target.name]);
// };
