import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Button from "../shared/button/Button";
import { useNavigate } from "react-router-dom";

function NewStaticTable() {
  const navigate = useNavigate()
  const [staticTable, setStaticTable] = useState({
    title: "",
    description: "",
    champ1: "",
    champ2: "",
    champ3: "",
    champ4: "",
    champ5: "",
    champ6: "",
  });
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const handleForm = (e) => {
    e.preventDefault();
    if (!staticTable.title) {
      toast.error("Votre tableau doit obligatoirement avoir un titre");
    }
    if(!staticTable.champ1) {
      toast.error("Votre tableau doit être composée de 2 colonne minimum");
    }
    if(!staticTable.champ2) {
      toast.error("Votre tableau doit être composée de 2 colonne minimum");
    } else {

      createNewStaticTable(staticTable);
      navigate(`/19031985/links`)
    }
  };

  const handleInput = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setStaticTable({
      ...staticTable,
      [name]: value,
    });
  };
  const createNewStaticTable = async (data) => {
    const response = await axios
      .post(process.env.REACT_APP_BASE_URL + "/static_tables", data)
      .then((res) => {
        // Work with the response...
        toast.success(
          `Le tableau statique : ${data.title} à étè créer avec succées`
        );
      })
      .catch((err) => {
        // Handle error
        toast.error(
          `Une erreur c'est produite impossible de créer le tableau  ${err}`
        );
        console.log(err);
      });
      
    return response.data;

  };


  return (
    <>
      <h3>Créer un nouveaux tableau statique</h3>
      <form onSubmit={handleForm} className="form-modal">
       
        <input
        className="form-control"
          type="text"
          placeholder="Titre du tableau"
          name="title"
          value={staticTable.title}
          onChange={handleInput}
        />
     

        <textarea
          type="text"
          className="form-control"
          placeholder="description"
          name="description"
          value={staticTable.description}
          onChange={handleInput}
          />
         

        <input
          type="text"
          placeholder="Titre de la colonne 1"
          name="champ1"
          value={staticTable.champ1}
          onChange={handleInput}
          />
         

        <input
          type="text"
          placeholder="Titre de la colonne 2"
          name="champ2"
          value={staticTable.champ2}
          onChange={handleInput}
          />
        

        <input
          type="text"
          placeholder="Titre de la colonne 3"
          name="champ3"
          value={staticTable.champ3}
          onChange={handleInput}
          />
        
        

        <input
          type="text"
          placeholder="Titre de la colonne 4"
          name="champ4"
          value={staticTable.champ4}
          onChange={handleInput}
          />
      
         

        <input
          type="text"
          placeholder="Titre de la colonne 5"
          name="champ5"
          value={staticTable.champ5}
          onChange={handleInput}
          />
      
       
        <input
          type="text"
          
          placeholder="Titre de la colonne 6"
          name="champ6"
          value={staticTable.champ6}
          onChange={handleInput}
          />
        
        

          <Button type='submit' version= 'secondary'>Créer le tableau</Button>
         
      </form>
    </>
  );
}

export default NewStaticTable;
