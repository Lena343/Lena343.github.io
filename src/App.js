import { FitList } from "./components/FitList.jsx";
import { ZalList } from "./components/ZalList.jsx"
import { UslugiList } from "./components/UslugiList.jsx";
import { GalereaList } from "./components/GalereaList.jsx"
import { PravilaList } from "./components/PravilaList.jsx";
import { BronList } from "./components/BronList.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FitList />,
  },
  {
    path: "/zal",
    element: <ZalList />,
  },
  {
    path: "/uslugi",
    element: <UslugiList />,
  },
  {
    path: "/galerea",
    element: <GalereaList />,
  },
  {
    path: "/pravila",
    element: <PravilaList />,
  },
  {
    path: "/bron",
    element: <BronList />,
  },
]);


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
