import { RouterProvider } from "react-router-dom";
import "./App.css";
import useAuthChecked from "./hooks/useAuthChecked";
import { router } from "./routes/routes";

function App() {
  const authChecked = useAuthChecked();
  return !authChecked ? (
    <div>loading....</div>
  ) : (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
