import React, {useContext} from "react";
import  {useRouter} from "next/router";
import {MainContext} from "../../src/contexts/MainContext";



const Logout = ({ user, show_label = false, show_icon= true, ...props }) => {

    const router = useRouter();
    const {state, setState} = useContext(MainContext);


    const logout = (e) => {
        e.preventDefault();
        setState({});
        window.localStorage.clear();

        router.push("/")
    }

    return (
        <div onClick={logout} {...props}>
            {
                true && <>
                    {show_icon &&  <span><i className={"fas fa-2x fa-sign-out-alt"}/></span>}
                    {show_label && <span className="label">Logout</span>}
                </>
            }
        </div>
    );
};

export default Logout;
