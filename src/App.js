import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/layout/footer/Footer";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Links from "./pages/links/Links";
import NewTable from "./pages/newTable/NewTable";
import NotFound from "./pages/notFound/NotFound";
import { HorodatedTableProvider } from "./context/table/horodatedTables/horodatedTableContext";
import { StaticTableProvider } from "./context/table/staticTables/staticTableContext";
import Sidebar from "./components/layout/sidebar/Sidebar";
import Pluviometrie from "./pages/pluviometrie/Pluviometrie";
import ScrollToTop from "./components/ScrollToTop.";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StaticTable from "./pages/staticTable/StaticTable";
import HorodatedTable from "./pages/horodatedTable/HorodatedTable";
function App() {
  return (
    <HorodatedTableProvider>
      <StaticTableProvider>
        <Router>
          <ScrollToTop />

          <div className="container">
            <Sidebar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
             
                <Route path="/new-table" element={<NewTable />} />
                <Route path="/links" element={<Links />} />
                <Route path="/static-table/:id" element={<StaticTable />} />
                <Route
                  path="/horodated-table/:id"
                  element={<HorodatedTable />}
                />

                <Route
                  path="/pluviometrie/637a3694e5fc335f796a4141"
                  element={<Pluviometrie />}
                />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
        <ToastContainer />
      </StaticTableProvider>
    </HorodatedTableProvider>
  );
}

export default App;
