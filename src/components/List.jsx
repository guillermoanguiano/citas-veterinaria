import CustomerList from "./CustomerList"



const List = ({customers, setPaciente, eliminarPaciente}) => {


  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
    
      {customers && customers.length ? (
        <>

          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
            <p className="text-xl max-lg:mt-14 mt-5 mb-10 text-center">
            Administra tus {''}
              <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
            </p>

          { customers.map( customer => (
            <CustomerList
              key={ customer.id }
              customer={customer}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
          />
          ))}

        </>
      ) : 
      
      <>
        <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes {''}
            <span className="text-indigo-600 font-bold">y apareceran en este lugar</span>
          </p>
      </> }
        
    </div>
  )
}

export default List