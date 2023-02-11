import './notFound.css'
import {BiError} from  'react-icons/bi' 
import { Link } from 'react-router-dom'
function NotFound() {
  return (
    <div>
        <div className="error_content">
        <p><BiError/></p> 
        <h1>Erreur 404</h1>
        <h2>La page que vous demandez n'existe pas</h2>
        <Link className='button' to={'/'}>
      Retour a l'accueil
        </Link>
        </div>
      
    </div>
  )
}

export default NotFound