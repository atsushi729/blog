import {
  Action,
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarProvider,
  KBarResults,
  KBarSearch,
  useMatches,
} from "kbar";
import { HTMLAttributes, ReactNode } from "react";

interface SearchBarProps extends HTMLAttributes<HTMLElement> {
  actions: Action[];
  children?: ReactNode;
}

const SearchBar = ({ actions, children }: SearchBarProps) => {
  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner className="bg-black/20 backdrop-blur-sm">
          <KBarAnimator className="bg-white rounded-xl flex flex-col gap-4 w-[35rem] overflow-hidden dark:bg-black">
            <KBarSearch className="w-full outline-none px-6 py-4 text-black" />
            {/* Search result */}
            <SearchResult />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {children}
    </KBarProvider>
  );
};

const SearchResult = () => {
  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <div className="text-xm uppercase px-4 pt-3 text-cyan-700 font-bold">
            {item}
          </div>
        ) : (
          <div
            className={`text-black flex px-4 py-3 dark:text-dark-main ${
              active
                ? "bg-[#eeeeee] dark:text-cyan-700 dark:bg-gray-900"
                : "bg-transparent"
            }`}
          >
            {item.name}
          </div>
        )
      }
    />
  );
};

export default SearchBar;
