import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Quiz from './Pages/Quiz/Quiz'
import Admin from './Pages/Admin/Admin'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
      <div className='main'>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
          <Footer />
        </Router>
      </div>

    </>
  )
}

export default App
