
import './App.css'
import Navbar from '../components/navbar/navbar'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'

function App() {
const greeting = "Bienvenidos"

  return (
    <>
      <Navbar />
      <ItemListContainer greeting={greeting} />
    </>
  )
}

export default App
