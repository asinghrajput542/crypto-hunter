import React, { createContext, useContext, useEffect, useState } from 'react'

const CryptoContext=createContext();

const Context = ({children}) => {
    const [currency,setCurrency]=useState("INR");
    const[symbol,setSymbol]=useState("₹");

    useEffect(()=>{
        (currency==='INR')?setSymbol("₹"):setSymbol("$");
    },[currency]);
  return (
    <CryptoContext.Provider value={{currency,symbol,setCurrency}}>
        {children}

    </CryptoContext.Provider>
  )
};

export default Context;
export const useCryptoState = () => {
    return useContext(CryptoContext);
  };
