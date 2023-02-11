import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import Card from "../shared/card/Card";
import { FaCalendarPlus, FaCalendarCheck } from "react-icons/fa";
import { BiTable, BiLink } from "react-icons/bi";

import { toast } from "react-toastify";
import Dialog from "../shared/modal/Dialog";

export default function LinkItem({
  item,
  horodated,
  deleteHorodatedTable,
  deleteStaticTable,
  updateStaticTable,
  updateHorodatedTable,
}) {
  const [updatedTable, setUpdatedTable] = useState({
    title: item.title,
    description: item.description,
    champ1: item.champ1,
    champ2: item.champ2,
    champ3: item.champ3,
    champ4: item.champ4,
    champ5: item.champ5,
    champ6: item.champ6,
  });

  const onCopy = () => {
    toast.success("lien copiée dans le press papier");
  };

  const handleInput = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setUpdatedTable({
      ...updatedTable,
      [name]: value,
    });
  };






  


  return (
    <Card horodated={horodated}>
      <h3>{item.title}</h3>
      <div className="details">
        <p>
          <FaCalendarPlus />
          <span>{new Date(item.createdAt).toLocaleDateString()}</span>{" "}
        </p>
        <p>
          <FaCalendarCheck />
          <span>{new Date(item.updatedAt).toLocaleDateString()}</span>{" "}
        </p>
        <p>
          {" "}
          <BiTable /> <span> {item.tableType}</span>{" "}
        </p>
      </div>

      <div className="btn-container-link">
        {item.tableType === "Horodaté" ? (
          <>
            <button className=" btn delete-btn" onClick={() => deleteHorodatedTable(item.id)}>
              Supprimer
            </button>
            <Dialog btn={"Modifier"}>
              <h2>Modifier le tableau</h2>
              
              <form onSubmit={() => updateHorodatedTable(item.id , updatedTable)} className="form-modal">
                <input
                  type="text"
                  name="title"
                  value={updatedTable.title}
                  onChange={handleInput}
                  placeholder={item.title ? item.title : "Titre du tableau"}
                />
                <textarea
                  name="description"
                  value={updatedTable.description}
                  onChange={handleInput}
                  placeholder={
                    item.description
                      ? item.description
                      : "Description du tableau"
                  }
                ></textarea>
                <input
                  type="text"
                  name="champ1"
                  value={updatedTable.champ1}
                  onChange={handleInput}
                  placeholder={
                    item.champ1 ? item.champ1 : "titre de la colonne"
                  }
                />
                <input
                  type="text"
                  name="champ2"
                  value={updatedTable.champ2}
                  onChange={handleInput}
                  placeholder={
                    item.champ2 ? item.champ2 : "titre de la colonne"
                  }
                />
                <input
                  type="text"
                  name="champ3"
                  value={updatedTable.champ3}
                  onChange={handleInput}
                  placeholder={
                    item.champ3 ? item.champ3 : "titre de la colonne"
                  }
                />
                <input
                  type="text"
                  name="champ4"
                  value={updatedTable.champ4}
                  onChange={handleInput}
                  placeholder={
                    item.champ4 ? item.champ4 : "titre de la colonne"
                  }
                />
                <input
                  type="text"
                  name="champ5"
                  value={updatedTable.champ5}
                  onChange={handleInput}
                  placeholder={
                    item.champ5 ? item.champ5 : "titre de la colonne"
                  }
                />
                <input
                  type="text"
                  name="champ6"
                  value={updatedTable.champ6}
                  onChange={handleInput}
                  placeholder={
                    item.champ6 ? item.champ6 : "titre de la colonne"
                  }
                />
                <button className="btn btn-secondary">Modifier</button>
              </form>
            </Dialog>
          </>
        ) : (
          <>
            <button className=" btn delete-btn" onClick={() => deleteStaticTable(item.id)}>
              Supprimer
            </button>
            <Dialog btn={"Modifier"}>
              <form
                action=""
                className="form-modal"
                onSubmit={() =>  updateStaticTable(item.id , updatedTable)}
              >
                <input
                  type="text"
                  name="title"
                  value={updatedTable.title}
                  onChange={handleInput}
                  placeholder={item.title ? item.title : "Titre du tableau"}
                />
                <textarea
                  name="description"
                  value={updatedTable.description}
                  onChange={handleInput}
                  placeholder={
                    item.description
                      ? item.description
                      : "Description du tableau"
                  }
                ></textarea>
                <input
                  type="text"
                  name="champ1"
                  value={updatedTable.champ1}
                  onChange={handleInput}
                  placeholder={
                    item.champ1 ? item.champ1 : "titre de la colonne"
                  }
                />
                <input
                  type="text"
                  name="champ2"
                  value={updatedTable.champ2}
                  onChange={handleInput}
                  placeholder={
                    item.champ2 ? item.champ2 : "titre de la colonne"
                  }
                />
                <input
                  type="text"
                  name="champ3"
                  value={updatedTable.champ3}
                  onChange={handleInput}
                  placeholder={
                    item.champ3 ? item.champ3 : "titre de la colonne"
                  }
                />
                <input
                  type="text"
                  name="champ4"
                  value={updatedTable.champ4}
                  onChange={handleInput}
                  placeholder={
                    item.champ4 ? item.champ4 : "titre de la colonne"
                  }
                />
                <input
                  type="text"
                  name="champ5"
                  value={updatedTable.champ5}
                  onChange={handleInput}
                  placeholder={
                    item.champ5 ? item.champ5 : "titre de la colonne"
                  }
                />
                <input
                  type="text"
                  name="champ6"
                  value={updatedTable.champ6}
                  onChange={handleInput}
                  placeholder={
                    item.champ6 ? item.champ6 : "titre de la colonne"
                  }
                />
                
                
                <button  className="btn btn-secondary">Modifier</button>
              </form>
            </Dialog>
          </>
        )}
      </div>

      <CopyToClipboard text={item.link}>
        <button className="copy-link-btn" onClick={onCopy}>
          {" "}
          <BiLink className="copy-icone" /> Copier le lien
        </button>
      </CopyToClipboard>
    </Card>
  );
}
