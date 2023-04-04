import React, { createContext } from "react";
import { useState } from "react";
export const UserContext = createContext(); 


const UserProvider = ({ children }) => {
    const [loggedinUser, SetloggedinUser] = useState();




    return (
      <UserContext.Provider value={{loggedinUser,SetloggedinUser}}>
        {children}
      </UserContext.Provider>
    );
  };

  export default UserProvider