import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from 'helper/authContex'

const MinimalLayout = () => {
  const auth = useAuth()

  if(!!auth.user){
    return <Navigate to="/" />
  }
  
  return (
    <>
      <Outlet/>
    </>
  )
}

export default MinimalLayout