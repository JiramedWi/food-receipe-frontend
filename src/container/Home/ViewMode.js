import { useEffect, useState } from "react";

const ViewModel = () => {
  const [suggestionList, setSuggestionList] = useState([
    "sushi",
    "noodle",
    "spagetthi",
    "pizza",
    "burger",
  ]);
  const [search, setSearch] = useState("");

  const onSubmit = (e) => {
    console.log("search", search);
    e.preventDefault();
    if (search) {
      const payload = {
        search: search,
      };
    }

    return null;
  };

  const fetchSuggetionList = () => {
    return null;
  };

  const handleBookmark = () => {
    return null;
  };

  useEffect(() => {
    fetchSuggetionList();
  }, []);

  return { onSubmit, search, setSearch, suggestionList, handleBookmark };
};

export default ViewModel;
