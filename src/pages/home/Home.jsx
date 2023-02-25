import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../../components/layout/sidebar/Sidebar'
import logo from '../../image/Fichier 4.svg'
function Home() {

  return (
    <>
        <section className='heading'>
           <h1 className='logo-jpmb'>JE PILOTE <span>MA BOITE</span></h1>
             <h1>Bienvenue sur Datapilote</h1>
             <p>Merci de choisir une option ci-dessous</p>
        </section>
        <a href="https://app.powerbi.com/reportEmbed?reportId=b9af4049-08ee-4dcf-8dee-5f5fb82f1fb0&autoAuth=true&ctid=b4295fcf-972b-41c0-98f3-3d7586b2e7db">
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