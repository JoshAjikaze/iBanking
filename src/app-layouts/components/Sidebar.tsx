import React from "react";
import { Link } from "react-router-dom";
import user from '../../app-icons/person.svg'
import icon from '../../app-icons/save.svg'

const LinkTemp = (props: any) => {

    return (
        <Link
            className="group flex items-center p-1 px-3 text-white sm:text-xs lg:text-sm font-normal my-1 gap-x-4 delay-100 duration-500 hover:bg-green-700 dark:hover:bg-gray-800 active:border focus:outline-none active:outline-none focus:border-r-8"
            to={props.link}
        >
            <img src={props.image} alt="imagegfc" className="w-4 h-4" />
            <p className="w-full p-2 hover:scale-105 hover:font-semibold duration-300">{props.name}</p>
            
        </Link>
    );
};

const Sidebar = () => {
    return (
        <section className="relative flex flex-col w-full">
            <div className="bg-green-900 dark:bg-gray-900 shadow-lg p-3 text-white text-xl font-bold text-center">
                <span className="">iBanking</span>
            </div>
            <div>
                <LinkTemp link="/" name="Admin User Management" image={ user } />
                <LinkTemp link="/contact" name="Placeholder Text" image={icon} />
                <LinkTemp link="/" name="Placeholder Text" image={icon} />
                <LinkTemp link="/about" name="Placeholder Text" image={icon} />
                <LinkTemp link="/contact" name="Placeholder Text" image={icon} />
            </div>
        </section>
    );
};

export default Sidebar;
