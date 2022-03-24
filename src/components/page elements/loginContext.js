import { createContext } from "react";

const loginContext = createContext({
  currentUser: "Guest",
  setCurrentUser: (currentUser) => {}
});

export default loginContext;
