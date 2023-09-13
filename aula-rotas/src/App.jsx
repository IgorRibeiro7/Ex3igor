import './App.css'
import { Outlet} from 'react-router-dom'
import  Menu from './componentes/menu'
import Rodape from './componentes/rodape'
function App(){

  return (
    <>
    <Menu/>
    <Outlet/>
    <Rodape/> 
    </>
  )
}
export default App

