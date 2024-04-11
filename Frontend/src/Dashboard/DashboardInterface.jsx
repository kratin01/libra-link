import { Outlet } from 'react-router-dom'
import MySidebar from './Sidebar'

const DashboardInterface = () => {
  return (
    <div className='flex gap-4 flex-col md:flex-row'>
      <MySidebar/>
      <Outlet/>
    
    </div>
  )
}

export default DashboardInterface