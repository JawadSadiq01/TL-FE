import '../scss/button.scss'


interface buttonprops{
    value: string;
}

const Button = ({value}:buttonprops) => {
  return (
    <div className='w-full my-2'>
        <button formAction="submit" className="button w-full h-12 p-2">{value}</button>
    </div>
  )
}

export default Button
