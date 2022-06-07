import { React } from 'react';
import { useSelector } from 'react-redux';
import { Loader, Products, Search } from '../components';
import Filter from '../components/Filter';

const Home = () => {

    const dayORnight = useSelector(state=>state.dayORnight)
    const isLoading = useSelector(state=>state.isLoading)

    return (
        <>
            {isLoading && (
                <Loader />
            )}
            <div className={dayORnight ? 'home nightBG container' : 'home dayBG container'}>
                <Search />
                <Filter />
                <Products />
            </div>
        </>
    );
};

export default Home;