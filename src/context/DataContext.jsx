import { createContext, useState } from "react"

export const DataContext = createContext()

const dataFixed = []

const DataProvider = ({ children }) => {

    const [list, setList] = useState(dataFixed)

    return(
        <DataContext.Provider value={{list, setList}}>
            { children }
        </DataContext.Provider>
    )
}

export default DataProvider