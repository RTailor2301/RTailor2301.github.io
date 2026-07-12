import { Route, Routes } from 'react-router-dom'
import StandardLayout from './views/standard/StandardLayout'
import Home from './pages/Home'
import ItemDetail from './pages/ItemDetail'

export default function App() {
  return (
    <Routes>
      <Route element={<StandardLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/:collection/:slug" element={<ItemDetail />} />
      </Route>
    </Routes>
  )
}