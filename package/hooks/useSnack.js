import React, { useState, useEffect } from "react";


// --------------- SNACK ------------------------------------
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import { AlertTitle } from "@material-ui/lab";
// ----------------------------------------------------------


const useSnack = () => {
 // const width = useWindowWidth();

  const [snack, setSnack] = useState({
    open: false,
    message:'',
    class:'',
    vertical: 'bottom',
    horizontal: 'right' });


  const { vertical, horizontal, open } = snack;

  const handleClose = () => {
    setSnack({ ...snack, open: false });
  };



  const snackrender = (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={snack.open} autoHideDuration={3000} onClose={handleClose} >


      <Alert  elevation={6} variant="filled" onClose={handleClose} severity={snack.class}  icon={false} >
        <>
        {/*  <AlertTitle></AlertTitle>*/}
          <h3>{snack.message}</h3>
        </>

      </Alert>
    </Snackbar>
  );


  return {snack, snackrender, setSnack};
};

export default useSnack;
