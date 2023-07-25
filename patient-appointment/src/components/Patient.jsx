

export const Patient = ( {patient}) => {
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
      </div>
  )
}
