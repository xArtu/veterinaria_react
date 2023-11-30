const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

  const {mascota, nombre, correo, fecha, sintomas, id} = paciente
  const handleEliminar = () => {
    const respuesta = confirm(`¿Deseas eliminar al paciente ${mascota}?`)
    if(respuesta) eliminarPaciente(id)
  }

  return (
    <div className='mt-5 bg-zinc-700 shadow-md rounded-lg py-5 px-5 mx-5 md:mr-5'>
        <p className='text-amber-400 font-bold mb-3 uppercase'>Nombre de mascota: {""}<span className=' text-white font-normal normal-case'>{mascota}</span></p>
        <p className='text-amber-400 font-bold mb-3 uppercase'>Nombre de propietario: {""}<span className='text-white font-normal normal-case'>{nombre}</span></p>
        <p className='text-amber-400 font-bold mb-3 uppercase'>Correo electrónico: {""}<span className='text-white font-normal normal-case'>{correo}</span></p>
        <p className='text-amber-400 font-bold mb-3 uppercase'>Fecha de alta: {""}<span className='text-white font-normal normal-case'>{fecha}</span></p>
        <p className='text-amber-400 font-bold mb-3 uppercase'>Síntomas de la mascota: {""}<span className='text-white font-normal normal-case'>{sintomas}</span></p>
        <div className="flex gap-10 place-content-end mt-10">
          <button type="button"
          className="py-2 px-10 bg-amber-500 hover:bg-amber-600 uppercase rounded-lg font-bold"
          onClick={() => setPaciente(paciente)}
          >
            Editar
          </button>
          <button type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 uppercase rounded-lg font-bold"
          onClick = {handleEliminar}
          >
            Eliminar
          </button>
        </div>
    </div>
  )
}

export default Paciente