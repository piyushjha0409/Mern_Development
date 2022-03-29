import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const LogoutButton = () => {
  const {Logout} = useAuth0();
  return (
    <button onClick={()=> Logout()}>
        Log Out
    </button>
  )
}

export default LogoutButton