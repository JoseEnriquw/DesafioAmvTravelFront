/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export interface IAuthRouteProps { children: any }

export const AuthRoute: React.FC<IAuthRouteProps> = (props) => {
  const { children } = props
  const auth = getAuth()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const AuthCheck = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoading(false)
      } else {
        console.log('unauthorized')
        navigate('/login')
      }
    })

    return () => { AuthCheck() }
  }, [auth])
  if (loading) return <p>loading ...</p>

  return <>{children}</>
}
