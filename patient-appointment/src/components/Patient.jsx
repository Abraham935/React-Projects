/* eslint-disable react/prop-types */


export const Patient = ( {patient, setPatient, deletePatient}) => {
  const handleDelete = () => {
    const answer = confirm('Do you want to delete this patient ?');

    if(answer){
      deletePatient(patient.id);
    }
  }


  return (
    
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 uppercase text-gray-700">
          Nombre: {''}
          <span className="font-normal normal-case">{patient.name}</span>
        </p>

        <p className="font-bold mb-3 uppercase text-gray-700">
          Owner: {''}
          <span className="font-normal normal-case">{patient.owner}</span>
        </p>

        <p className="font-bold mb-3 uppercase text-gray-700">
          Email: {''}
          <span className="font-normal normal-case">{patient.email}</span>
        </p>

        <p className="font-bold mb-3 uppercase text-gray-700">
          Date out: {''}
          <span className="font-normal normal-case">{patient.date}</span>
        </p>

        <p className="font-bold mb-3 uppercase text-gray-700">
          Synthomps: {''}
          <span className="font-normal normal-case">{patient.symptoms}</span>
        </p>

        <div className="flex justify-between mt-8">
          <button 
            type="button"
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
            onClick={() => setPatient(patient)}
          >
            Editar
          </button>

          <button 
            type="button"
            className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
            onClick={handleDelete}
          >
            Eliminar
          </button>

        </div>
      </div>
  )
}
