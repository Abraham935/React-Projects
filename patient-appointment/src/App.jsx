import Header from "./components/Header"
import Formulario from "./components/Formulario"
import PatientsList from "./components/PatientsList"
import {useState, useEffect} from "react"

function App() {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  const deletePatient = (id) => {
    const updatedPatients = patients.filter(patient => patient.id !== id);

    setPatients(updatedPatients)
  }

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients))

  }, [patients])
  
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          patients={patients} 
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />
        <PatientsList 
          patients={patients}
          setPatient={setPatient}
          deletePatient={deletePatient}
        />
      </div>
    </div>
  )
}

export default App
