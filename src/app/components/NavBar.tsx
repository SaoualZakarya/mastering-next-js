import Link from 'next/link'
import { Search } from './Search'
export const NavBar = () => {
  return (
    <nav className='py-4 px-3 bg-slate-500 flex sm:justify-around items-center justify-center ms:gap-0 gap-6 '>
        <h1 className='text-[16px] sm:text-[22px] font-bold'>
            <Link className='' href={'/'}>WikiRocket!</Link>
        </h1>
        <Search/>
    </nav>
  )
}
