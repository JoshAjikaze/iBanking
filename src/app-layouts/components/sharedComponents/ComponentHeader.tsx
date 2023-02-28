import React from 'react'
import user from '../../../app-icons/person.svg'
import create from '../../../app-icons/create.svg'
import view from '../../../app-icons/view.svg'
import edit from '../../../app-icons/edit.svg'
import activate from '../../../app-icons/activate.svg'
import deactivate from '../../../app-icons/deactivate.svg'
import search from '../../../app-icons/search.svg'
import database from '../../../app-icons/database.svg'
import ellipsis from '../../../app-icons/ellipsis.svg'
import { Link } from 'react-router-dom'

export const ComponentHeader = (props: any) => {
    const name = "Page"
    return (
        <section className='mt-3 bg-white w-full dark:bg-gray-900 dark:shadow-lg p-2 divide-x-2 divide-iBankingGreen grid grid-cols-2 lg:grid-cols-3 text-iBankingGreen dark:text-white'>
            <div className='flex items-center gap-x-4 col-span-3 md:col-span-1'>
                <p className=''>
                    <img src={user} alt="" />
                </p>
                <p className='text-[22px] font-medium leading-[25.78px]'>{props.name}</p>
            </div>
            <div className='hidden font-light text-lg leading-[21.09px] md:col-span-1 col-span-2 md:flex justify-end'>
                <span>Create</span> / <span>View</span> / <span>Edit</span> / <span>Activate</span>
            </div>
        </section>
    )
}

export const CommandBar = () => {
    return (
        <section className='mt-2 p-2 bg-white w-full dark:bg-gray-900 text-iBankingGreen dark:text-white flex justify-between'>
            <BtnComponent name="Create" image={create} />
            <BtnComponent name="View" image={view} />
            <BtnComponent name="Edit" image={edit} />
            <BtnComponent name="Activate" image={activate} />
            <BtnComponent name="Deactivate" image={deactivate} />
            <BtnComponent image={search} />
            <BtnComponent image={database} />
            <BtnComponent image={ellipsis} />
        </section>
    )
}


function BtnComponent(props: any) {
    return (

        <button className='p-1 text-iBankingGreen dark:text-white text-xl font-light flex gap-3 items-center justify-center hover:bg-sky-500'>
            {/* icon span */}
            <span>
                <img src={props.image} alt="" />
            </span>

            {/* text content  */}
            <span>{props.name}</span>
        </button>


    );
}