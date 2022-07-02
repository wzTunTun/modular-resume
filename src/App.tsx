import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home/home'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
