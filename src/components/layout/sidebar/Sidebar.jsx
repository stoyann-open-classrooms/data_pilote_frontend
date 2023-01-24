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
       <Link to={'/'}><img className='logo' src={logo} alt="" /></Link> 
           {/* <img src={logo} alt="Logo je pilote ma boite" /> */}
           <ul>
            
            <li> <Link to={'/'}> <BsFileBarGraphFill className='ic'/>Rapport</Link></li>
            <li>  <Link to={'/links'}> <CiLink className='ic'/> Liens</Link></li>
            {/* <li> <Link to={'/tables'}> <AiOutlineTable className='ic'/> Tableaux</Link></li> */}
            <li> <Link to={'/new-table'}>  <AiFillPlusCircle className='ic'/>Ajouter</Link></li>
            <li> <Link to={'/about'}><HiDocumentMagnifyingGlass className='ic'/>Infos</Link></li>
        </ul>
            
    </nav>
  )
}

export default Sidebar