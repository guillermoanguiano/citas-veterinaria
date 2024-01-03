import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

const CustomerList = ({customer, setPaciente, eliminarPaciente}) => {


  const {name, owner, email, date, symptoms, id } = customer


  const handleEliminar = () =>{
    Swal.fire({
        title: `Desea eliminar a ${name}?`,
        text: "Esta accion no se puede revertir",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar'
    }).then((result) => {
        if (result.isConfirmed) {
            eliminarPaciente(id);  //llamar el prop y enviar el id
            Swal.fire(
            'Eliminado con exito!',
            `${name} se ha elminado con exito!`,
            'success'
            )
        }
    })
  }

  return (
    <div className="mx-5 my-10 bg-white shadow-md rounded-xl py-10 px-5 mb-10">
        <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {''}
        <span className="font-normal normal-case" >{name}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {''}
        <span className="font-normal normal-case">{owner}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {''}
        <span className="font-normal normal-case">{email}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: {''}
        <span className="font-normal normal-case">{date}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {''}
        <span className="font-normal normal-case">{symptoms}</span>
        </p>

        <div className="flex justify-between mt-10">
          <button
            type="button"
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 font-bold uppercase rounded-md text-white"
            onClick={() => setPaciente(customer)}
          >Editar</button> 

          <button
            type="button"
            className="py-2 px-10 bg-red-600 hover:bg-red-700 font-bold uppercase rounded-md text-white"
            onClick={handleEliminar}
          >Elminar</button>
        </div>
    </div>
  )
} // Se usa () => setPaciente(customer) de esta forma ya que es una funcion y si dejamos la pura funcion con el argumento la llamara automaticamente, entonces se tiene que poner el arrow function para que accione nomas cuando hagamos click, o si no tenemos argumento nomas dejar la palabra sin los parentesis

export default CustomerList