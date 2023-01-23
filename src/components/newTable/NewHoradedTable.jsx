import React from 'react'

function NewHoradedTable() {
  return (
    <>
    <h3>Créer un nouveaux tableau horodaté</h3>
    
      <form className='form-modal' action="">
        <input type="text" placeholder='Titre du tableau' />
        <input type="text" placeholder='Titre de la colonne 1' />
        <input type="text" placeholder='Titre de la colonne 2' />
        <input type="text" placeholder='Titre de la colonne 3' />
        <input type="text" placeholder='Titre de la colonne 4' />
        <input type="text" placeholder='Titre de la colonne 5' />
        <input type="text" placeholder='Titre de la colonne 6' />
        <button className='btn-submit' type='submit'> Créer le tableau</button>
      </form>
   
    </>
  )
}

export default NewHoradedTable