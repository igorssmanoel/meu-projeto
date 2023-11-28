
import {

  RouterProvider
} from "react-router-dom";
import MenuHeader from "./Components/MenuHeader/MenuHeader";

import "./index.css"
import router from "./routes/router";
import Footer from "./Components/Footer/Footer";



function App() {
  return (
    <div className="container">
      <MenuHeader />
      <div className="pages-container">
        <RouterProvider className="pages-container" router={router} />
      </div>

      <Footer />
    </div>
  )
}

export default App
