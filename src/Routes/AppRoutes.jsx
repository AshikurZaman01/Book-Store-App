import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Pages/Home/Home'
import Orders from '../Components/Pages/Orders/Orders'
import Cart from '../Components/Pages/Cart/Cart'
import Checkout from '../Components/Pages/Checkout/Checkout'
import Dashboard from '../Components/Pages/Dashboard/Dashboard'


const AppRoutes = () => {
    return (

        <Routes>
            <Route path='/' element={<Home></Home>} />
            <Route path='/orders' element={<Orders></Orders>} />
            <Route path='/cart' element={<Cart></Cart>} />
            <Route path='/checkout' element={<Checkout></Checkout>} />
            <Route path='/dashboard' element={<Dashboard></Dashboard>} />

        </Routes>

    )
}

export default AppRoutes