import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import SignPage from './components/Authentication/SignPage'
import './index.css'

function App() {

  return (
    <>
      <Navbar />
      <SignPage />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/all' element={<Catalog />} />
      </Routes>
    </>
  )
}

export default App
