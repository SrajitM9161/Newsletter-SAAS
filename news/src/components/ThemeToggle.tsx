import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 py-5 flex items-center cursor-pointer"
    >
      {theme === "light" ? <Moon className="text-3xl mr-2" /> : <Sun className="text-3xl mr-2" />}
      <span className="text-xl">{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
    </button>
  );
};

export default ThemeToggle;
