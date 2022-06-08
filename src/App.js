import './App.css';
import './styles/loader.css'
import './styles/nav.css'
import './styles/moonNight.css'
import './styles/productList.css'
import './styles/productsContainer.css'
import './styles/search.css'
import './styles/products.css'
import './styles/buttonBack.css'
import './styles/productItem.css'
import './styles/filter.css'
import './styles/login.css'
import './styles/logOut.css'
import './styles/purchases.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { ProtectedRoutes, Nav, MoodNight } from './components';
import { Home, Login, Products, Purchases } from './pages';
import { useSelector } from 'react-redux';

function App() {

  const dayORnight = useSelector(state=>state.dayORnight)

  return (
      <HashRouter>
        <div className={dayORnight ? 'App nightBG' : 'App dayBG'}>
          <Nav />
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path='/login' element={<Login />}/>
            <Route path='/products/:id' element={<Products />}/>

            <Route element={<ProtectedRoutes />}>
              <Route path='/purchases' element={<Purchases />}/>
            </Route>

          </Routes>
          <MoodNight />
        </div>
      </HashRouter>
  );
}

export default App;
