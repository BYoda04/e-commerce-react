import { configureStore } from '@reduxjs/toolkit'
import loged from './slices/loged.slice';
import dayORnight from './slices/dayORnight.slice';
import isLoading from './slices/isLoading.slice';
import products from './slices/products.slice';
import product from './slices/product.slice'
import categorys from './slices/categorys.slice';
import stock from './slices/stock.slice';
import categorysName from './slices/categorysName.slice';
import user from './slices/user.slice';
import purchases from './slices/purchases.slice';
import modal from './slices/modal.slice';
import cart from './slices/cart.slice';
import quantity from './slices/quantity.slice';

export default configureStore({
    reducer: {
        loged,
        dayORnight,
        isLoading,
        products,
        product,
        categorys,
        stock,
        categorysName,
        user,
        purchases,
        modal,
        cart,
        quantity
    }
})
