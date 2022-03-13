import BaseButton from "../Button";
import { ReactComponent as BookmarkIcon } from "../../asset/boomark.svg";
import { ReactComponent as CrossIcon } from "../../asset/cross.svg";
import { cx } from "@emotion/css";

const FoodCard = ({
  title,
  image,
  ingredient,
  bookmark,
  instruction,
  type,
}) => {
  const formatInstruction = (instruction) => {
    if (instruction) {
      return instruction.replace(/\n/g, "<br>");
    }
  };

  const fomatIngredient = (ingredient) => {
    if (ingredient) {
      const slice = ingredient.slice(1, -1);
      const split = slice.split(",");

      return split;
    }
  };

  const removeQuote = (text) => {
    const replaceString = text.replace(/'/g, "");
    return replaceString;
  };

  return (
    <div className="flex flex-col gap-y-4 rounded border-[1px] border-neutral-300 p-4 shadow-sm">
      <div className="flex gap-x-4">
        <div className="flex h-[274px] w-[220px] flex-none flex-col">
          <img
            className="h-[274px] w-[220px] rounded rounded border-[1px] object-cover"
            src={image && require(`../../asset/image/${image}`)}
            alt="name"
          />
          {type === "add" && (
            <BaseButton
              type="button"
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
        <div className="w-full">
          <div className="relative flex items-center justify-between">
            <p className="text-lg font-semibold text-neutral-900">{title}</p>
            {type === "remove" && (
              <button type="button" onClick={bookmark}>
                <CrossIcon
                  className={cx(
                    `duration-600 h-4 w-4 text-red-500 transition-colors hover:cursor-pointer active:text-red-700`
                  )}
                />
              </button>
            )}
          </div>
          <div>
            <ul className="mt-2 list-disc pl-8">
              {ingredient &&
                fomatIngredient(ingredient).map((item) => (
                  <li key={item}>{removeQuote(item)}</li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      <p
        className="text-sm text-neutral-700"
        dangerouslySetInnerHTML={{
          __html: formatInstruction(instruction),
        }}
      ></p>
    </div>
  );
};

export default FoodCard;
