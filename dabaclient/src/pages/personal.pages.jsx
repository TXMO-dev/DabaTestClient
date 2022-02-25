import React from 'react';
import {Link} from 'react-router-dom';
import { useQuery, gql, useApolloClient } from '@apollo/client';  
export const PersonalPage = () => {
    const client = useApolloClient();
    const {loading,error,data,networkStatus} = useQuery(FETCH_USER_QUERY,{
        pollInterval:20000,
        notifyOnNetworkStatusChange:true
    });
    if(networkStatus === networkStatus.poll){
        return (   
            <svg role="status" className="hidden absolute top-150% left-50% w-8 h-8 text-gray-200 animate-ping dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg> 
         );
    }
    return (
        <div>
            {loading ? (
                <svg role="status" className="hidden absolute top-150% left-50% w-8 h-8 text-gray-200 animate-ping dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg> 
            ):(
                <div className="flex flex-col absolute xl:top-102px sm:top-79.2px xl:bottom:896px xl:left-591.11px xl:right-574.89px justify-center items-center">
           <h1 className="w-208px h-49px not-italic font-normal text-personalheader mb-8px">Personal Info</h1>
           <p className='mb-44.06px'>Basic info, like your name and photo</p>
           <div className='flex flex-col xl:w-845.91px xl:h-580.54px xl:border xl:rounded-12px xl:border-personalcolor sm:w-screen'>
               <div className="flex px-49.95px py-28.32px">  
                   <div class="flex flex-col w-full mb-29.51px">
                       <h1 className='not-italic font-normal text-profileheader tracking-verytight mb-4px'>Profile</h1>
                       <p className='font-medium not-italic text-profilesubheader text-footcolor'>Some info may be visible to other people</p>
                   </div>
                   <Link to='/dashboard/editinfo' type="button" class="self-center text-center align-middle text-footcolor py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 h-38px w-95.34px">
                       Edit
                    </Link>
               </div>
               <div className="bg-borderbottomcolor h-0.2px xl:block sm:hidden">&nbsp;</div> 

               <div className="flex px-49.95px py-28.32px items-center"> 
                       <p className='font-medium mr-187.97px not-italic text-profilesubheader text-footcolor'>PHOTO</p>
                   
                       <img 
                        src='https://firebasestorage.googleapis.com/v0/b/rolling-loud-2020.appspot.com/o/default_user.jpg?alt=media&token=9d588271-d422-4a0c-aebb-ce94b2b879dc' 
                        className='w-72px h-72px rounded-8px' 
                        alt="profile"
                        />
               </div>
               <div className="bg-borderbottomcolor h-0.2px">&nbsp;</div> 

               <div className="flex px-49.95px py-28.32px items-center"> 
                       <p className='font-medium mr-187.97px not-italic text-profilesubheader text-footcolor'>NAME</p>
                   
                       <p className='xl:text-textnew not-italic font-medium tracking-verytight xl:block sm:hidden'>{data.getUser.name}</p>
                       <p className='not-italic font-medium tracking-verytight text-textnewmed xl:hidden sm:block'>{data.getUser.name}</p>
               </div>
               <div className="bg-borderbottomcolor h-0.2px">&nbsp;</div> 
               <div className="flex px-49.95px py-28.32px items-center"> 
                       <p className='font-medium mr-187.97px not-italic text-profilesubheader text-footcolor'>BIO</p>
                       <p className='xl:text-textnew not-italic font-medium tracking-verytight xl:block sm:hidden'>{data.getUser.bio}</p>
                       <p className='not-italic font-medium tracking-verytight text-textnewmed xl:hidden sm:block'>{data.getUser.bio > 10 ? data.getUser.bio.substr(0,8) : data.getUser.bio}</p>
               </div>
               <div className="bg-borderbottomcolor h-0.2px">&nbsp;</div>
               <div className="flex px-49.95px py-28.32px items-center"> 
                       <p className='font-medium mr-187.97px not-italic text-profilesubheader text-footcolor'>PHONE</p>
                       <p className='xl:text-textnew not-italic font-medium tracking-verytight xl:block sm:hidden'>{data.getUser.phone}</p>
                       <p className='w-full not-italic font-medium tracking-verytight text-textnewmed xl:hidden'>{data.getUser.phone}</p>
               </div>
               <div className="bg-borderbottomcolor h-0.2px">&nbsp;</div>
               <div className="flex px-49.95px py-28.32px items-center"> 
                       <p className='font-medium mr-187.97px not-italic text-profilesubheader text-footcolor'>EMAIL</p>
                       <p className='xl:text-textnew not-italic font-medium tracking-verytight xl:block sm:hidden'>{data.getUser.email}</p>
                       <p className='w-full not-italic font-medium tracking-verytight text-textnewmed xl:hidden'>{data.getUser.email}</p>
               </div>
               <div className="bg-borderbottomcolor h-0.2px">&nbsp;</div>
               <div className="flex px-49.95px py-28.32px items-center"> 
                    <p className='font-medium mr-187.97px not-italic text-profilesubheader text-footcolor'>PASSWORD</p>
                    <p className='xl:text-textnew not-italic font-medium tracking-verytight xl:block sm:hidden'>******************</p>
                    <p className='not-italic font-medium tracking-verytight text-textnewmed xl:hidden sm:block'>******************</p>
               </div>
               
           </div>   
           
       </div>
            )}
       
       </div>  
    )

}

const FETCH_USER_QUERY = gql`
{
    getUser{
            email
            name
            phone
            bio
            createdAt
        }
}   
    `;