import { useEffect, useState } from "react";
import { useContextAuthManager } from "../../authentication";
import { errorToast } from "../../componenet/Toast/ErrorToast";
import { successToast } from "../../componenet/Toast/SuccessToast";
import { addBookmarkApi } from "../../service/addBookmark";
import { searchApi } from "../../service/search";
import { fetchSuggestion } from '../../service/suggestion'

const ViewModel = () => {
  const [suggestionList, setSuggestionList] = useState([
    []
  ]);
  const [search, setSearch] = useState("");
  const [isSearch, setIsSearch] = useState(false)
  const [foodreceipt, setFoodReceipt] = useState([])
  const [correction, setCorrection] = useState('')
  const [suggestionText, setSuggestionText] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const { user } = useContextAuthManager()

  const onSubmit = (e) => {
    setIsSearch(true)
    setIsLoading(true)
    setSuggestionText('')
    e.preventDefault();
    if (search) {
      const payload = {
        query: search,
      };

      searchApi(payload)
        .then(response => {
          setFoodReceipt(response.data.result)
          setCorrection(response.data.correction)
          setIsLoading(false)
        })
        .catch(err => console.log('err', err))
    }

    return null;
  };

  const fetchSuggetionList = () => {
    fetchSuggestion().then(response => {
      setSuggestionList(response.data.result)
      setSuggestionText(response.data.suggestion)
      setIsLoading(false)
    }).catch(err => console.log('err', err))
    return null;
  };

  const handleBookmark = (foodId) => {

    const payload = {
      userid: user.id,
      foodid: foodId
    }

    addBookmarkApi(payload)
      .then(response => {
        successToast({
          content: (
            <>
              <p className="mb-1 font-semibold text-neutral-900">Bookmark</p>
              <p className="mt-1 text-neutral-700">Successfully a receipt to Bookmark.</p>
            </>
          ),
        })
      })
      .catch(err => {
        console.log('err', err)
        errorToast({
          content: (
            <>
              <p className="mb-1 font-semibold text-neutral-900">Error</p>
              <p className="mt-1 text-neutral-700">Something wrong, please try again.</p>
            </>
          ),
        })
      })
    return null;

  };

  useEffect(() => {
    fetchSuggetionList();
  }, []);

  return { onSubmit, search, setSearch, suggestionList, handleBookmark, isSearch, foodreceipt, correction, suggestionText, isLoading };
};

export default ViewModel;
