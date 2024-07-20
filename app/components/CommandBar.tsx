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

interface CommandBarProps extends HTMLAttributes<HTMLElement> {
  actions: Action[];
  children?: ReactNode;
}

const CommandBar = ({ actions, children }: CommandBarProps) => {
  console.log(children);

  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner className="bg-black/20 backdrop-blur-sm">
          <KBarAnimator className="bg-white rounded-xl flex flex-col gap-4 w-[35rem] overflow-hidden">
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
          <div className="text-xm uppercase px-4 pt-3 text-neutral-500 font-bold">
            {item}
          </div>
        ) : (
          <div
            style={{
              background: active ? "#eee" : "transparent",
            }}
          >
            {item.name}
          </div>
        )
      }
    />
  );
};

export default CommandBar;
