import { useState } from "react";

const useAuth = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return { user, isLoggedIn, setIsLoggedIn, loading };
};

export default useAuth;
