import {BrowserRouter as Router ,  Routes, Route} from 'react-router-dom'
import Footer from './components/layout/footer/Footer';
import Navbar from './components/layout/navar/Navbar';
import About from './pages/about/About';
import BudgetHeuresCHS from './pages/budgetHeuresChs/BudgetHeuresCHS';
import Home from './pages/home/Home';
import Links from './pages/links/Links';
import NewTable from './pages/newTable/NewTable';
import NotFound from './pages/notFound/NotFound';
import Objectifs from './pages/objectifs/Objectifs';
import Rh from './pages/rh/Rh';
import Tables from './pages/tables/Tables';
import { HorodatedTableProvider } from './context/table/horodatedTables/horodatedTableContext';
import { StaticTableProvider } from './context/table/staticTables/staticTableContext';
import Sidebar from './components/layout/sidebar/Sidebar';
import Pluviometrie from './pages/pluviometrie/Pluviometrie';
import ScrollToTop from './components/ScrollToTop.';
function App() {
  return (
    <HorodatedTableProvider>
      <StaticTableProvider>
    <Router>
    <ScrollToTop/>

       <div className='container'>
       <Sidebar/>
        <main>
           <Routes>
             <Route path='/' element={<Home/>} />
             <Route path='/about' element={<About/>} />
             <Route path='/tables' element={<Tables/>} />
             <Route path='/new-table' element={<NewTable/>} />
             <Route path='/links' element={<Links/>} />
             <Route path='/objectifs/637a3694e5fc335f796a4140' element={<Objectifs/>} />
             <Route path='/budget_heures_CHS/637a3694e5fc335f796a4860' element={<BudgetHeuresCHS/>} />
             <Route path='/rh/637a3694e5fc335f796a4141' element={<Rh/>} />
             <Route path='/pluviometrie/637a3694e5fc335f796a4141' element={<Pluviometrie/>} />
             <Route path='/*' element={<NotFound/>} />
           </Routes>
        </main>
        <Footer/>
       </div>
    </Router>
    </StaticTableProvider>
    </HorodatedTableProvider>
  );
}

export default App;
