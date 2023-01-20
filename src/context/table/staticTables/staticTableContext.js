import { createContext , useState } from "react";


const StaticTableContext = createContext()

const staticTableUrl = "http://localhost:5550/data-pilote/api/v1/static_tables/"




export const StaticTableProvider = ({children}) => {
    const [staticTables, setStaticTables] = useState({})
    const [loading, setLoading] = useState(true)

    const fetchStaticTables = async () => {
        const response = await fetch(staticTableUrl)
        const tables = await response.json()
        
        setStaticTables(tables)
      
        setLoading(false)
        
      }


      return <StaticTableContext.Provider value={{staticTables, loading, fetchStaticTables}}>

        {children}
      </StaticTableContext.Provider>
}

export default  StaticTableContext