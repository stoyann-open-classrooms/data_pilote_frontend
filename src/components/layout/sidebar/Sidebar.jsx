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
       <Link to={'/19031985'}><img className='logo' src={logo} alt="" /></Link> 
           {/* <img src={logo} alt="Logo je pilote ma boite" /> */}
           <ul>
            
            <li> <Link to={'/19031985'}> <BsFileBarGraphFill className='ic'/>Rapport</Link></li>
            <li>  <Link to={'/19031985/links'}> <CiLink className='ic'/> Liens</Link></li>
            {/* <li> <Link to={'/tables'}> <AiOutlineTable className='ic'/> Tableaux</Link></li> */}
            <li> <Link to={'/19031985/new-table'}>  <AiFillPlusCircle className='ic'/>Ajouter</Link></li>
            <li> <Link to={'/19031985/about'}><HiDocumentMagnifyingGlass className='ic'/>Infos</Link></li>
        </ul>
            
    </nav>
  )
}

export default Sidebar