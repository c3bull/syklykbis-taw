import {useAuth0} from "@auth0/auth0-react";
import {Disclosure, Menu, Transition} from '@headlessui/react';
import React, {Fragment} from 'react';

import {imageUrl} from "../utils/Image";
import {Link} from "react-router-dom";
import BottleModalTableLabels from "../modals/BottleModalTableLabels";
import BottleModalTableValues from "../modals/BottleModalTableValues";
import Modal from "../modals/Modal";
import {decodeToken, isExpired} from "react-jwt";
import axios from "axios";

export default function Navbar() {
    const {user, loginWithRedirect, logout} = useAuth0();
    const isExp = isExpired(localStorage.getItem('token'))
    const decodedToken = decodeToken(localStorage.getItem('token'))

    const Login = () => {
        return (
            <Modal title="zaloguj" classes="items-center">
                <div className="flex flex-col items-center justify-center md:flex-row md:py-5">

                </div>
                <div className="flex justify-end">
                    <button
                        className="w-full rounded bg-primary px-10 py-4 font-semibold uppercase text-white"

                    >
                        Zamknij
                    </button>
                </div>
            </Modal>
        )
    }

    const LogOutButton = () => {
        axios({
            url: 'http://localhost:3001/api/user/logout/:userId',
            method: 'delete',
            data: {
                userId: decodedToken.userId
            }
        })
            .then((response) => {
                console.log('resp ' + JSON.stringify(response));
                if (response.data.deletedCount === 1) {
                    localStorage.removeItem('token');
                    window.location.reload(false);
                }
            })
            .catch(() => {
                console.log('Internal server error');
            });
    };

    const links = [
        {
            id: 1,
            link: '/produkty',
            name: 'Produkty',
            current: true
        },
        {
            id: 2,
            link: '/o-nas',
            name: 'O nas',
            current: false
        },
        {
            id: 3,
            link: '/kontakt',
            name: 'Kontakt',
            current: false
        },
        {
            id: 4,
            link: '/cennik',
            name: 'Cennik',
            current: false
        },
        {
            id: 5,
            link: '/zamow',
            name: 'Złóż zamówienie',
            current: false
        }
    ];

    return (
        <Disclosure as='nav' className='fixed top-0 z-30 w-full bg-gray-800'>
            {({open}) => (
                <>
                    <div className='mx-auto max-w-7xl px-2 uppercase sm:px-6 lg:px-8'>
                        <div className='relative flex h-16 items-center justify-between'>
                            <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                                {/* Mobile menu button */}
                                <Disclosure.Button
                                    className='inline-flex items-center justify-center rounded-md p-2 ml-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                                    <span className='sr-only'>Open main menu</span>
                                    {open ? (
                                        <div className='flex items-center' aria-hidden='true'>
                                            <img
                                                src={imageUrl('icons/FaTimes.png')}
                                                width='21px'
                                                height='21px'
                                                alt='zamknij nawigację'
                                            />
                                        </div>
                                    ) : (
                                        <div className='flex items-center' aria-hidden='true'>
                                            <img
                                                src={imageUrl('icons/FaBars.png')}
                                                width='21px'
                                                height='21px'
                                                alt='rozwiń nawigację'
                                            />
                                        </div>
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className='flex flex-1 items-center justify-center sm:text-center'>
                                <div className='flex shrink-0 items-center'>
                                    <Link to={'/'}>
                                        <a className='cursor-pointer border-hidden'>
                                            <img
                                                className='block h-16 w-auto lg:hidden'
                                                src={imageUrl('syklykbis.png')}
                                                alt='Logo'
                                            />
                                        </a>
                                    </Link>
                                    <Link to={'/'}>
                                        <a className='cursor-pointer border-hidden'>
                                            <img
                                                className='hidden h-16 w-auto lg:block'
                                                src={imageUrl('syklykbis.png')}
                                                alt='Logo'
                                            />
                                        </a>
                                    </Link>
                                </div>
                                <div className='hidden sm:ml-6 sm:block'>
                                    <div className='flex space-x-4'>
                                        {links.map((item) => (
                                            <Link key={item.id} to={item.link}>
                                                <a
                                                    className='flex items-center rounded-md border-hidden px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
                                                    aria-current={item.current ? 'page' : undefined}
                                                >
                                                    {item.name}
                                                </a>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div
                                className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                                {/* Profile dropdown */}
                                {!isExp ? (
                                    <Menu as='div' className='relative ml-3'>
                                        <div>
                                            <Menu.Button
                                                className='flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
                                                <span className='sr-only'>Open user menu</span>
                                                <img
                                                    src={imageUrl('icons/defaultAvatar.png')}
                                                    width='50px'
                                                    height='50px'
                                                    alt='twoje zamówienia'
                                                />
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter='transition ease-out duration-100'
                                            enterFrom='transform opacity-0 scale-95'
                                            enterTo='transform opacity-100 scale-100'
                                            leave='transition ease-in duration-75'
                                            leaveFrom='transform opacity-100 scale-100'
                                            leaveTo='transform opacity-0 scale-95'
                                        >
                                            <Menu.Items
                                                className='absolute right-0 mt-2 w-48 origin-top-right rounded-md border-hidden bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                                                <Menu.Item>
                                                    <Link to='/twoje-zamowienia'>
                                                        <div
                                                            className='block cursor-pointer rounded border-hidden px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                                                            <div className='flex items-center'>
                                                                <div className='flex items-center' aria-hidden='true'>
                                                                    <img
                                                                        src={imageUrl('icons/RiShoppingBasket2Line.png')}
                                                                        width='13px'
                                                                        height='13px'
                                                                        alt='twoje zamówienia'
                                                                    />
                                                                </div>
                                                                <p className='pl-1 font-medium'>
                                                                    Twoje zamówienia
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </Menu.Item>
                                                <Menu.Item>
                                                    <a
                                                        className='cursor-pointer block rounded border-hidden px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                                                        onClick={() => {
                                                            LogOutButton();
                                                        }}
                                                    >
                                                        <div className='flex items-center'>
                                                            <div className='flex items-center' aria-hidden='true'>
                                                                <img
                                                                    src={imageUrl('icons/RiLogoutCircleRLine.png')}
                                                                    width='13px'
                                                                    height='13px'
                                                                    alt='wyloguj'
                                                                />
                                                            </div>
                                                            <a className='block border-hidden pl-1 text-sm font-medium text-gray-700'>
                                                                Wyloguj
                                                            </a>
                                                        </div>
                                                    </a>
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>)
                                    : false}
                                {isExp ? <Link to='/zaloguj'>
                                    <a className='cursor-pointer border-hidden text-white font-semibold'>
                                        Zaloguj
                                    </a>
                                </Link> : false}
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className='sm:hidden'>
                        <div className='space-y-1 px-2 pt-2 pb-3 uppercase'>
                            {links.map((item) => (
                                <Disclosure.Button
                                    key={item.id}
                                    as='a'
                                    href={item.link}
                                    className='block rounded-md border-hidden px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
