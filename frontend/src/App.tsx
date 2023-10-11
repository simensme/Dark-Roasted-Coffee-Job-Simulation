import Coffee from './components/Coffee.tsx'
import Navigation from './components/Navigation.tsx'
import Menu from './components/Menu.tsx'

function App() {
  return (
    <>
    <div id="main">
      <div id="glow-effect"></div>
    </div>
    <Navigation />
    <Coffee />
    <Menu />
    </>
  )
}
export default App