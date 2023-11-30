import Paciente from "./Paciente"
const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

  return (
    <div className='md:w-1/2 lg:w-3/5 mt-10 md:mt-0'>

    {pacientes && pacientes.length ? 
    <>
      <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
      <p className='text-lg mt-5 mb-10 text-center'>Administra tus {""}<span className='text-amber-500 font-bold'>Pacientes y Citas</span></p>
        
        {pacientes.map(paciente => (
          <Paciente 
            key = {paciente.id}
            paciente = {paciente}
            setPaciente = {setPaciente}
            eliminarPaciente={eliminarPaciente}
          />
        ))}
    </>
    : 
    <>
    <h2 className='font-black text-3xl text-center'>No hay pacientes</h2>
    <p className='text-lg mt-5 mb-10 text-center'>Comienza agregando pacientes y {""}<span className='text-amber-500 font-bold'>aparecerán en este lugar</span></p>
      
      {pacientes.map(paciente => (
        <Paciente 
          key = {paciente.id}
          paciente = {paciente}
        />
      ))}
  </>
    }
    </div>
  )
}

export default ListadoPacientes