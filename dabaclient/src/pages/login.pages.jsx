import React,{ useState } from 'react';
import {FaFacebookSquare,FaGithub,FaTwitter,FaGoogle} from 'react-icons/fa';
import {Link,useNavigate} from 'react-router-dom';
import { gql, useMutation,useApolloClient } from '@apollo/client';

const IS_LOGGED_IN = gql`
{
    isLoggedin @client
}
`;

export const LoginPage = () => {
    const [closetoggle,setclosetoggle] = useState(false);
    const [errors,setErrors] = useState({});
    const [values,setValues] = useState({
        email:'',
        password:''
    });
    const client = useApolloClient();

    const onChange = (event) => {
        setValues({...values,[event.target.name]:event.target.value});
    }

    let navigate = useNavigate();
    const [addUser, {loading}] = useMutation(LOGIN_USER,{
        update(proxy,{data:{login:{__typename,id,token,email}}}){
            console.log(`${__typename} ${id} ${token} ${email}`);
            if(token){
                localStorage.setItem('token',token);
                navigate('/dashboard');
            }    
            
        },
        onError(err){
            console.log(err.graphQLErrors[0].message);  
            setErrors({...errors,"errormessage":err.graphQLErrors[0].message});
        },
        onCompleted({login}){
            const {isLoggedin}  = client.readQuery({
              query:IS_LOGGED_IN
          });
  
          client.writeQuery({
              query:IS_LOGGED_IN,
              data:{isLoggedin:!isLoggedin}
          });
        },
        variables:values  
        
    })

    const onSubmit = (event) => {
        event.preventDefault();
        addUser();  
        setValues({});
    }
    return (
        <div>
             {
               <ul className="">       
                    {
                        Object.values(errors).map((value) => (
                            <li>
                                <div className={`${closetoggle ? 'hidden' : ''} flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800`} role="alert">
                                    <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </div>
                                    <div class="ml-3 text-sm font-normal">Invalid Credentials, Please try again</div>
                                    <button type="button" onClick={() => setclosetoggle(!closetoggle)} className={`ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700`}  aria-label="Close">
                                        <span onClick={() => setclosetoggle(!closetoggle)} className="sr-only">Close</span>
                                        <svg onClick={() => setclosetoggle(!closetoggle)} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </button>  
                                </div> 
                            </li>  
                            ))    
                    }  
                </ul>
            }
            {
                !loading ? (
                <div className="relative xl:h-screen sm:h-screen md:h-screen sm:overflow-x-hidden">   
                <div className=" absolute sm:top-0 sm:left-0 sm:w-screen sm:h-screen xl:top-197.44px xl:left-483.08px xl:right-483.08px xl:bottom-248.25px xl:w-473.83px xl:border xl:rounded-24px xl:border-b-col-gray xl:h-544.37px box-border">
                <div className="flex flex-col absolute left-10% top-20% w-356.48px">
                        <p className="not-italic text-textnew font-sans font-semibold w-318.88px h-50px mb-14.5px">
                        Login
                        </p>
                        <form className="mb-41.01px" onSubmit={onSubmit}>
                        <div className="mb-14.5px">
                            <input type="email" value={values.email} onChange={onChange} id="email" name="email" className="box-border border border-b-col-gray text-gray-900 text-sm rounded-8px focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" />
                        </div>
                        <div className="mb-6">  
                            <input type="password" id="password" value={values.password} onChange={onChange} name="password" className="box-border border border-b-col-gray text-gray-900 text-sm rounded-8px focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" />
                        </div>  
                        <button type="submit" className="bg-button-color text-white rounded-8px text-sm px-5 py-2.5 text-center w-full">Login</button>   
                    </form>  
                        <p className = "text-textnewfoot tracking-verytight text-footcolor not-italic font-normal mb-22.51px self-center">or continue with these social profile</p>
                        <div className="flex justify-center mb-27.07px">
                            <span className=" relative mr-20.93px w-42px h-42px border border-footcolor rounded-full">
                                <FaGoogle className='absolute top-30% left-30%' fill='#828282'/>  
                            </span>
                            <span className="relative mr-20.93px w-42px h-42px border border-footcolor rounded-full">
                                <FaFacebookSquare className='absolute top-30% left-30%' fill='#828282'/>  
                            </span>
                            <span className="relative mr-20.93px w-42px h-42px border border-footcolor rounded-full">
                                <FaTwitter className='absolute top-30% left-30%' fill='#828282'/>  
                            </span>
                            <span className="relative mr-20.93px w-42px h-42px border border-footcolor rounded-full">
                                <FaGithub className='absolute top-30% left-30%' fill='#828282'/>    
                            </span>
                        </div>
                        <p className="text-textnewfoot text-footcolor self-center not-italic font-normal sm:mb-80.07px">Dont have an account yet? <Link className="text-blue-600" to="/">Register</Link></p>
                        <div className="flex justify-between sm:absolute sm:top-100% sm:w-100% xl:invisible">     
                            <p className="text-textnewfoot no-italic font-normal tracking-verytight text-footcolor">Timothy Asigbey</p>
                            <p className="text-textnewfoot no-italic font-normal tracking-verytight text-footcolor">devChallenges.io</p>  
                        </div> 
                </div>
                
                </div>
                <div className=" flex justify-between absolute top-102% left-483.08px right-483.08px w-473.83px">     
                    <p className="text-textnewfoot no-italic font-normal tracking-verytight text-footcolor">created by <span className="underline">Timothy Asigbey</span></p>
                    <p className="text-textnewfoot no-italic font-normal tracking-verytight text-footcolor">devChallenges.io</p>
                </div>  
            </div>
                ):(
                    <svg role="status" className=" absolute top-50% left-50% w-8 h-8 text-gray-200 animate-ping dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
                )
            }
        </div>
    )
}

const LOGIN_USER = gql`
    mutation login(
        $email: String!
        $password: String!
    ){
        login(
            loginUser:{
                email:$email
                password:$password
            }
        ){
            id
            email
            token 
        }
    }

`;