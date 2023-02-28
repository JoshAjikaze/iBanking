import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { FormikValues, FormikHelpers } from 'formik/dist/types'
import user from "../../../app-icons/person.svg"
import reset from "../../../app-icons/reset.svg"
import activate from "../../../app-icons/activate.svg"
import update from "../../../app-icons/update.svg"

const onSubmit = (values: any) => {
    console.log(values);
    setTimeout(
        () => { document.location.reload() }, 1000 * 5
    );
}

const formSchema = Yup.object({
    name: Yup.string().required('This Is A Required Field!'),
    role: Yup.string().required('This Is A Required Field!'),
    fullName: Yup.string().required('This Is A Required Field!'),
})

const AdminEdit = () => {
    return (
        <section className='divide-y-2 p-1'>
            <div>
                <div className='grid grid-cols-2 items-center justify-center p-2'>
                    <p className='col-span-1 flex gap-x-3 py-1'>
                        <img src={user} alt="" className='w-5' />
                        <span className='col-span-1 text-lg font-medium text-iBankingDarkGreen dark:text-white'>EDIT ADMIN USER</span>
                    </p>
                    <p className='flex justify-end'>
                        <img src={reset} alt="" className='w-5' />
                    </p>
                </div>
            </div>

            <div className='pt-5 mb-5'>
                <Formik initialValues={{ name: '', role: '' }} validationSchema={formSchema} onSubmit={onSubmit}>
                    <Form className='flex flex-col px-[40px] gap-y-5'>
                        <div className='grid grid-cols-2 gap-10 justify-between'>
                            <p className='col-span-2 md:col-span-1 flex flex-col'>
                                <label htmlFor="name" className='mb-3 text-iBankingDarkGreen dark:text-white'>Username</label>
                                <p className="border flex items-center pl-3" >
                                    <span>
                                        <img src={user} alt="" />
                                    </span>
                                    <Field type="text" name="name" id="name" className="w-full p-2 px-5 bg-transparent dark:text-white focus:outline-none" />
                                </p>
                                <p className='animate-bounce mt-3'><ErrorMessage name='name' /></p>
                            </p>

                            <p className='col-span-2 md:col-span-1 flex flex-col'>
                                <label htmlFor="fullName" className='mb-3 text-iBankingDarkGreen dark:text-white'>Full Name</label>
                                <Field type="text" name="fullName" id="role" className="border p-2 px-5 bg-transparent dark:text-white focus:outline-none" />
                                <p className='animate-bounce mt-3'><ErrorMessage name='fullName' /></p>
                            </p>
                        </div>

                        <div className='grid grid-cols-2 gap-10 justify-between'>
                            <p className='col-span-2 md:col-span-1 flex flex-col'>
                                <label htmlFor="role" className='mb-3 text-iBankingDarkGreen dark:text-white'>Select Role</label>
                                <Field type="select" name="role" id="role" className="border p-2 px-5 bg-transparent dark:text-white focus:outline-none" />
                                <p className='animate-bounce mt-3'><ErrorMessage name='role' /></p>
                            </p>

                            <p className='col-span-2 md:col-span-1 flex flex-col'>
                                <label htmlFor="role" className='mb-3 text-iBankingDarkGreen dark:text-white'>Status</label>
                                <p className='p-2 flex justify-between md:w-[110px] border'>
                                    <p>
                                        <img src={activate} alt="" />
                                    </p>
                                    <p>Active</p>
                                </p>
                            </p>
                        </div>
                        <div className='flex justify-between p-1 '>
                            <button className='group flex border rounded bg-white p-2 px-3 space-x-3 text-[12px] font-semibold text-iBankingDarkGreen'>
                                <p className='group-hover:animate-[spin_2s_ease-in-out_infinite]'>
                                    <img src={reset} alt="" />
                                </p>
                                <span>CANCEL</span>
                            </button>
                            <button className='group rounded bg-iBankingDarkGreen p-2 px-3 space-x-3 text-[12px] font-semibold text-white flex items-center' type="submit">
                                <p>
                                    <img src={update} alt="" className='group-hover:animate-ping' />
                                </p>
                                <p>UPDATE</p>
                            </button>
                        </div>
                    </Form>
                </Formik>
            </div>

        </section >
    )
}

export default AdminEdit