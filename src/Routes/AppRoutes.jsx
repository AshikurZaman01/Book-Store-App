import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Pages/Home/Home'


const AppRoutes = () => {
    return (

        <Routes>
            <Route path='/' element={<Home></Home>} />

        </Routes>

    )
}

export default AppRoutes