import { useEffect, useState } from "react"
import Form from "./components/Form"
import Header from "./components/Header"
import List from "./components/List"



function App() {
  const storePacientes = JSON.parse(localStorage.getItem('pacientes')) ?? [];
  const [customers, setCustomers] = useState(storePacientes)
  const [paciente, setPaciente] = useState({})



  useEffect( () => {
    localStorage.setItem('pacientes', JSON.stringify(customers))

  }, [customers])

  
  


  const eliminarPaciente = ( id ) => {
    const pacientesNew = customers.filter( paciente => paciente.id !== id)

    setCustomers(pacientesNew)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header/>

      <div className="mt-12 md:flex ">
        <Form
          customers={customers}
          setCustomers={ setCustomers }
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <List 
          customers={customers}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>

    </div>
  )
}

export default App
