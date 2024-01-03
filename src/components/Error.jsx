

const Error = ({msgError}) => {
  return (
    <div 
      className="bg-red-800 text-white text-center p-3 uppercase mb-5 rounded-md font-bold"
    >
        <p>{ msgError }</p>

    </div>
  )
}

export default Error