

import Home from './pages/Home/Home';
import Layout from './pages/Layout/Layout'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  return (
    <BrowserRouter>
     <Layout>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element="Page not found" />
        </Routes>
    </Layout>
    </BrowserRouter>
   
  )
}

export default App
