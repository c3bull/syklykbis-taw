import {imageUrl} from "../components/utils/Image";
import React, {useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [inputLogin, setInputLogin] = useState('')
    const [inputPassword, setInputPassword] = useState('')

    const CheckAuth = () => {
        axios({
            method: 'post',
            url: 'http://localhost:3001/loginUser',
            data: {
                email: inputLogin,
                password: inputPassword
            }
        }).then((response) => {
            localStorage.setItem('token', response.data.token);
            ReloadButton();
        }).catch((error) => {
            console.log(error);
        });
    }

    const ReloadButton = () => {
        navigate('/');
        window.location.reload(false);
    };

    const RegisterButton = () => {
        navigate('/zarejestruj');
    };

    return (
        <div>
            <div className='flex items-center justify-center pt-20 sm:pt-32 min-h-[50vh]'>
                <div className='flex justify-center items-center w-[50vh]'>

                    <img
                        src={imageUrl('syklykbis.png')}
                        width='150px'
                        height='150px'
                        alt='syk łyk bis logo'
                    />
                </div>
                <div className='w-[50vh] p-10'>
                    <form className='flex flex-col gap-5 autofill:bg-yellow-200'>
                        <div className="flex flex-col gap-x-3">
                            <p className="form-label">Email</p>
                            <div className='flex border-solid border-black border '>
                                <img
                                    className='m-2 p-0.5'
                                    src={imageUrl('icons/IoMdMail.png')}
                                    width='25px'
                                    height='15px'
                                    alt='syk łyk bis logo'
                                />
                                <input type="text"
                                       className="pl-2 border-l border-gray-150 form-control w-full focus:outline-none focus:shadow-lg"
                                       id="exampleInputEmail1"
                                       placeholder="jankowalski@email.com"
                                       onChange={e => setInputLogin(e.target.value)}/>
                            </div>
                        </div>
                        <div className="flex flex-col gap-x-3">
                            <p className="form-label">Hasło</p>
                            <div className='flex border-solid border-black border'>
                                <img
                                    className='m-2 p-0.5'
                                    src={imageUrl('icons/FaLock.png')}
                                    width='25px'
                                    height='15px'
                                    alt='syk łyk bis logo'
                                />
                                <input type="password"
                                       className="pl-2 border-l border-gray-150 form-control w-full focus:outline-none focus:shadow-lg"
                                       id="exampleInputPassword1"
                                       placeholder="♥♥♥♥♥♥♥♥"
                                       onChange={e => setInputPassword(e.target.value)}/>
                            </div>
                        </div>
                        <div className='flex flex-col items-center gap-y-4 justify-center'>
                            <div
                                className="rounded-full flex items-center justify-center w-3/4 bg-primary cursor-pointer h-10 hover:shadow-lg"
                                onClick={CheckAuth}>
                                <p className='font-bold text-white'>Zaloguj</p>
                            </div>
                            <p className='text-sky-600 cursor-pointer hover:underline'
                               onClick={() => RegisterButton()}>Nie masz jeszcze konta? Zarejestruj!</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
