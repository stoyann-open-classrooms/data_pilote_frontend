import './sidebar.css'
import logo from '../../../image/logo_jpmb.PNG'
import { Link } from 'react-router-dom'
import {BsFileBarGraphFill} from 'react-icons/bs'
import {CiLink} from 'react-icons/ci'
import {AiOutlineTable, AiFillPlusCircle} from 'react-icons/ai'
import {HiDocumentMagnifyingGlass} from 'react-icons/hi2'




function Sidebar() {
  return (
    <nav className='sidenav'>
           {/* <img src={logo} alt="Logo je pilote ma boite" /> */}
           <ul>
            <li> <Link to={'/'}> <BsFileBarGraphFill className='ic'/>Power BI</Link></li>
            <li>  <Link to={'/links'}> <CiLink/> Liens</Link></li>
            <li> <Link to={'/tables'}> <AiOutlineTable/> Tableaux</Link></li>
            <li> <Link to={'/new-table'}>  <AiFillPlusCircle/>Ajouter</Link></li>
            <li> <Link to={'/about'}><HiDocumentMagnifyingGlass/>Documentation</Link></li>
        </ul>
            
    </nav>
  )
}

export default Sidebar