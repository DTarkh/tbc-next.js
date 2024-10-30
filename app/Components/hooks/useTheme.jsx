// import { useState } from "react";

// const useToggle = () => {

//     const [theme, setTheme] = useState(() => {
//         try {
//           const theme = localStorage.getItem("theme");
//           if (theme) {
//             return theme;
//           } else {
//             localStorage.getItem("theme", "light");
//             return "light";
//           }
//         } catch (error) {
//           console.log("error", error);
//           return "light";
//         }
//       });



//       const toggleTheme = () => {
//         setTheme((prevTheme) => prevTheme === 'dark' ? 'light' : 'dark');
//         localStorage.setItem("theme", theme === 'dark' ? 'light' : 'dark');
//       }

//   return {theme, toggleTheme}
// }

// export default useToggle;