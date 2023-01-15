import {imageUrl} from "../components/utils/Image";
import React, {useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [inputLogin, setInputLogin] = useState('')
    const [inputName, setInputName] = useState('')
    const [inputLastName, setInputLastName] = useState('')
    const [inputPassword, setInputPassword] = useState('')

    const RegisterUser = () => {
        axios({
            method: 'post',
            url: 'http://localhost:3001/registerUser',
            data: {
                email: inputLogin,
                name: inputName,
                lastName: inputLastName,
                password: inputPassword
            }
        }).then((response) => {
            ReloadButton();
        }).catch((error) => {
            console.log(error);
        });
    }

    const ReloadButton = () => {
        navigate('/');
        window.location.reload(false);
    };

    const LogInButton = () => {
        navigate('/zaloguj');
        // window.location.reload(false);
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
                            <p className="form-label">Imię</p>
                            <div className='flex border-solid border-black border'>
                                <img
                                    className='m-2 p-0.5'
                                    src={imageUrl('icons/FaUserAlt.png')}
                                    width='25px'
                                    height='15px'
                                    alt='syk łyk bis logo'
                                />
                                <input type="text"
                                       className="pl-2 border-l border-gray-150 form-control w-full focus:outline-none focus:shadow-lg"
                                       id="exampleInputPassword1"
                                       placeholder="Jan"
                                       onChange={e => setInputName(e.target.value)}/>
                            </div>
                        </div>
                        <div className="flex flex-col gap-x-3">
                            <p className="form-label">Nazwisko</p>
                            <div className='flex border-solid border-black border'>
                                <img
                                    className='m-2 p-0.5'
                                    src={imageUrl('icons/FaUserAlt.png')}
                                    width='25px'
                                    height='15px'
                                    alt='syk łyk bis logo'
                                />
                                <input type="text"
                                       className="pl-2 border-l border-gray-150 form-control w-full focus:outline-none focus:shadow-lg"
                                       id="exampleInputPassword1"
                                       placeholder="Kowalski"
                                       onChange={e => setInputLastName(e.target.value)}/>
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
                                onClick={RegisterUser}>
                                <p className='font-bold text-white'>Zarejestruj</p>
                            </div>
                            <p className='text-sky-600 cursor-pointer hover:underline'
                               onClick={() => LogInButton()}>Wróć do logowania</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
