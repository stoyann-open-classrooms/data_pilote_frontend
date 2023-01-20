import './table.css'
import {BiInfoCircle} from 'react-icons/bi'
function NewTable() {



  return (
    <div>
        <h1>Créer un nouveaux tableau de donées</h1>
        <div className="btn-container">
            <button>Tableau statique</button>
            <button>Tableau dynamique</button>
        </div>
        <div className='text_container'>
          <p className='icone'><BiInfoCircle/></p>
<p>Les tableaux horodatés et statiques sont des outils utiles pour organiser et afficher vos données. </p>
       <p>La principale différence entre les deux est que les tableaux horodatés contiennent obligatoirement une date. Ces tableaux peuvent contenir autant de lignes que vous le souhaiter.</p>
        <p>En revanche les tableaux statiques ne sont pas obligatoirement datés mais ne peuvent contenir qu'une seule ligne.</p>
        <p> Les tableaux dynamiques sont idéaux pour les données qui doivent être mises à jour régulièrement, tandis que les tableaux statiques conviennent mieux aux données qui ne changent pas souvent.</p>
          <p>Tous les tableaux sont limités a 6 champs (colones)</p>
        </div>
       
    </div>
  )
}

export default NewTable