import React from 'react';
import Jacket from '../assets/jacket.svg';
import Shirt from '../assets/shirt.svg';
import Pant from '../assets/pant.svg';
import Shoes from '../assets/shoes.svg';
import Dress from '../assets/dress.svg';
import Accessories from '../assets/accessories.svg';
import Skirt from '../assets/skirt.svg';
import More from '../assets/more.svg';

export default function Category() {
    const category = [
        {
            name: 'Jacket',
            image: Jacket
        },
        {
            name: 'Shirt',
            image: Shirt
        },
        {
            name: 'Pant',
            image: Pant
        },
        {
            name: 'Shoes',
            image: Shoes
        },
        {
            name: 'Dress',
            image: Dress
        },
        {
            name: 'Accessories',
            image: Accessories
        },
        {
            name: 'Skirt',
            image: Skirt
        },
    ];

    return (
        <div>
            <div className='flex my-8 gap-16 justify-center'>
                {category.map((item) => (
                    <button key={item.name} className="opacity-65 ">
                        <div key={item.name} className="">
                            <img src={item.image} alt={item.name} className="h-12 w-12 drop-shadow-2xl" />
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}