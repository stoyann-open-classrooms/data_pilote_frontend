import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AiOutlineReload, AiTwotoneDelete } from "react-icons/ai";
import Spinner from "../../components/shared/spinner/Spinner";
import Dialog from "../../components/shared/modal/Dialog";
import axios from "axios";
import { toast } from "react-toastify";
import HorodatedLineContext from "../../context/HorodateLineContext";



function HorodatedTable() {
  const params = useParams();
  const [table, setTable] = useState({});

  const { deleteHorodatedLine ,  updateHorodatedLine, } = useContext(HorodatedLineContext);


  const [updatedLine, setUpdatedLine] = useState({

  });


  const handleInputLine = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setUpdatedLine({
      ...updatedLine,
      [name]: value,
    });
  };




  const [entry, setEntry] = useState({
    horodatedTable: params.id,
    date: "",
    champs1: "",
    champs2: "",
    champs3: "",
    champs4: "",
    champs5: "",
    champs6: "",
  });

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchHorodatedTable();
  }, []);

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
    createEntry(entry);
  };

  const createEntry = async (data) => {
    const response = await axios
      .post("http://localhost:5550/data-pilote/api/v1/horodated_lines", data)
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

  const fetchHorodatedTable = async () => {
    const response = await fetch(
      `http://localhost:5550/data-pilote/api/v1/horodated_tables/${params.id}`
    );
    const data = await response.json();
    setTable(data.data);
    console.log(table);
    setLoading(false);
  };
  if (!loading) {
    return (
      <>
        <div className="table-page-container">
          <div className="table-page-hero">
            <div className="table-page-hero-text">
              <h1>
                {" "}
                Tableau {table.tableType} : {table.title}
              </h1>
              <p>{table.description}</p>
            </div>
            <div className="table-page-hero-btn">
              <Dialog btn={"Nouvelle entrée"}>
                <h3>Nouvelle entrée</h3>

                <form onSubmit={handleForm} className="add-entry" action="">
                  <input
                    type="date"
                    onChange={handleInput}
                    name="date"
                    value={entry.date}
                  />
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
              </Dialog>
            </div>
          </div>

          <table>
            <tr>
              {table.date ? <th>{table.date}</th> : ""}
              {table.champ1 ? <th>{table.champ1}</th> : ""}
              {table.champ2 ? <th>{table.champ2}</th> : ""}
              {table.champ3 ? <th>{table.champ3}</th> : ""}
              {table.champ4 ? <th>{table.champ4}</th> : ""}
              {table.champ5 ? <th>{table.champ5}</th> : ""}
              {table.champ6 ? <th>{table.champ6}</th> : ""}
              <th>Actions</th>
            </tr>

            <>
              {table.horodatedLines.map((line) => (
                <tr>
                  {line.date ? (
                    <td
                      className={`table-title ${
                        line.date === "" && "warning"
                      } `}
                    >
                      {new Date(line.date).toLocaleDateString()}
                    </td>
                  ) : (
                    ""
                  )}
                  {line.champs1 ? (
                    <td
                      className={`table-title ${
                        line.champs1 === "" && "warning"
                      } `}
                    >
                      {line.champs1}
                    </td>
                  ) : (
                    ""
                  )}
                  {line.champs2 ? (
                    <td
                      className={`table-title ${
                        line.champs2 === "" && "warning"
                      } `}
                    >
                      {line.champs2}
                    </td>
                  ) : (
                    ""
                  )}
                  {line.champs3 ? (
                    <td
                      className={`table-title ${
                        line.champs3 === "" && "warning"
                      } `}
                    >
                      {line.champs3}
                    </td>
                  ) : (
                    ""
                  )}
                  {line.champs4 ? (
                    <td
                      className={`table-title ${
                        line.champs4 === "" && "warning"
                      } `}
                    >
                      {line.champs4}
                    </td>
                  ) : (
                    ""
                  )}
                  {line.champs5 ? (
                    <td
                      className={`table-title ${
                        line.champs5 === "" && "warning"
                      } `}
                    >
                      {line.champs5}
                    </td>
                  ) : (
                    ""
                  )}
                  {line.champs6 ? (
                    <td
                      className={`table-title ${
                        line.champs6 === "" && "warning"
                      } `}
                    >
                      {line.champs6}
                    </td>
                  ) : (
                    ""
                  )}

                  <td className="table-title">
                    <button
                      onClick={() => deleteHorodatedLine(line.id)}
                      className="btn delete-btn"
                    >
                      Supprimer
                      <AiTwotoneDelete className="btn-ic" />
                    </button>
                    <Dialog btn={"Modifier"}>
                      <h2>Modifier l'entrée</h2>
                      <form onSubmit={() => updateHorodatedLine(line.id , updatedLine)} className="form-modal">
                        <input type="date" name="date" value={line.date} onChange={handleInputLine}  />
                        
                        
                        {line.champs1 ? (
                          <input 
                          type="text" 
                          name="champs1"
                          value={updatedLine.champs1}
                          onChange={handleInputLine}
                          placeholder={line.champs1} />
                          
                         
                        ) : (
                          ""
                        )}
                        {line.champs2 ? (
                          <input 
                          type="text" 
                          name="champs2"
                          value={updatedLine.champs2}
                          onChange={handleInputLine}
                          placeholder={line.champs2} />
                          
                        ) : (
                          ""
                        )}
                        {line.champs3 ? (
                          <input type="text"
                          name="champs3"
                          value={updatedLine.champs3}
                          onChange={handleInputLine}
                          placeholder={line.champs3} />
                        ) : (
                          ""
                        )}
                        {line.champs4 ? (
                          <input type="text"
                          name="champs4"
                          value={updatedLine.champs4}
                          onChange={handleInputLine}
                          placeholder={line.champs4} />
                          
                        ) : (
                          ""
                        )}
                        {line.champs5 ? (
                          <input type="text"
                          name="champs5"
                          value={updatedLine.champs5}
                          onChange={handleInputLine}
                          placeholder={line.champs5} />
                          
                        ) : (
                          ""
                        )}
                        {line.champs6 ? (
                          <input type="text"

                          name="champs6"
                          value={updatedLine.champs6}
                          onChange={handleInputLine}
                          placeholder={line.champs6} />

                        ) : (
                          ""
                        )}
                        <button type="submit" className="btn">valider</button>
                      </form>

                    </Dialog>
                  </td>
                </tr>
              ))}
            </>
          </table>
        </div>
      </>
    );
  } else {
    return <Spinner />;
  }
}

export default HorodatedTable;
