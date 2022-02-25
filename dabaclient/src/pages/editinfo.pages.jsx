import React,{useState} from 'react';
import {AiOutlineLeft} from 'react-icons/ai';
import {Link,useNavigate} from 'react-router-dom';
import { useMutation,gql,useQuery } from '@apollo/client';

export const EditInfo = () => {
    const {isloading,data} = useQuery(FETCH_USER_QUERY);
    
        const [values,setValues] = useState({
            name:data.getUser.name,
            email:data.getUser.email,
            password:'',
            phone:data.getUser.phone,
            bio:data.getUser.bio
        });
    
    
    let navigate = useNavigate();
    const [addUser, {loading}] = useMutation(UPDATE_USER,{
        update(proxy,result){
            
                navigate('/dashboard');
               
            
        },
        onError(err){
            console.log(err);
        },
        variables:values  
        
    })

    const onChange = (event) => {
        setValues({...values,[event.target.name]:event.target.value});
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addUser();  
        setValues({});
    };
    return (
        <div>
            {
                loading ? (
                    <Link to="/dashboard" className="hidden flex items-center justify-center absolute text-button-color  xl:p-0  xl:top-101px sm:top-79.2px xl:left-296.57px sm:left-28.32px"><AiOutlineLeft/> Back</Link>
                ):(
                    <Link to="/dashboard" className="flex items-center justify-center absolute text-button-color  xl:p-0  xl:top-101px sm:top-79.2px xl:left-296.57px sm:left-28.32px"><AiOutlineLeft/> Back</Link>
                )
            } 
           
                   <div className="flex flex-col p-28.32px absolute  xl:top-150px  sm:top-105px xl:left-296.57px xl:right-297.56px xl:w-845.91px sm:w-screen xl:h-827.56px xl:border xl:rounded-12px xl:border-personalcolor">
            <p className="not-italic font-medium text-profileheader tracking-verytight mb-4px">Change Info</p>
            <p className="not-italic font-normal font-medium text-profilesubheader tracking-verytight text-footcolor mb-25.89px">
                Changes will be reflected to every services
            </p>
            <div className="flex">
                <img
                    src='https://firebasestorage.googleapis.com/v0/b/rolling-loud-2020.appspot.com/o/default_user.jpg?alt=media&token=9d588271-d422-4a0c-aebb-ce94b2b879dc'
                    className='w-72px h-72px rounded-8px mr-27.5px mb-54.52px'
                    alt="profile" />
                <p className="self-center">CHANGE PHOTO</p>
            </div>
            <form className="flex flex-col" onSubmit={onSubmit}>
                <div className='mb-24px'>
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                    <input type="text" id="name" onChange={onChange} name="name" value={values.name} class="bg-gray-50 border border-gray-300 rounded-12px text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-416.93px pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your name..." />
                </div>

                <div className='mb-24px'>
                    <label for="bio" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">BIO</label>
                    <textarea type="text" id="bio" name="bio" onChange={onChange} value={values.bio} class="bg-gray-50 border border-gray-300 rounded-12px text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-416.93px pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your bio..." />
                </div>

                <div className='mb-24px'>
                    <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone</label>
                    <input type="text" id="phone" name="phone" onChange={onChange} value={values.phone} class="bg-gray-50 border border-gray-300 rounded-12px text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-416.93px pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your phone..." />
                </div>

                <div className='mb-24px'>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                    <input type="text" id="email" name="email" onChange={onChange} value={values.email} class="bg-gray-50 border border-gray-300 rounded-12px text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-416.93px pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email..." />
                </div>

                <div className='mb-24px'>
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                    <input type="password" id="password" name="password" onChange={onChange} value={values.password} class="bg-gray-50 border border-gray-300 rounded-12px text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-416.93px pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your password..." />
                </div>
                <div>
                    {
                        !loading ? (
                            <button type="submit" class="text-white rounded-8px bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-8px">Submit</button>
                        ):(
                            <button disabled type="submit" class="text-white bg-blue-700 rounded-8px hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
                                <svg role="status" class="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                                </svg>
                                Loading...
                            </button>
                        )
                    }
                    
                    
                </div>



            </form>
        </div>
        </div>
    )
}

const UPDATE_USER = gql`
    mutation userupdate(
        $email: String
        $password: String
        $name: String
        $phone: String
        $bio: String 
    ){
        userupdate(
            updateUserInput:{
                email:$email
                password:$password
                name:$name
                phone:$phone
                bio:$bio
            }
        ){
            name
            bio 
        }
    }

`;

const FETCH_USER_QUERY = gql`
query getUser @client{
    getUser{
        id
            email
            name
            phone
            bio
            createdAt
        }
}   
    `;