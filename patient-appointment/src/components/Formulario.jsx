import {useState, useEffect} from "react"

function Formulario({patients, setPatients}) {
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [symptoms, setSymptoms] = useState('');
  
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validate form
    if([ name, owner, email, date, symptoms ].includes('')){
      console.log("One field is empty")
      setError(true);
    } else {
      setError(false)

      //Patient object

      const patientObject = {
        name, 
        owner, 
        email, 
        date, 
        symptoms
      }


      setPatients([...patients, patientObject])

      //Reset form

      setName('');
      setOwner('');
      setEmail('');
      setDate('');
      setSymptoms('');
    }
  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center">Following Patients</h2>
        <p className="text-lg mt-5 text-center mb-10">
            Add Patients and {''}
            <span className="text-indigo-600 font-bold ">Manage them</span>
        </p>

        <form 
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg py-10 px-5">

          
          {error && 
            <div className=" bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md">
              <p>All fields need to be fill</p>

            </div>
          
          }

          <div className="mb-5">
            <label htmlFor="pet" className="block text-gray-700 uppercase">Pet´s name</label>

            <input
              id="pet"
              type="text"
              placeholder="Pet´s name"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={name}
              onChange={ (e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="owner" className="block text-gray-700 uppercase">Person´s Name</label>

            <input
              id="owner"
              type="text"
              placeholder="Owner´s name"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={owner}
              onChange={ (e) => setOwner(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 uppercase">Email</label>

            <input
              id="email"
              type="email"
              placeholder="Email"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={email}
              onChange={ (e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="date" className="block text-gray-700 uppercase">Date of out</label>

            <input
              id="date"
              type="date"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={date}
              onChange={ (e) => setDate(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="symptoms" className="block text-gray-700 uppercase">Pet´s name</label>
            <textarea
              id="symptoms"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="Describe symptoms"
              value={symptoms}
              onChange={ (e) => setSymptoms(e.target.value)}
            />
          </div>

          <input 
            type="submit"
            className="uppercase bg-indigo-600 w-full p-3 text-white font-bold hover:bg-indigo-700 transition-all"
            value="Add pacient"
          />


        </form>
    </div>
  )
}

export default Formulario