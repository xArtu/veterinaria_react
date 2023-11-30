import {useState, useEffect} from "react"
import Error from "./Error"

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
  
  const [mascota, setMascota] = useState("")
  const [nombre, setNombre] = useState("")
  const [correo, setCorreo] = useState("")
  const [fecha, setFecha] = useState("")
  const [sintomas, setSintomas] = useState("")

  const [error, setError] = useState(false)

  useEffect(()=>{
    if(Object.keys(paciente).length > 0){
      setMascota(paciente.mascota)
      setNombre(paciente.nombre)
      setCorreo(paciente.correo)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  },[paciente])

  const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)

    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if([mascota, nombre, correo, fecha, sintomas].includes("")){
      setError(true)
      return
    }
    setError(false)
    //Objeto paciente
    const objetoPaciente = {
      mascota,
      nombre, 
      correo, 
      fecha, 
      sintomas,
    }
    if(paciente.id){
      //Editando registro
      objetoPaciente.id = paciente.id
      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)

      setPacientes(pacientesActualizados)
      setPaciente({})
    }
    else{
      //Registro nuevo
      objetoPaciente.id = generarId()
      setPacientes([...pacientes, objetoPaciente])
    }
    
    // Reiniciar formulario
    setMascota("")
    setNombre("")
    setCorreo("")
    setFecha("")
    setSintomas("")
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5 md:mx-0">
        <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>
        <p className="text-lg mt-5 text-center mb-10">Añade pacientes y {""}<span className="text-amber-500 font-bold">Administralos</span></p>

        <form 
        onSubmit={handleSubmit}
        className="bg-zinc-700 shadow-md rounded-lg py-10 px-5"
        >
          {error && 
          <Error>
            <p>Todos los campos son obligatorios</p>
          </Error>
          }

          <div className="mb-5">
            <label htmlFor="mascota" className="block text-gray-200 uppercase font-bold">Nombre mascota</label>
            <input id="mascota" type="text" placeholder="Nombre de la mascota" className="text-black border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            value={mascota}
            onChange={(e) => setMascota(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="nombre" className="block text-gray-200 uppercase font-bold">Nombre propietario</label>
            <input id="nombre" type="text" placeholder="Nombre de propietario" className="text-black border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="correo" className="block text-gray-200 uppercase font-bold">Correo electrónico</label>
            <input id="correo" type="email" placeholder="Correo electrónico" className="text-black border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="fecha" className="block text-gray-200 uppercase font-bold">Fecha de alta</label>
            <input id="fecha" type="date" className="text-black border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="sintomas" className="block text-gray-200 uppercase font-bold">Síntomas de la mascota</label>
            <textarea id="sintomas" placeholder="Describe los síntomas" className="text-black border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
            />
          </div>
          <input type="submit"
          className="bg-amber-500 w-full p-3 uppercase font-bold hover:bg-amber-600 cursor-pointer transition-all"
          value={paciente.id ? "Editar paciente" : "Agregar paciente"} 
          />
        </form>
    </div>
  )
}

export default Formulario