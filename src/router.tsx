import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Pomodoro from "./screens/Pomodoro";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Pomodoro />,
      },
    ],
  },
]);

export default router;
