import React, { useState, useEffect } from 'react'
import moon from '../../app-icons/moon.svg'
import sun from '../../app-icons/sun.svg'
import account from '../../app-icons/account_circle.svg'
import account_black from '../../app-icons/account_circle_black.svg'

const Menu = () => {
    return (
        <section className='absolute right-5 top-12 bg-white dark:bg-gray-900 text-black dark:text-white text-3xl text-center font-bold min-h-[300px] w-[200px] z-[51] flex flex-col items-center justify-center shadow-2xl'>
            <div>Some Stuff Goes Here!</div>
        </section>
    )
}

const Header = () => {
    const [darkMode, setDarkMode] = useState<boolean | undefined>(undefined);
    const [showMenu, setShowMenu] = useState<boolean>(false)

    const switchMode = () => {
        setDarkMode(!darkMode)
    }

    const showHiddenMenu = () => {
        setShowMenu(!showMenu)
        alert("clicked")
    }

    useEffect(() => {
        if (darkMode) {
            localStorage.setItem('darkMode', 'true');
            window.document.documentElement.classList.add('dark');
        } else if (darkMode === false) {
            localStorage.setItem('darkMode', 'false');
            window.document.documentElement.classList.remove('dark');
        } else {
            setDarkMode(localStorage.getItem("darkMode") === "true");
        }
    }, [darkMode])
    return (
        <section className="relative flex justify-end w-full p-2">
            <div className='relative right-0 flex items-center gap-x-5 justify-end w-2/4'>
                <p onClick={switchMode} className="cursor-pointer">
                    {!darkMode ? <img src={moon} alt="" className='w-[20px] h-[20px]' /> : <img src={sun} alt="" className='w-[20px] h-[20px]' />}
                </p>
                <div className='flex items-center gap-2'>
                    <p className='space-x-1'>
                        <span>Hi</span>
                        <span className='text-xl font-bold animate-bounce'>User</span>
                    </p>

                    {darkMode ? <img src={account} alt="" className='w-[35px] cursor-pointer' /> : <img src={account_black} alt="" className='w-[35px] cursor-pointer' onClick={() => showHiddenMenu()} />}

                </div>
            </div>

            
                { showMenu ? null : <Menu /> }
            
        </section>
    )
}

export default Header