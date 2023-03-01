import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../app-redux/store";
import user from '../../app-icons/person.png'
import key from '../../app-icons/key.svg'
import customer from '../../app-icons/customer.svg'
import penpaper from '../../app-icons/penpaper.svg'
import humanshield from '../../app-icons/humanshield.svg'
import clipboard from '../../app-icons/clipboard.svg'
import sqcircles from '../../app-icons/sqcircles.svg'
import bill from '../../app-icons/bill.svg'
import report from '../../app-icons/report.svg'
import settings from '../../app-icons/settings.svg'
import audit from '../../app-icons/audit.svg'

const LinkTemp = (props: any) => {
    const toggle = useSelector((state: RootState) => state.counter.value)
    return (
        <Link
        className="group flex items-center p-1 px-3 text-white text-xs font-normal gap-x-4 delay-100 duration-500 hover:bg-iBankingGreen dark:hover:bg-gray-800 active:border focus:outline-none active:outline-none focus:border-r-8"
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
                <LinkTemp link="/admin/index" name="Admin User Management" image={user} />
                <LinkTemp link="/role" name="Role Management" image={key} />
                <LinkTemp link="/custMgt" name="Customer Management" image={customer} />
                <LinkTemp link="/custProf" name="Customer Profiles" image={humanshield} />
                <LinkTemp link="/custRoles" name="Customer Roles" image={key} />
                <LinkTemp link="/corpUsers" name="Corporate Users" image={customer} />
                <LinkTemp link="/reqMgt" name="Request Management" image={penpaper} />
                <LinkTemp link="/transMgt" name="Transaction Management" image={clipboard} />
                <LinkTemp link="/tokenMgt" name="Token Management" image={sqcircles} />
                <LinkTemp link="/appSettings" name="Application Settings" image={settings} />
                <LinkTemp link="/billPayMgt" name="Bill Payment Management" image={bill} />
                <LinkTemp link="/report" name="Report" image={report} />
                <LinkTemp link="/audTrailMgt" name="Audit Trail Management" image={audit} />
            </div>
        </section>
    );
};

export default Sidebar;
