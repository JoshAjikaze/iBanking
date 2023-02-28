import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../app-redux/store";
import user from '../../app-icons/person.png'
import icon from '../../app-icons/save.svg'
import key from '../../app-icons/key.svg'

const LinkTemp = (props: any) => {
    const toggle = useSelector((state: RootState) => state.counter.value)
    return (
        <Link
        className="group flex items-center p-1 px-3 text-white sm:text-xs lg:text-sm font-normal my-1 gap-x-4 delay-100 duration-500 hover:bg-green-700 dark:hover:bg-gray-800 active:border focus:outline-none active:outline-none focus:border-r-8"
        to={props.link}
        >
            <img src={props.image} alt="imagegfc" className={` ${ toggle ? "ml-2" : ""} w-4 h-4`} />
            <p className={` ${!toggle ? "" : "hidden group-hover:block"} w-full p-2 hover:scale-105 hover:font-semibold`}>{props.name}</p>

        </Link>
    );
};

const Sidebar = () => {
    const toggle = useSelector((state: RootState) => state.counter.value)
    return (
        <section className="relative flex flex-col w-full">
            <div className="bg-green-900 dark:bg-gray-900 shadow-lg p-3 text-white text-xl font-bold text-center">
                <p className="">{ toggle ? <span>&#9731;</span> : <span>iBanking</span> }</p>
            </div>
            <div>
                <LinkTemp link="/" name="Admin User Management" image={user} />
                <LinkTemp link="/contact" name="Role Management" image={key} />
                <LinkTemp link="/" name="Placeholder Text" image={icon} />
                <LinkTemp link="/about" name="Placeholder Text" image={icon} />
                <LinkTemp link="/contact" name="Placeholder Text" image={icon} />
            </div>
        </section>
    );
};

export default Sidebar;
