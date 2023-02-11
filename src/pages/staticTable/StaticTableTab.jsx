import axios from "axios";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import Dialog from "../../components/shared/modal/Dialog";
import StaticLineContext from "../../context/StaticLineContext";

function StaticTableTab({ table }) {
  const { deleteStaticLine ,  updateStaticLine, } = useContext(StaticLineContext);


  const [updatedLine, setUpdatedLine] = useState({

  });


  const handleInput = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setUpdatedLine({
      ...updatedLine,
      [name]: value,
    });
  };




  return (
    <table>
      <tr>
        {table.champ1 ? <th>{table.champ1}</th> : ""}
        {table.champ2 ? <th>{table.champ2}</th> : ""}
        {table.champ3 ? <th>{table.champ3}</th> : ""}
        {table.champ4 ? <th>{table.champ4}</th> : ""}
        {table.champ5 ? <th>{table.champ5}</th> : ""}
        {table.champ6 ? <th>{table.champ6}</th> : ""}
        <th>Actions</th>
      </tr>

      <>
        {table.staticLines.map((line) => (
          <tr>
            {line.champs1 ? (
              <td
                className={`table-title ${line.champs1 === "" && "warning"} `}
              >
                {line.champs1}
              </td>
            ) : (
              ""
            )}
            {line.champs2 ? (
              <td
                className={`table-title ${line.champs2 === "" && "warning"} `}
              >
                {line.champs2}
              </td>
            ) : (
              ""
            )}
            {line.champs3 ? (
              <td
                className={`table-title ${line.champs3 === "" && "warning"} `}
              >
                {line.champs3}
              </td>
            ) : (
              ""
            )}
            {line.champs4 ? (
              <td
                className={`table-title ${line.champs4 === "" && "warning"} `}
              >
                {line.champs4}
              </td>
            ) : (
              ""
            )}
            {line.champs5 ? (
              <td
                className={`table-title ${line.champs5 === "" && "warning"} `}
              >
                {line.champs5}
              </td>
            ) : (
              ""
            )}
            {line.champs6 ? (
              <td
                className={`table-title ${line.champs6 === "" && "warning"} `}
              >
                {line.champs6}
              </td>
            ) : (
              ""
            )}

            <td className="table-title">
              <button
                onClick={() => deleteStaticLine(line.id)}
                className="btn delete-btn"
              >
                Supprimer
              </button>

              <Dialog btn={"Modifier"}>
                <h2>Modifier l'entrée</h2>
                <form  onSubmit={() => updateStaticLine(line.id, updatedLine) }  className="form-modal">
                  {line.champs1 ? (
                    <input
                    
                    type="text" 
                    name="champs1"
                    value={updatedLine.champs1}
                    onChange={handleInput}
                    
                    placeholder={line.champs1} />
                  ) : (
                    ""
                  )}
                  {line.champs2 ? (
                    <input type="text"
                    name="champs2"
                    value={updatedLine.champs2}
                    onChange={handleInput}
                    
                    placeholder={line.champs2} />
                  ) : (
                    ""
                  )}
                  {line.champs3 ? (
                    <input type="text"
                    name="champs3"
                    value={updatedLine.champs3}
                    onChange={handleInput}
                    
                    placeholder={line.champs3} />
                  ) : (
                    ""
                  )}
                  {line.champs4 ? (
                    <input type="text"
                    name="champs4"
                    value={updatedLine.champs4}
                    onChange={handleInput}
                    
                    placeholder={line.champs4} />
                  ) : (
                    ""
                  )}
                  {line.champs5 ? (
                    <input type="text"
                    name="champs5"
                    value={updatedLine.champs5}
                    onChange={handleInput}
                    
                    placeholder={line.champs5} />
                  ) : (
                    ""
                  )}
                  {line.champs6 ? (
                    <input type="text" 
                    name="champs6"
                    value={updatedLine.champs6}
                    onChange={handleInput}
                    
                    placeholder={line.champs6} />
                  ) : (
                    ""
                  )}
                  <button className="btn" type="submit">Valider</button>
                </form>
              </Dialog>
            </td>
          </tr>
        ))}
      </>
    </table>
  );
}

export default StaticTableTab;
