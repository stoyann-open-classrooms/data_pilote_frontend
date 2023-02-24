import axios from 'axios';
import  { useState } from 'react'
import { toast } from 'react-toastify';

function AddStaticLineForm({table, tableId}) {

    const [entry, setEntry] = useState({
        staticTable: tableId,
        champs1: "",
        champs2: "",
        champs3: "",
        champs4: "",
        champs5: "",
        champs6: "",
      });
     
    const handleInput = ({ currentTarget }) => {
        const { name, value } = currentTarget;
        setEntry({
          ...entry,
          [name]: value,
        });
      };
    
      const handleForm = (e) => {
        e.preventDefault();
        console.log(entry);
      createEntry(entry)
        
      };
    
    
    
      const createEntry = async (data) => {
        const response = await axios

          .post(process.env.REACT_APP_BASE_URL + "/static_lines", data)
          .then((res) => {
            // Work with the response...
            toast.success(`La nouvelle entrée  à étè créer avec succées`);
            window.location.reload();
          })
          .catch((err) => {
            // Handle error
            toast.error(
              `Une erreur c'est produite impossible de créer l'entrée  ${err}`
            );
            console.log(err);
          });
    
        return response.data;
      };
    


  return (
    <form onSubmit={handleForm} className="add-entry" action="">
            {/* <input type="text" value={params.id}  /> */}
            {table.champ1 ? (
              <input
                type="text"
                placeholder={table.champ1}
                onChange={handleInput}
                name="champs1"
                value={entry.champs1}
              />
            ) : (
              ""
            )}
            {table.champ2 ? (
              <input
                type="text"
                placeholder={table.champ2}
                onChange={handleInput}
                name="champs2"
                value={entry.champs2}
              />
            ) : (
              ""
            )}
            {table.champ3 ? (
              <input
                type="text"
                placeholder={table.champ3}
                onChange={handleInput}
                name="champs3"
                value={entry.champs3}
              />
            ) : (
              ""
            )}
            {table.champ4 ? (
              <input
                type="text"
                placeholder={table.champ4}
                onChange={handleInput}
                name="champs4"
                value={entry.champs4}
              />
            ) : (
              ""
            )}
            {table.champ5 ? (
              <input
                type="text"
                placeholder={table.champ5}
                onChange={handleInput}
                name="champs5"
                value={entry.champs5}
              />
            ) : (
              ""
            )}
            {table.champ6 ? (
              <input
                type="text"
                placeholder={table.champ6}
                onChange={handleInput}
                name="champs6"
                value={entry.champs6}
              />
            ) : (
              ""
            )}

            <button type="submit" className="btn-submit">
              valider
            </button>
          </form>
  )
}

export default AddStaticLineForm