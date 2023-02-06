import { Link } from "react-router-dom"
import image1 from '../../assets/pageindexassets/images/Icons/Asset_1.svg'

const LinkTemp = (props: any) => {
    
    return (
        <Link className="group flex items-center shadow-md text-white font-semibold my-1 p-2 delay-100 duration-500 gap-x-3 active:border focus:bg-stone-600 focus:border-r-8" to={props.link}>
            <img src={props.image} alt="" className="hidden group-hover:block  w-4 h-4" />
            {props.name}
        </Link>
    )
}

const Sidebar = () => {
    return (
        <section className="flex flex-col">
            <div>
                <p className="text-white">ICON</p>
                <p className="text-white font-bold">DASHBOARD</p>
            </div>
            <div>
            <LinkTemp link="/" name="Admin User Management" image={image1} />
            <LinkTemp link="/about" name="Role Management" />
            <LinkTemp link="/contact" name="Customer Management" />
            <LinkTemp link="/contact" name="Customer Management" />
            <LinkTemp link="/contact" name="Customer Management" />
            </div>
        </section>
    )
}

export default Sidebar