import './sidebar.css'
import logo from '../../../image/logo_jpmb.PNG'
import { Link } from 'react-router-dom'
import {BsFileBarGraphFill} from 'react-icons/bs'
import {CiLink} from 'react-icons/ci'
import {AiOutlineTable} from 'react-icons/ai'



function Sidebar() {
  return (
    <nav className='sidenav'>
           {/* <img src={logo} alt="Logo je pilote ma boite" /> */}
           <ul>
            <li> <BsFileBarGraphFill className='ic'/> <Link to={'/'}>Power BI</Link></li>
            <li> <CiLink/> <Link to={'/links'}>Liens</Link></li>
            <li><AiOutlineTable/> <Link to={'/tables'}>Tableaux</Link></li>
            <li> <Link to={'/new-table'}>Nouveaux tableau</Link></li>
            <li> <Link to={'/about'}>A propos</Link></li>
        </ul>
            
    </nav>
  )
}

export default Sidebar