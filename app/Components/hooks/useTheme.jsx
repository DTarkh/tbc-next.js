import { useState } from "react";

const useToggle = () => {

    const [theme, setTheme] = useState(() => {
        try {
          const theme = localStorage.getItem("theme");
          if (theme) {
            return theme;
          } else {
            localStorage.getItem("theme", "light");
            return "light";
          }
        } catch (error) {
          console.log("error", error);
          return "light";
        }
      });

  return {theme, setTheme}
}

export default useToggle