import React, {useState, useEffect, useContext} from "react";
import {getUser} from "../../src/services/authServices";
import {useRouter} from "next/router";
import {MainContext} from "../../src/contexts/MainContext";


const useCurrentUser = () => {

  const [user, setCurrentUser] = useState(null);
  const router = useRouter();
  const {state, setState} = useContext(MainContext);

    useEffect(() => {

      if (typeof window !== 'undefined') {
        const token = window?.localStorage.getItem('token');

        //console.log('token'+token)
        //console.log( 'user compare',state?.user)

        if (token && !state?.user ) {
          getUser().then((resp) => {
                setState({  ...state,
                            user:resp})

              setCurrentUser(resp);
/*              console.log('resp get  user')
              console.log('user2',resp)*/
            }
          )
        }
        else{

            setCurrentUser(state.user)
        // router.push('/login')
        }
      }

    }, []);


/*   useEffect( () => {
        setCurrentUser(state.user);
    }, []);*/

    return {user};
};

export default useCurrentUser;
