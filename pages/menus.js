import { useState, useEffect } from "react";
import Instance from '../utils/axiosInstance';
import Image from 'next/image';

const menus = [
    {
        "id": 1,
        "ingredients": [
            "4 cups vegetable broth",
            "1 tablespoon miso paste",
            "1 large carrot",
            "1/4 cup onion",
            "1 packet ramen",
            "1/2 cup baby bella mushrooms sliced",
            "1 cup snowpeas",
            "salt",
            "2 eggs",
            "green onion"
        ],
        "status": "available",
        "name": "Japanese Ramen",
        "price": 110,
        "category": "non-veg",
        "weight": 310
    },
    {
        "id": 2,
        "ingredients": [
            "3 tablespoons olive oil",
            "3 cloves garlic, peeled",
            "1/2 pound shelled sea scallops",
            "1/2 pound uncooked medium shrimp, peeled and deveined",
            "salt and ground black pepper to taste",
            "1 pinch red pepper flakes",
            "1/2 cup dry white wine",
            "1/2 lemon, juiced",
            "1 bunch fresh parsley, finely chopped",
            "1 quart fish stock, or more as needed",
            "2 tablespoons butter",
            "1 tablespoon olive oil",
            "1 shallot, finely chopped",
            "1 (12 ounce) package Arborio rice",
            "1/2 cup dry white wine",
            "1 tablespoon extra-virgin olive oil"
        ],
        "status": "available",
        "name": "Italian Shrimp and Scallop Risotto",
        "price": 230,
        "category": "non-veg",
        "weight": 350
    }
]

export default function Menus() {

    const [ menuItems, setMenuItems ] = useState([]);
    console.log("menu-items: ", menuItems);

    useEffect(() => {
        Instance.get('api/menus/')
             .then(res => setMenuItems(res.data))
             .catch(err => console.log(err));
    }, [])  // render first time only

    return (
        <ul className="sm:m-auto sm:w-5/6 sm:rounded-sm border-gray-300 border-r-2 border-l-2 h-full w-full">
            { menuItems.map(menu => (
                <div key={menu.id} className="m-10 px-10 rounded-md border-gray-700 shadow-md">
                    <li className="list-none flex sm:flex-row flex-col">
                        <div className="bg-white shadow-xl">
                            <Image
                                src={menu.photo}
                                alt="menu-photo"
                                width={200}
                                height={200}
                                quality={50}
                                className="rounded-md sm:object-contain object-cover"
                            />
                        </div>
                        <div className="px-3 py-2 text-center w-full">
                            <h4 className="font-semibold tracking-wider text-center">{menu.name}</h4>
                            <button className="pointer-events-auto:">Ingredients:</button>
                            <ul className="grid sm:grid-cols-3 text-justify sm:text-sm text-xs grid-cols-2 gap-x-3 gap-y-1 list-decimal list-inside">
                                {menu.ingredients.map(item => <li className="" key={item}>{ item }</li>)}
                            </ul>
                        </div>
                    </li>
                </div>
            ))}
        </ul>
    )
}
