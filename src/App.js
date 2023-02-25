import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/layout/footer/Footer";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Links from "./pages/links/Links";
import NewTable from "./pages/newTable/NewTable";
import NotFound from "./pages/notFound/NotFound";

import Pluviometrie from "./pages/pluviometrie/Pluviometrie";
import ScrollToTop from "./components/ScrollToTop.";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StaticTable from "./pages/staticTable/StaticTable";
import HorodatedTable from "./pages/horodatedTable/HorodatedTable";
import HorodatedTableContext from "./context/HorodatedTableContext";
import StaticTableContext from "./context/StaticTableContext";

function App() {
  return (
<>
        <Router>
          <ScrollToTop />

          <main className="container">
            {/* <Sidebar /> */}

            <Routes>
              <Route path="/19031985" element={<Home />} />
              <Route path="/19031985/about" element={<About />} />

              <Route path="/19031985/new-table" element={<NewTable />} />
              <Route path="/19031985/links" element={<Links />} />
              <Route path="/Statique/:id" element={<StaticTable />} />
              <Route path="/Horodaté/:id" element={<HorodatedTable />} />

              <Route
                path="/pluviometrie/637a3694e5fc335f796a4141"
                element={<Pluviometrie />}
                />
              <Route path="/*" element={<NotFound />} />
            </Routes>
            <Routes></Routes>

            <Footer />
          </main>
        </Router>
        <ToastContainer />
   
                </>
  );
}

export default App;
