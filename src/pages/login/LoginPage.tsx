/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable react/react-in-jsx-scope */
import { Box, Button } from '@material-ui/core'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export interface ILoginPageProps {}

const LoginPage: React.FC<ILoginPageProps> = (props) => {
  const auth = getAuth()
  const navegate = useNavigate()
  const [authing, setAuthing] = useState(false)

  const signInWithGoogle = async () => {
    setAuthing(true)
    signInWithPopup(auth, new GoogleAuthProvider())
      .then(response => {
        console.log(response.user.uid)
        navegate('/')
      }).catch(error => {
        console.log(error)
        setAuthing(false)
      })
  }
  return (
        <Box style={{ display: 'block', width: '800px', height: '800px', alignItems: 'center', justifyItems: 'center', alignContent: 'center', marginLeft: '50%', marginTop: '50%' }}>
            <p>Login</p>
            <Button aria-label="delete" variant="contained" color="primary" onClick={async () => { await signInWithGoogle() }} disabled={authing}>
              Sign in with Google
            </Button>
        </Box>
  )
}

export default LoginPage
