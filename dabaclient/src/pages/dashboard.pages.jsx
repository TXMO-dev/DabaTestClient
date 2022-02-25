import React from 'react';
import { useState } from "react";
import { motion } from "framer-motion";
import {MdArrowDropDown} from 'react-icons/md';
import {IoMdArrowDropup} from 'react-icons/io';
import { Outlet, Link } from 'react-router-dom';
import { useQuery,gql } from '@apollo/client';

export const DashboardPage = () => {
    const [shown, setShown] = useState(false);
    const [modalStatus, setModalStatus] = useState(false);
    const {loading,error,data} = useQuery(FETCH_USER_QUERY);  
    return(
       <div>
       {
        loading ?
        (
            <h1 className="absolute top-2 left-50%">Loading</h1>
        ):(
            <div className="relative xl:h-screen sm:h-screen md:h-screen sm:overflow-x-hidden">
            <h1 className='absolute xl:top-26.63px xl:left-72px sm:top-17.24px sm:left-16px'>Logo Here</h1>
            <div className="absolute sm:top-14.75px xl:top-24px xl:right-72px sm:right-28.06px h-32px xl:flex">
                <img onClick={() => setModalStatus(!modalStatus)} 
                src='https://firebasestorage.googleapis.com/v0/b/rolling-loud-2020.appspot.com/o/default_user.jpg?alt=media&token=9d588271-d422-4a0c-aebb-ce94b2b879dc' 
                className='w-32px h-32px mr-11px rounded-full' 
                alt="profile"/>
                <p className='not-italic font-bold text-textnewuser self-center mr-11px sm:hidden xl:block'>{data.getUser.name}</p>
                {modalStatus === false ? <MdArrowDropDown onClick={() => setModalStatus(!modalStatus)}  className='self-center sm:hidden xl:block' fill='#828282'/> : <IoMdArrowDropup onClick={() => setModalStatus(!modalStatus)}  className='self-center sm:hidden xl:block' fill='#828282'/>  }  
            </div>
            <motion.div   
            onHoverStart={() => setShown(true)}
            onHoverEnd={() => setShown(false)}
            id="dropdown" class={`${modalStatus === false ? 'hidden': 'block'} absolute p-2 xl:right-76px xl:top-83px sm:right-28.06px sm:top-66px z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700`}>
                <motion.ul class="py-1" aria-labelledby="dropdownButton">
                    <motion.li>
                        <Link to="/dashboard" onClick={() => setModalStatus(!modalStatus)} className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                        <motion.li
                            whileHover={{
                            color: "#FFB703",
                            x: 2,
                            }}
                            className="cursor-pointer p-1 text-blue-primary"
                        >
                            Profile
                        </motion.li>
                        </Link>
                    </motion.li>
                    <motion.li>
                        <Link to="#" onClick={() => setModalStatus(!modalStatus)} className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"><motion.li
                            whileHover={{
                            color: "#FFB703",
                            x: 2,
                            }}
                            className="cursor-pointer p-1 text-blue-primary"
                        >
                            Group Chat
                        </motion.li></Link>
                    </motion.li>
                    <motion.li>
                        <Link to="#" onClick={() => setModalStatus(!modalStatus)} className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                        <motion.li
                            whileHover={{
                            color: "#FFB703",
                            x: 2,
                            }}
                            className="cursor-pointer p-1 text-blue-primary"
                        >
                            Signout
                        </motion.li>
                        </Link>
                    </motion.li>
                  
                </motion.ul>  
            </motion.div>
            <Outlet/>
        </div>
        )
    }
       </div>
    )
    
    
}

const FETCH_USER_QUERY = gql`
query getUser @client{
    getUser{
        id
        name
           
        }
}   
    `;