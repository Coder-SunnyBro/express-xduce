import './App.css'
import Navbar from './components/navbar'
import Carousel from './components/carousel'

const App = () => {
  return (
    <>
    <div className='h-full w-full border'>
      <Navbar />
      <Carousel/>
    </div>
    </>
  )
}

export default App