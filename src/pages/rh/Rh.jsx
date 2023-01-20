import {useEffect , useState} from 'react'

function Rh() {
    const [loading, setLoading] = useState(true)
    const [table, setTable] = useState({})
    useEffect(() => {
        fetchHorodatedRhTables()
  
      },[])
    
    const fetchHorodatedRhTables = async () => {
      const response = await fetch('http://localhost:5550/data-pilote/api/v1/horodated_tables/637a3694e5fc335f796a4141')
      const data = await response.json()
      setTable(data.data);
      setLoading(false)
    }

    if(!loading) {
        return (
            <div>
                <h1>Tableau {table.title}</h1>
                <table>
          <tr>
            <th>{table.date}</th>
            <th>{table.champs1}</th>
            <th>{table.champs2}</th>
            <th>{table.champs3}</th>
          </tr>
          {table.horodatedLines.map((table) => (
            <tr>
              <td className="table-title"> {new Date(table.date).toLocaleDateString() }</td>
              <td className="table-title">{table.champs1}</td>
              <td className="table-title">{table.champs2}</td>
              <td className="table-title">{table.champs3}</td>
            </tr>
          ))}
        </table>
            </div>
          )
    } else {
        return <h1>LOADING...</h1>
    }
 
}

export default Rh