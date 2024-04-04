import './App.css'
import Bottom from './components/bottom'
import Footer from './components/footer'
import Middle from './components/middle'
import Top from './components/top'

function App() {
  return (
    <div className='h-auto w-auto overflow-hidden'>
      <Top />
      <Middle />
      <Bottom />
      <Footer />


    </div>
  )
}

export default App
