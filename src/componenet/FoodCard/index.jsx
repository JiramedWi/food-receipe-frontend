import BaseButton from "../Button";
import { ReactComponent as BookmarkIcon } from "../../asset/boomark.svg";
import { ReactComponent as CrossIcon } from "../../asset/cross.svg";

const FoodCard = ({ title, ingredient, bookmark, type }) => {
  const formatInstruction = (instruction) => {
    return instruction.replace(/\n/g, "<br>");
  };

  return (
    <div className="flex flex-col gap-y-4 rounded border-[1px] border-neutral-300 p-4 shadow-sm">
      <div className="flex gap-x-4">
        <div className="flex flex-col">
          <img
            className="h-[274px] w-[169px] rounded rounded border-[1px] object-cover"
            alt="name"
          />
          {type === "add" && (
            <BaseButton
              onClick={bookmark}
              className="mt-2 flex w-auto bg-primary-900 p-2 text-white"
            >
              <div className="flex items-center">
                <BookmarkIcon className="mr-2 h-4 w-4" />
                <span className="text-white">Boomark</span>
              </div>
            </BaseButton>
          )}
        </div>
        <div>
          <div className="relative flex items-center justify-between">
            <p className="text-lg font-semibold text-neutral-900">{title}</p>
            {type === "remove" && (
              <button type="button" onClick={bookmark}>
                <CrossIcon className="h-4 w-4 text-red-500 hover:cursor-pointer" />
              </button>
            )}
          </div>
          <div>
            <ul className="mt-2 list-disc pl-8">
              {ingredient &&
                ingredient.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </div>
      <p
        className="text-sm text-neutral-700"
        dangerouslySetInnerHTML={{
          __html:
            formatInstruction(` Grate the zest of 1 orange and the lime into a large bowl. Squeeze 1
        tablespoon of juice from the grated orange and 2 tablespoons of juice
        from the grated lime into the bowl (you may need a second lime to get
        the 2 tablespoons of juice). Whisk in the soy sauce and the oil. Set the
        dressing aside.\nUse a sharp knife to slice the rind and pith from the
        remaining oranges. Working over a mixing bowl, cut between the membranes
        to free the orange segments, letting them drop into the bowl. Pour any
        juice into a cup and reserve it for another use. Add the mâche, frisée,
        and cucumbers, if using, to the orange segments. Using a large sharp
        knife, cut the salmon into 1/3-inch-thick slices. Add the salmon to the
        bowl. Drizzle with the dressing, and toss gently to coat. Allow the
        flavors to meld for at least 2 minutes.\nDivide the salad among 4
        serving plates. Sprinkle with the toasted sesame seeds, and serve.`),
        }}
      >
        {}
      </p>
    </div>
  );
};

export default FoodCard;
