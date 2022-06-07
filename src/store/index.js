import { configureStore } from '@reduxjs/toolkit'
import loged from './slices/loged.slice';
import dayORnight from './slices/dayORnight.slice';
import isLoading from './slices/isLoading.slice';
import products from './slices/products.slice';
import product from './slices/product.slice'
import categorys from './slices/categorys.slice';
import stock from './slices/stock.slice';
import categorysName from './slices/categorysName.slice';

export default configureStore({
    reducer: {
        loged,
        dayORnight,
        isLoading,
        products,
        product,
        categorys,
        stock,
        categorysName
    }
})
