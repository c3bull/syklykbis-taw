import {ClassNames} from "../utils/UtilFunctions";
import {imageUrl} from "../utils/Image";
import React from 'react';


export default function YourOrdersColumn({
                                             icon,
                                             value,
                                             classes,
                                             copySign,
                                             idClasses,
                                             onClickDelete,
                                         }) {

    return (
        <div className="my-1 flex items-center border border-gray-800 lg:my-0 lg:justify-center">
            <div className="flex items-center border-r border-gray-800 bg-orange-50 p-2 lg:hidden lg:justify-center">
                {icon}
            </div>
            <div
                className={ClassNames(
                    'relative w-full text-center flex items-center justify-center',
                    `${classes}`
                )}
            >
                {!onClickDelete && <div className={ClassNames(`${idClasses}`)}>{value}</div>}
                {copySign && (
                    <div
                        className="cursor-pointer "
                        onClick={() => {
                            {
                                if (typeof value === 'string') {
                                    navigator.clipboard.writeText(value);
                                }
                            }
                        }}
                    >
                        <div className='w-4 h-4 flex items-center mb-1 duration-100 hover:scale-110 active:border'>
                            <img
                                src={imageUrl('icons/AiOutlineCopy.png')}
                                width='16px'
                                height='16px'
                                alt='kopiuj'
                            />
                        </div>
                    </div>
                )}
                {onClickDelete && (
                    <div
                        className="cursor-pointer "
                        onClick={() => {
                            {
                                console.log('value ',value)
                            }
                        }}
                    >
                        <div className='w-4 h-4 flex items-center duration-100 hover:scale-110 active:border'>
                            <img
                                src={imageUrl('icons/faTimes.png')}
                                width='16px'
                                height='16px'
                                alt='kopiuj'
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
