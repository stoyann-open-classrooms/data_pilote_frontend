import { Link } from 'react-router-dom'
import './navbar.css'
import {BsFileBarGraphFill} from 'react-icons/bs'
import {CiLink} from 'react-icons/ci'
import {AiOutlineTable} from 'react-icons/ai'

function Navbar() {
  return (
    <header className='header'>
        <nav>

        <ul>
            <li> <BsFileBarGraphFill className='ic'/> <Link to={'/'}>Power BI</Link></li>
            <li> <CiLink/> <Link to={'/links'}>Liens</Link></li>
            <li><AiOutlineTable/> <Link to={'/tables'}>Tableaux</Link></li>
            <li> <Link to={'/new-table'}>Nouveaux tableau</Link></li>
            <li> <Link to={'/about'}>A propos</Link></li>
        </ul>
        </nav>
    </header>
  )
}

export default Navbar