import { Link } from "react-router-dom";

const LinkTemp = (props: any) => {
    return (
        <Link
            className="group flex items-center text-white sm:text-xs lg:text-sm font-normal my-1 p-3 gap-x-4 delay-100 duration-500 hover:bg-green-700 active:border focus:outline-none active:outline-none focus:border-r-8"
            to={props.link}
        >
                <img src={props.image} alt="imagegfc" className="w-4 h-4" />
                <span className="group-hover:scale-110 group-hover:font-semibold duration-500">{props.name}</span>
        </Link>
    );
};

const Sidebar = () => {
    return (
        <section className="flex flex-col w-full">
            <div>
                <p className="text-white">ICON</p>
                <p className="text-white font-bold">DASHBOARD</p>
            </div>
            <div>
                <LinkTemp link="/" name="Admin User Management" />
                <LinkTemp link="/contact" name="Placeholder Text" />
                <LinkTemp link="/" name="Placeholder Text" />
                <LinkTemp link="/about" name="Placeholder Text" />
                <LinkTemp link="/contact" name="Placeholder Text" />
            </div>
        </section>
    );
};

export default Sidebar;
