import { useState } from "react";

const useAuth = () => {
  const storeUsername = localStorage.getItem('username')
  const [user, setUser] = useState();
  const [loading, _setLoading] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(storeUsername ? true : false);

  return { user, setUser, isLoggedIn, setIsLoggedIn, loading };
};

export default useAuth;
