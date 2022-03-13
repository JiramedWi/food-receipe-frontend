import FoodCard from "../../componenet/FoodCard";
import ViewModel from "./ViewMode";
import TextField from "../../componenet/Input";
import PrimaryButton from "../../componenet/Button/PrimaryButton";
import BaseButton from "../../componenet/Button";

const Home = () => {
  const { onSubmit, search, setSearch, suggestionList, handleBookmark } =
    ViewModel();

  return (
    <div className="mt-20">
      <form onSubmit={onSubmit} className="mb-8 flex flex-col justify-center">
        <div className="mx-auto flex justify-center gap-x-6 p-8">
          {suggestionList.map((item) => (
            <BaseButton
              type="submit"
              className="w-auto text-xl hover:cursor-pointer"
              onClick={() => {
                setSearch(item);
              }}
            >
              {item}
            </BaseButton>
          ))}
        </div>

        <div className="mx-auto">
          <TextField
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <PrimaryButton className="ml-2 w-40">Search</PrimaryButton>
        </div>
      </form>
      <div className="mx-auto w-[1140px]">
        <div className="grid grid-cols-2 gap-4">
          <FoodCard
            type="add"
            title={"Noodle"}
            ingredient={[
              "4 oranges",
              "1 or 2 limes",
              "1 tablespoon soy sauce",
              "3 tablespoons grapeseed oil",
              '"6 cups mâche (lambs lettuce) leaves", 2 cups frisée lettuce, torn into bite-size pieces',
              "1/2 cucumber, peeled, seeded, and thinly sliced (optional)",
              "7 ounces sushi-grade salmon, skin removed",
              "1 teaspoon sesame seeds",
              "toasted",
            ]}
            bookmark={() => handleBookmark()}
          />
          <FoodCard
            type="add"
            title={"Noodle"}
            ingredient={[
              "4 oranges",
              "1 or 2 limes",
              "1 tablespoon soy sauce",
              "3 tablespoons grapeseed oil",
              '"6 cups mâche (lambs lettuce) leaves", 2 cups frisée lettuce, torn into bite-size pieces',
              "1/2 cucumber, peeled, seeded, and thinly sliced (optional)",
              "7 ounces sushi-grade salmon, skin removed",
              "1 teaspoon sesame seeds",
              "toasted",
            ]}
            bookmark={() => handleBookmark()}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
