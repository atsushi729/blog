import { useNavigate } from "react-router-dom";
import { Theme, useTheme } from "~/utils/theme-provider";

// Function to define actions
export const useActions = () => {
  const navigate = useNavigate();
  const [, setTheme] = useTheme();

  return [
    // Navigation
    {
      id: "home",
      name: "Home",
      section: "navigation",
      shortcut: ["h"],
      keywords: "home",
      perform: () => navigate("/"),
    },
    {
      id: "blog",
      name: "Blog",
      section: "navigation",
      shortcut: ["b"],
      keywords: "blog, article",
      perform: () => navigate("/blog"),
    },
    {
      id: "about",
      name: "About",
      section: "navigation",
      shortcut: ["a"],
      keywords: "about, contact",
      perform: () => navigate("/about"),
    },
    {
      id: "work",
      name: "Work",
      section: "navigation",
      shortcut: ["w"],
      keywords: "work, oss, project",
      perform: () => navigate("/work"),
    },
    // Utilities
    {
      id: "dark-theme",
      name: "Dark theme",
      section: "utilities",
      shortcut: ["d"],
      keywords: "dark, theme, mode",
      perform: () => setTheme(Theme.DARK),
    },
    {
      id: "light-theme",
      name: "Light theme",
      section: "utilities",
      shortcut: ["l"],
      keywords: "light, theme, mode",
      perform: () => setTheme(Theme.LIGHT),
    },
  ];
};
