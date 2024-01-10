import './App.css'
import { SidebarProvider } from './hooks/SidebarProvider'
import PrimaryLayout from './layout/PrimaryLayout'

function App() {
  return (
    <SidebarProvider>
      <PrimaryLayout />
    </SidebarProvider>
  )
}
export default App
