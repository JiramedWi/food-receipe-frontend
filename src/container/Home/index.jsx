import FoodCard from "../../componenet/FoodCard";
import ViewModel from "./ViewMode";
import TextField from "../../componenet/Input";
import PrimaryButton from "../../componenet/Button/PrimaryButton";
import { cx } from "@emotion/css";

const Home = () => {
  const {
    onSubmit,
    search,
    setSearch,
    suggestionList,
    handleBookmark,
    isSearch,
    foodreceipt,
    correction,
    suggestionText,
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
        {suggestionText !== "" && (
          <div className={cx(isSearch && "hidden", `mx-auto mt-4`)}>
            <strong className="text-lg">
              Today recommend :
              <span className="text-primary-900">{` "${suggestionText}"`}</span>
            </strong>
          </div>
        )}
        {correction !== "" && (
          <div className={cx(!isSearch && "hidden", `mx-auto mt-4`)}>
            <strong className="text-lg">
              Do you mean
              <span className="text-primary-900">{`"${correction}"`}</span> ?
            </strong>
          </div>
        )}
        {!search && isLoading ? (
          <div className="mt-8 text-center">loading . . .</div>
        ) : (
          <>
            {!isSearch && (
              <div className="mx-auto grid w-[1140px] grid-cols-2 justify-center gap-4 p-8">
                {suggestionList.length > 0 &&
                  suggestionList.map((item) => (
                    <FoodCard
                      type="add"
                      image={item.Image}
                      title={item.Title}
                      ingredient={item.Ingredient}
                      instruction={item.Instructions}
                      bookmark={() => handleBookmark(item.id)}
                    />
                  ))}
              </div>
            )}
          </>
        )}
      </form>
      <div className="mx-auto w-[1140px]">
        {isLoading && isSearch ? (
          <div className="mt-8 text-center">loading . . .</div>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-4">
              {foodreceipt.length > 0 &&
                foodreceipt.map((item) => (
                  <FoodCard
                    type="add"
                    image={item.Image}
                    title={item.Title}
                    ingredient={item.Ingredient}
                    instruction={item.Instructions}
                    bookmark={() => handleBookmark(item.id)}
                  />
                ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
