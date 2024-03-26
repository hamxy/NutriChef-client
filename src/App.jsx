import { RouterProvider } from "react-router-dom";
import router from "./routes/indexRoute";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
