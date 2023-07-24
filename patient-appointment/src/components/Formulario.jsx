function Formulario() {
  return (
    <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center">Following Patients</h2>
        <p className="text-lg mt-5 text-center mb-10">
            Add Patients and {''}
            <span className="text-indigo-600 font-bold ">Manage them</span>
        </p>

        <form className="bg-white shadow-sm rounded-lg py-10 px-5">
          <div>
            <label htmlFor="mascota" className="block text-gray-700 uppercase">Pet´s name</label>

            <input
              id="mascota"
              type="text"
              placeholder="Pet´s name"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            />
          </div>
        </form>
    </div>
  )
}

export default Formulario