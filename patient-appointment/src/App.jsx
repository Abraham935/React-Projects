import Header from "./components/Header"
import Formulario from "./components/Formulario"
import PatientsList from "./components/PatientsList"

function App() {

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario />
        <PatientsList />
      </div>
    </div>
  )
}

export default App
