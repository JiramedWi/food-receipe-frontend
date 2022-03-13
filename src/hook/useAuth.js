import { useState } from "react";

const useAuth = () => {
  const storeId = localStorage.getItem('id')
  const storeUsername = localStorage.getItem('username')
  const [user, setUser] = useState({ username: storeUsername, id: parseInt(storeId) });
  const [loading, _setLoading] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(storeUsername ? true : false);

  return { user, setUser, isLoggedIn, setIsLoggedIn, loading };
};

export default useAuth;
