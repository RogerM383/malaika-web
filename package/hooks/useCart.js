import React, {useState, useEffect, useContext} from "react";
import {getCart, getGuestCart} from "../../src/services/cartServices";
import useCurrentUser from "./userCurrentUser";
import useLocalStorage from "./useLocalStorage";
import {MainContext} from "../../src/contexts/MainContext";


const useCart = (user) => {

    const [cart, setCart] = useState(null);
   /* const [token, setToken] = useLocalStorage('token');*/
  /*  const {user} = useCurrentUser();*/
    const [token, setToken] = useLocalStorage('token');
    const {state, setState} = useContext(MainContext);


    useEffect(() => {

        if(user){
            console.log("get cart")
            getCart().then((resp)=>{
            setCart(resp)
                setState({...state,cart:resp})

            });

        }else if (token && token != null){
            console.log("get guest cart")
                getGuestCart().then((resp)=>{
                    setCart(resp)
                    setState({...state,cart:resp})

                })
        }




    }, [user,token]);


    return {cart,setCart};
};

export default useCart;
