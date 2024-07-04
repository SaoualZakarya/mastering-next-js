import Link from 'next/link'
export const NavBar = () => {
  return (
    <nav className='py-4 shadow-2xl drop-shadow-2xl px-3 bg-slate-500 flex sm:justify-around items-center justify-center ms:gap-0 gap-6 '>
        <h1 className='text-[16px] sm:text-[22px] font-bold'>
            <Link className='' href={'/'}>Zakary saoual</Link>
        </h1>
    </nav>
  )
}
