import { Outlet } from "react-router-dom"
import { CommandBar, ComponentHeader } from "../sharedComponents/ComponentHeader"
console.log(window.location.pathname)

const RoleManagement = () => {
  
  return (
    <section className="relative w-full min-h-screen p-1 pt-16 md:p-3 md:pt-12 lg:p-16 bg-iBankingBgLight dark:bg-gray-800">
      <ComponentHeader name="Role Management" />
      <CommandBar creationUrl={""} viewUrl={""} editUrl={""} deactivateAction={undefined} activationAction={undefined} searchAction={undefined} />
      <div className="w-full min-h-[20vh] bg-white dark:bg-gray-900 mt-10">
        <Outlet />
        <p>Let's meet  later</p>
      </div>
    </section>
  )
}

export default RoleManagement