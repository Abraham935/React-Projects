/* eslint-disable react/jsx-key */
import { Patient } from "./Patient"

// eslint-disable-next-line react/prop-types
function PatientsList({ patients }) {
  console.log(patients)

  return (
    <div className="md:w-1/2  lg:w-3/5 ">
      {patients && patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className=" text-xl mt-5 mb-10 text-center">
            Manage your {''}
            <span className="text-indigo-600 font-bold">Patients and Dates</span>
          </p>

        <div className=" md:h-screen overflow-y-scroll">
          {patients.map( (patient) => {

            return (
              <Patient
                key={patient.id}
                patient={patient}
              />
            )
          })}
        </div>
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
            <p className=" text-xl mt-5 mb-10 text-center">
              Start adding patients {''}
              <span className="text-indigo-600 font-bold">and they appear below</span>
            </p>
        </>
      ) }

      

    </div>
  )
}

export default PatientsList
