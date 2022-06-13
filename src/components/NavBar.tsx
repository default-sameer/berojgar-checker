import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Fade as Hamburger } from 'hamburger-react'
import toast from 'react-hot-toast'

interface Props {
    children: React.ReactNode;
}

interface Props1 {
    children: React.ReactNode;
    open: boolean;
}

interface Props2 {
    children: React.ReactNode;
    href: string;
}

const style = {
  container: `relative top-1/4 w-full text-center mt-8`,
  item: `text-4xl text-gray-900 cursor-pointer hover:text-yellow-300`,
  menu: {
    open: `h-full w-full `,
    close: `w-0 h-full`,
    default: `overflow-x-hidden md:overflow-hidden transition-all duration-700 fixed z-10 top-0 left-0  backdrop-blur-sm bg-slate-400/50`,
  },
};

function Menu({ children, open }: Props1) {
  return (
    <div
      className={`${style.menu.default} 
       ${open ? style.menu.open : style.menu.close}`}
    >
      {children}
    </div>
  );
}

function MenuContainer({ children }: Props) {
  return <div className={style.container}>{children}</div>;
}

function MenuItem({ children, href }: Props2) {
  return (
    <div className="p-2">
      <a href={href} className={style.item}>
        {children}
      </a>
    </div>
  );
}

const NavBar = () => {

    const login = () => {
        toast('Work in progress', {icon: '🏗'})
    }
    const [open, setOpen] = React.useState(false);
    const [isOpenBurger, setOpenBurger] = React.useState(false)

     const toggle = () => {
        setOpen((prevState) => !prevState);
    };


  return (
    <>
    <nav className="shadow-sm bg-base-300">
        <div className="max-w-screen-xl p-2 mx-auto">
            <div className="flex items-center justify-between space-x-4 lg:space-x-10">
            <div className="flex lg:w-0 lg:flex-1">
              {/* Todo FordwrdRef */}
                <Link href='/' passHref>
                  <Image className='object-contain hover:cursor-pointer' src={`/logo/berojgar-checkerx500.svg`} width={70} height={55} />
                </Link>
            </div>

            <nav className="hidden space-x-8 text-sm font-medium md:flex">
                <Link href={`/`}>
                    <a className="text-gray-600 text-xl relative after:absolute after:bg-black after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">Home</a>
                </Link>
                {/* <Link href={`/profile`}>
                    <a className="text-gray-600 text-xl relative after:absolute after:bg-black after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">Profile</a>
                </Link> */}
                <Link href={`/friends`}>
                    <a className="text-gray-600 text-xl relative after:absolute after:bg-black after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">Friends</a>
                </Link>
            </nav>

            <div className="items-center justify-end flex-1 flex space-x-4">
                
                <a className="relative inline-block group focus:outline-none focus:ring hover:cursor-pointer" onClick={login}>
                    <span className="absolute inset-0 transition-transform translate-x-1.5 translate-y-1.5 bg-yellow-300 group-hover:translate-y-0 group-hover:translate-x-0"></span>

                    <span className="relative inline-block px-8 py-3 text-sm font-bold tracking-widest text-black uppercase border-2 border-black group-active:text-opacity-75">
                        Login
                    </span>
                </a>
                {/* <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        <img src="https://api.lorem.space/image/face?hash=33791" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div> */}
                
            </div>

            <div className="md:hidden">
                <Hamburger toggled={open} toggle={setOpenBurger} onToggle={toggle} size={23} />
                <Menu open={open}>
                    <button
                    aria-label="Close"
                    className="absolute top-3 right-3 text-5xl text-white cursor-pointer"
                    onClick={toggle}
                    >
                    &times;
                    </button>
                    <MenuContainer>
                    <MenuItem href={`/`}>Home</MenuItem>
                    {/* <MenuItem href={`/profile`}>Profile</MenuItem> */}
                    <MenuItem href={`/friends`}>Friends</MenuItem>
                    </MenuContainer>
                </Menu>
            </div>
            </div>
        </div>
    </nav>
    </>
  )
}


export default NavBar