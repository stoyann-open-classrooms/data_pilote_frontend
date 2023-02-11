import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Button from "../shared/button/Button";

function NewHoradedTable() {
  const navigate = useNavigate()
  const [horodatedTable, setHorodatedTable] = useState({
    title: "",
    description: "",
    champ1: "",
    champ2: "",
    champ3: "",
    champ4: "",
    champ5: "",
    champ6: "",
  });

  const handleForm = (e) => {
    e.preventDefault();
    e.preventDefault();
    if (!horodatedTable.title) {
      toast.error("Votre tableau doit obligatoirement avoir un titre");
    }
    createNewHorodatedTable(horodatedTable);
  };

  const handleInput = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setHorodatedTable({
      ...horodatedTable,
      [name]: value,
    });
  };
  const createNewHorodatedTable = async (data) => {
    const response = await axios
      .post("http://localhost:5550/data-pilote/api/v1/horodated_tables", data)
      .then((res) => {
        // Work with the response...
        toast.success(
          `Le tableau Horodaté : ${data.title} à étè créer avec succées`
        );
        navigate(`/19031985/links`)

        
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
      <h3>Créer un nouveaux tableau horodaté</h3>

      <form onSubmit={handleForm} className="form-modal" action="">
   
        <input
          type="text"
          placeholder="Titre du tableau"
          name="title"
          value={horodatedTable.title}
          onChange={handleInput}
        />
        <textarea
          placeholder="Decription du tableau"
          name="description"
          value={horodatedTable.description}
          onChange={handleInput}
        >

        </textarea>
        <input
          type="text"
          placeholder="Titre de la colonne 1"
          onChange={handleInput}
          name="champ1"
          value={horodatedTable.champ1}
        />
        <input
          type="text"
          placeholder="Titre de la colonne 2"
          name="champ2"
          onChange={handleInput}
          value={horodatedTable.champ2}
        />
        <input
          type="text"
          placeholder="Titre de la colonne 3"
         
          onChange={handleInput}
          name="champ3"
          value={horodatedTable.champ3}
        />
        <input
          type="text"
          placeholder="Titre de la colonne 4"
         
          onChange={handleInput}
          name="champ4"
          value={horodatedTable.champ4}
        />
        <input
          type="text"
          placeholder="Titre de la colonne 5"
         
          onChange={handleInput}
          name="champ5"
          value={horodatedTable.champ5}
        />
        <input
          type="text"
          placeholder="Titre de la colonne 6"
         
          onChange={handleInput}
          name="champ6"
          value={horodatedTable.champ6}
        />
    
         
        <Button type='submit' version= 'secondary'>Créer le tableau</Button>
      </form>
    </>
  );
}

export default NewHoradedTable;
