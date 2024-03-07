import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import './index.css'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/all' element={<Catalog />} />
      </Routes>
    </>
  )
}

export default App
