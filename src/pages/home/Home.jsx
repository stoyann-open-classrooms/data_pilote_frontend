import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../../components/layout/sidebar/Sidebar'
import logo from '../../image/Fichier 4.svg'
function Home() {

  return (
    <>
        <section className='heading'>
           <h1 className='logo-jpmb'>JE PILOTE <span>MA BOITE</span></h1>
       
             <p>Merci de choisir une option ci-dessous</p>
        </section>
        <a href="https://app.powerbi.com/view?r=eyJrIjoiODg4ODAyYTQtMDEyOS00NTAxLThjYWMtZmFmODc4MTQ5NGY4IiwidCI6ImI0Mjk1ZmNmLTk3MmItNDFjMC05OGYzLTNkNzU4NmIyZTdkYiIsImMiOjEwfQ%3D%3D">
          <button className='btn btn-block'>
         Voir le rapport
        </button>
        </a>
           <Link className='btn btn-block' to={'/19031985/links'}>Gerer les Liens</Link>
            {/* <li> <Link to={'/tables'}> Tableaux</Link></li> */}
          <Link className='btn btn-block' to={'/19031985/new-table'}>Nouveau tableau de données</Link>
          <Link className='btn btn-block' to={'/19031985/about'}>Infos</Link>
        
  
    </>

  )
}

export default Home