
const Navbar = () => {
  return (
    <>
        <nav className=" flex items-center gap-10 max-sm:px-2 p-10 justify-between ">
        <a href="/">
          <img src="/logo.png" alt="" className="max-h-7 object-contain" />
        </a>
     <a href="" className='btn shadow-none max-xs:text-xs p-2'>
        Let's Talk
     </a>
      </nav></>
  )
}

export default Navbar