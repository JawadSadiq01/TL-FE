import '../scss/input.scss'
interface inputProps{
    name:string;
    type:string;
    placeholder:string;
}
const Input = ({name, type, placeholder}: inputProps) => {
  return (
    <div className='my-2 w-full'>
        <h3 className="text-white py-4 font-bold">{name}</h3>
        <input type={type} required className="inputField text-white text-base border border-white outline-none py-3 px-6 bg-transparent"
  placeholder={placeholder}/>      
    </div>
  )
}

export default Input
