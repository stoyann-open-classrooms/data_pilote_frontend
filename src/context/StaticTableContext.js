import { createContext, useState, useEffect } from 'react'

const StaticTableContext = createContext()

export const StaticTableProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [staticTable, setStaticTable] = useState([])
  const [staticTableEdit, setStaticTableEdit] = useState({
    item: {},
    edit: false,
  })

  useEffect(() => {
    fetchStaticTable()
  }, [])

  // Fetch static tables
  const fetchStaticTable = async () => {
    const response = await fetch( process.env.REACT_APP_BASE_URL + `/static_tables`)
    const data = await response.json()

    setStaticTable(data)
    setIsLoading(false)
  }

  // Add static table
  const addStaticTable = async (newStaticTable) => {
    const response = await fetch( process.env.REACT_APP_BASE_URL + '/static_tables', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newStaticTable),
    })

    const data = await response.json()

    setStaticTable([data, ...staticTable])
  }

  // Delete staticTable
  const deleteStaticTable = async (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      await fetch( process.env.REACT_APP_BASE_URL + `/static_tables/${id}`, { method: 'DELETE' })

      window.location.reload();
      setStaticTable(staticTable.filter((item) => item.id !== id))
    }
  }

  // Update feedback item
  const updateStaticTable = async (id, updItem) => {
    const response = await fetch( process.env.REACT_APP_BASE_URL + `/static_tables/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updItem),
    })

    const data = await response.json()

    // NOTE: no need to spread data and item
    setStaticTable(staticTable.map((item) => (item.id === id ? data : item)))

    
   
    setStaticTable({
      item: {},
      edit: false,
    })
  }

  // Set item to be updated
  const editStaticTable = (item) => {
    setStaticTable({
      item,
      edit: true,
    })
  }

  return (
    <StaticTableContext.Provider
      value={{
        staticTable,
        staticTableEdit,
        fetchStaticTable,
        isLoading,
        deleteStaticTable,
        addStaticTable,
        editStaticTable,
        updateStaticTable
      }}
    >
      {children}
    </StaticTableContext.Provider>
  )
}

export default StaticTableContext
