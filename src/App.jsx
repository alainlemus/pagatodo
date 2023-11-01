import './App.css'
import { Home } from './pages/Home' 
import DataProvider from './context/DataContext'

function App() {

  return (
    <>
      <DataProvider>
        <Home></Home>
      </DataProvider>
    </>
  )
}

export default App
