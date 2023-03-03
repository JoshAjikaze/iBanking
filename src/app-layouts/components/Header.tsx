import React, { useState, useEffect } from 'react'
import moon from '../../app-icons/moon.svg'
import sun from '../../app-icons/sun.svg'
import account from '../../app-icons/account_circle.svg'
import account_black from '../../app-icons/account_circle_black.svg'

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState<boolean>(false)
    // console.log(toggleMenu, 'Toggle Menu State')
    const [darkMode, setDarkMode] = useState<boolean | undefined>(undefined);

    const switchMode = () => {
        setDarkMode(!darkMode)
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

                    {darkMode ? <img src={account} alt="" className='w-[35px] cursor-pointer hover:rotate-180 hover:scale-75 hover:duration-300' /> : <img src={account_black} alt="" className='w-[35px] cursor-pointer' />}
                    <button onClick={() => setToggleMenu(!toggleMenu) }>menu</button>
                </div>
            </div>

            <section className={`${ toggleMenu ? '' : 'hidden'} absolute right-5 top-12 bg-white dark:bg-gray-900 text-black dark:text-white text-3xl text-center font-bold min-h-[300px] w-[200px] z-[51] flex flex-col items-center justify-center shadow-2xl`}>
                <div>Some Stuff Goes Here!</div>
            </section>

        </section>
    )
}

export default Header