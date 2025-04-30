import React, { createContext, useContext, useState } from "react";

const PageContext = createContext();

export const PageProvider = ({ children }) => {
  const [page, setPage] = useState(1);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [password, setPassword] = useState("");
  return (
    <PageContext.Provider value={{ page, setPage, email, setEmail, name, setName, loginEmail, setLoginEmail, loginPass, setLoginPass, password, setPassword }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePage = () => useContext(PageContext);
