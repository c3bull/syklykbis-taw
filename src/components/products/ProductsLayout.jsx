import React, { useState } from 'react';

import { BottleModal} from "../modals/BottleModal";
import allProductsData, {getProductsByCategory} from "../../data/allProducts";
import { imageUrl} from "../utils/Image";
import { ClassNames} from "../utils/UtilFunctions";


function ProductsLayout({ categoryUrl, className, color }) {
    const [bottleIndex, setBottleIndex] = useState(-1);

    function BottleDisplay({ id, bottle, name }) {
        return (
            <article>
                <div
                    className='flex cursor-pointer items-center justify-center p-3'
                    onClick={() => {
                        setBottleIndex(id);
                    }}
                >
                    <div
                        className={ClassNames(
                            'rounded from-transparent',
                            color,
                            'to-transparent duration-300 hover:bg-gradient-to-t flex flex-col items-center'
                        )}
                    >
                        <img
                            src={imageUrl(`bottles/${bottle}.png`)}
                            alt={name}
                            className='h-auto w-32 py-2 px-6 duration-300 hover:rotate-2 sm:w-44'
                        />
                        <p className='text-center font-medium uppercase'>{name}</p>
                    </div>
                </div>
            </article>
        );
    }

    return (
        <div className='flex h-auto items-center justify-center pt-16 pb-24 md:pt-24 lg:pt-36'>
            {bottleIndex !== -1 && (
                <BottleModal
                    data={allProductsData[bottleIndex]}
                    onClick={() => {
                        setBottleIndex(-1);
                    }}
                />
            )}
            <div
                className={ClassNames('grid grid-cols-1', className, 'gap-1 sm:gap-6')}
            >
                {getProductsByCategory(categoryUrl).map(({ id, bottle, name }) => (
                    <BottleDisplay id={id} bottle={bottle} name={name} key={id} />
                ))}
            </div>
        </div>
    );
}

export default ProductsLayout;
