import { useEffect, useState } from "react"
import { useContextAuthManager } from "../../authentication"
import { errorToast } from "../../componenet/Toast/ErrorToast"
import { successToast } from "../../componenet/Toast/SuccessToast"
import { bookmarkApi } from "../../service/bookmark"
import { removeBookmarkApi } from "../../service/removeBookmark"
import { searchBookMarkApi } from "../../service/searchBookmark"

const ViewModel = () => {
    const [search, setSearch] = useState('')
    const [foodreceipt, setFoodreceipt] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isSearch, setIsSearch] = useState(false)
    const [searchBoomarkList, setSearchBoomarkList] = useState([])
    const [correction, setCorrection] = useState('')
    const [suggestionText, setSuggestionText] = useState('')
    const { user } = useContextAuthManager()

    const onSubmit = (e) => {
        e.preventDefault()
        setCorrection('')

        if (search && search !== '') {
            setIsSearch(true)
            const payload = {
                userid: user.id,
                query: search
            }

            searchBookMarkApi(payload)
                .then(response => {
                    setSearchBoomarkList(response.data.result)
                    setCorrection(response.data.correction)
                    setFoodreceipt([])
                }).catch(err => console.log('err', err))
        } else if (search === '') {
            setIsSearch(false)
            fetchBookMark()
        }
        return null
    }

    const handleRemoveBookmark = (foodId) => {

        const payload = {
            userid: user.id,
            foodid: foodId
        }

        removeBookmarkApi(payload)
            .then(response => {
                fetchBookMark()
                successToast({
                    content: (
                        <>
                            <p className="mb-1 font-semibold text-neutral-900">Bookmark</p>
                            <p className="mt-1 text-neutral-700">Successfully remove receipt from Bookmark.</p>
                        </>
                    ),
                })
            }).catch(err => {
                errorToast({
                    content: (
                        <>
                            <p className="mb-1 font-semibold text-neutral-900">Error</p>
                            <p className="mt-1 text-neutral-700">Something wrong, please try again.</p>
                        </>
                    ),
                })
            })

        return null
    }

    const fetchBookMark = () => {
        setIsLoading(true)

        const payload = {
            userid: user.id
        }

        bookmarkApi(payload)
            .then((response) => {
                setIsLoading(false)
                setFoodreceipt(response.data.result)
            }).catch(err => console.log('err', err))
    }

    useEffect(() => {
        fetchBookMark()
    }, [])


    return {
        onSubmit,
        search,
        setSearch,
        handleRemoveBookmark,
        foodreceipt,
        isLoading,
        isSearch, correction,
        searchBoomarkList,
        correction,
        suggestionText
    }
}

export default ViewModel