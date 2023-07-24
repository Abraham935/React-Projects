function Formulario() {
  return (
    <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center">Following Patients</h2>
        <p className="text-lg mt-5 text-center mb-10">
            Add Patients and {''}
            <span className="text-indigo-600 font-bold ">Manage them</span>
        </p>

        <form className="bg-white shadow-md rounded-lg py-10 px-5">

          <div className="mb-5">
            <label htmlFor="mascota" className="block text-gray-700 uppercase">Pet´s name</label>

            <input
              id="mascota"
              type="text"
              placeholder="Pet´s name"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="mascota" className="block text-gray-700 uppercase">Person´s Name</label>

            <input
              id="mascota"
              type="text"
              placeholder="Person´s name"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="mascota" className="block text-gray-700 uppercase">Email</label>

            <input
              id="email"
              type="email"
              placeholder="Email"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="mascota" className="block text-gray-700 uppercase">Date of out</label>

            <input
              id="date"
              type="date"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="mascota" className="block text-gray-700 uppercase">Pet´s name</label>
            <textarea
              id="synthoms"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="Describe synthoms"
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