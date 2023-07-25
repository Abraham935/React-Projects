import Header from "./components/Header"
import Formulario from "./components/Formulario"
import PatientsList from "./components/PatientsList"
import {useState} from "react"

function App() {
  const [patients, setPatients] = useState([]);

  console.log(patients)
  
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          patients={patients} 
          setPatients={setPatients}
        />
        <PatientsList />
      </div>
    </div>
  )
}

export default App
