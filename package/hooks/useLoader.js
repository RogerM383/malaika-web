import React, {useState,useEffect} from "react";
import {gradient_circle} from "../components/Loader/LoaderStyles";

const useLoader = () => {

  const [loader, setLoader] = useState(false);
  const [loaderRender, setloaderRender] = useState();

  const primary ='#af8900';
  const white ='#ffffff';

  useEffect(() => {
    if(loader){
      setloaderRender( <div className={'loader'} css={gradient_circle}>
        <svg className="spinner-box" height="50" width="50" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="33%" stopColor={white} stopOpacity="0%"/>
              <stop offset="100%" stopColor={primary} stopOpacity="100%"/>
            </linearGradient>
            <mask id="myMask">
              <circle cx="25" cy="25" r="23" fill="white"/>
              <circle cx="25" cy="25" r="20" fill="black"/>
            </mask>
          </defs>
          <circle className={'circle-border'} cx="25" cy="25" r="25" fill="url(#grad1)" mask="url(#myMask)"/>
          Sorry, your browser does not support inline SVG.
        </svg>
      </div>)
    }
    else{
      setloaderRender(null)
    }
  }, [loader]);


  return {setLoader, loaderRender};


};

export default useLoader;
