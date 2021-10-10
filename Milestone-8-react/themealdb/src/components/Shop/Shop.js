import { useEffect, useState } from 'react'
import Meal from '../Meal/Meal'
import './Shop.css'
import Cart from './../Cart/Cart';
import { addToDb,getStoredCart } from '../../utilis/fakedb';

const Shop = props => {

    const [meals, setMeals] = useState([]);
    const [searchMeals, setSearchMeals] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('https://themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => {
                setMeals(data.meals);
                setSearchMeals(data.meals);
            });
        return ()=>{
            setMeals([]);
        }
    }, [])

    useEffect(() => {
        if(meals.length)
        {
            const savedCart = getStoredCart();
            const storedCart = [];

            for (const id in savedCart )
            {
                const addMeals = meals.find(meal=>meal.idMeal===id);
                if(addMeals)
                {
                    addMeals.quentity=savedCart[id];
                    storedCart.push(addMeals);
                }
            }
            setCart(storedCart);
        }
    },[meals])


    const handleAddToCart=(meals)=>{
        const newCart = [...cart,meals];
        setCart(newCart);
        addToDb(meals.idMeal);
    }

    const handleSearch=(event)=>{
        const searchText = event.target.value;
        const matchMeals = meals.filter(m=>m.strMeal.toLowerCase().includes(searchText.toLowerCase()));
        setSearchMeals(matchMeals);
    }

    return (

        <>
            <div className="search-container">
                <input
                onChange={handleSearch}
                    type="text" placeholder="Search Products"
                     />
            </div>

            <div className="shop-container">
                <div className="meal-container">
                    {
                        searchMeals.map(meal => <Meal key={meal.idMeal} meal={meal} handleAddToCart={handleAddToCart}></Meal>)
                    }
                </div>

                <div className="cart-container">
                    <Cart cart={cart} value={1}></Cart>
                </div>
            </div>
        </>
    )
}

export default Shop
