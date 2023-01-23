import {useEffect, useContext} from 'react'
import Spinner from '../../components/shared/spinner/Spinner'
import HorodatedTableContext from '../../context/table/horodatedTables/horodatedTableContext'



function Tables() {

  const {horodatedTables, loading , fetchHorodatedTables} = useContext(HorodatedTableContext)

  
  useEffect(() => {
    fetchHorodatedTables()    
  },[])


  


  



if(!loading ){
  return (
    <div>
      <h1>Connecter vos données au tableau de reporting</h1>

      <h2>Tableaux horodatés</h2>
      
      <div className='table-container'>


        {horodatedTables.map((horodated) => (
          <h3 className='table-title' key={horodated._id}>{horodated.title}</h3>
        ))}
        </div>
        <h2>Tableaux Statiques</h2>
        <div className='table-container'>


{/* {staticTables.map((table) => (
  <h3 className='table-title'>{table.title}</h3>
))} */}

<p>Tarif unique pour l'intégration d'un tableau de données dans votre Power BI : 9000XPf </p>

</div>
    </div>
  )
} else {
  return <Spinner/>
}
 
}

export default Tables