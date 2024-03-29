import { useEffect, useState } from "react"
import Error from "./Error"

const Form = ({ customers, setCustomers, paciente, setPaciente}) => {

  const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)

    return random + fecha
  }

  const [name, setName] = useState('')
  const [owner, setOwner] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  const [symptoms, setSymptoms] = useState('')

  const [error, setError] = useState(false)

  useEffect( () => {
    if ( Object.keys(paciente).length === 0 ) return;
      setName(paciente.name)
      setOwner(paciente.owner)
      setEmail(paciente.email)
      setDate(paciente.date)
      setSymptoms(paciente.symptoms)
  }, [paciente])

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validacion
    if( [ name, owner, email, date, symptoms ].includes('') ) {
      setError(true)
      return
    } 

    setError(false)

    // Customer
    const customerObj = {
      name,
      owner,
      email,
      date,
      symptoms,
    }

    if ( paciente.id ) {
      // EDITAR PACIENTE
      customerObj.id = paciente.id
      const pacientesActualizados = customers.map( pacienteState => pacienteState.id === paciente.id ? customerObj : pacienteState)

      setCustomers(pacientesActualizados)

      setPaciente({})

    } else { 

      customerObj.id = generarId();
      setCustomers([...customers, customerObj])
    }


    setDate('')
    setEmail('')
    setName('')
    setOwner('')
    setSymptoms('')
    paciente.id = ''

  }


  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center">Seguimiento de Pacientes</h2>

        <p className="text-lg mt-5 text-center mb-10">
          Agrega Pacientes y {""}
          <span className="text-indigo-600 font-bold">Administralos</span>
        </p>

        <form 
          className="bg-white shadow-md rounded-lg py-10 px-5 mb-10" 
          onSubmit={handleSubmit} 
        > 
          {error && <Error msgError='Todos los campos son obligatorios' />}

          <div className="mb-5">
            <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
              Nombre Mascota
            </label>

            <input 
              id="mascota"
              type="text" 
              placeholder="Nombre de la Mascota"
              className="p-2 border-2 mt-2 w-full placeholder-gray-400 rounded-md"
              value={name}
              onChange={ (e) => setName( e.target.value) }
            />
          </div>

          <div className="mb-5">
            <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
              Nombre Propietario
            </label>

            <input 
              id="propietario"
              type="text" 
              placeholder="Nombre de la Persona"
              className="p-2 border-2 mt-2 w-full placeholder-gray-400 rounded-md"
              value={owner}
              onChange={ (e) => setOwner( e.target.value ) }
            />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
              Email
            </label>

            <input 
              id="email"
              type="email" 
              placeholder="Correo Electronico"
              className="p-2 border-2 mt-2 w-full placeholder-gray-400 rounded-md"
              value={email}
              onChange={ (e) =>  setEmail( e.target.value ) } 
            />
          </div>

          <div className="mb-5">
            <label htmlFor="cita" className="block text-gray-700 uppercase font-bold">
              Fecha de la cita
            </label>

            <input 
              id="cita"
              type="date" 
              className="p-2 border-2 mt-2 w-full placeholder-gray-400 rounded-md focus:outline-none focus:border-blue-500"
              value={date}
              onChange={ (e) => setDate( e.target.value ) }
            />

          </div>

          <div className="mb-5">
            <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
              Sintomas
            </label>

            <textarea
              id="sintomas"
              className="p-2 border-2 mt-2 w-full placeholder-gray-400 rounded-md resize-none"
              placeholder="Describe los sintomas"
              value={symptoms}
              onChange={ (e) => setSymptoms( e.target.value ) }
            />
          </div>

          <input 
            type="submit" 
            className="bg-indigo-600 w-full p-3 text-white rounded-md uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
            value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
          />
        </form>
    </div>
  )
}

export default Form