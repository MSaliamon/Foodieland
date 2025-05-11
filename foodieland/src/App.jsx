import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Layout from './pages/Layout/Layout'
import Blog from './pages/Blog/Blog'
import Recipe from './pages/Recipe/Recipe'
import Contact from './pages/Contact/Contact'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'

function App() {

  return (
    <>
      <BrowserRouter basename='/Foodieland/'>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
