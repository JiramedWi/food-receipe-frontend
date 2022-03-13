import FoodCard from "../../componenet/FoodCard";
import TextField from "../../componenet/Input";
import PrimaryButton from "../../componenet/Button/PrimaryButton";
import ViewModel from "./ViewModel";
import { cx } from "@emotion/css";

const Bookmark = () => {
  const {
    onSubmit,
    search,
    setSearch,
    handleRemoveBookmark,
    isSearch,
    foodreceipt,
    correction,
    searchBoomarkList,
    isLoading,
  } = ViewModel();

  return (
    <div>
      <form onSubmit={onSubmit} className="my-8 flex flex-col justify-center">
        <div className="mx-auto">
          <TextField
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <PrimaryButton className="ml-2 w-40">Search</PrimaryButton>
        </div>
        {correction !== "" && (
          <div className="mx-auto mt-4">
            <strong className="text-lg">
              Do you mean
              <span className="text-primary-900">{`"${correction}"`}</span> ?
            </strong>
          </div>
        )}
      </form>
      <div className="mx-auto w-[1140px]">
        {isLoading && isSearch ? (
          <div className="mt-8 text-center">loading . . .</div>
        ) : (
          <>
            <div className={cx(isSearch && "hidden", `grid grid-cols-2 gap-4`)}>
              {foodreceipt.length > 0 &&
                foodreceipt.map((item) => (
                  <FoodCard
                    type="remove"
                    image={item.Image}
                    title={item.Title}
                    ingredient={item.Ingredient}
                    instruction={item.Instructions}
                    bookmark={() => handleRemoveBookmark(item.id)}
                  />
                ))}
            </div>
          </>
        )}
        {isLoading && !isSearch ? (
          <div className="mt-8 text-center">loading . . .</div>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-4">
              {searchBoomarkList.length > 0 &&
                searchBoomarkList.map((item) => (
                  <FoodCard
                    type="remove"
                    title={item.Title}
                    image={item.Image}
                    ingredient={item.Ingredient}
                    instruction={item.Instructions}
                    bookmark={() => handleRemoveBookmark(item.id)}
                  />
                ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Bookmark;
