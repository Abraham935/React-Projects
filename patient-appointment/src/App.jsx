import Header from "./components/Header"
import Formulario from "./components/Formulario"
import PatientsList from "./components/PatientsList"

function App() {

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <Formulario />
      <PatientsList />
    </div>
  )
}

export default App
