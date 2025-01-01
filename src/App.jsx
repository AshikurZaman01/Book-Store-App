import Footer from "./Components/Pages/Footer/Footer"
import Navbar from "./Components/Pages/Navbar/Navbar"
import AppRoutes from "./Routes/AppRoutes"

const App = () => {
  return (
    <div>
      <Navbar></Navbar>

      <main className='min-h-screen  max-w-screen-xl font-primary mx-auto px-4 py-2 '>
        <AppRoutes></AppRoutes>
      </main>

      <Footer></Footer>
    </div>
  )
}

export default App