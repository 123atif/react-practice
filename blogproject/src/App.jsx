import { useEffect, useState } from 'react';
import './index.css'
import { useDispatch } from "react-redux"
import authService from './appwrite/auth';
import { login, logout } from './store/slices/authSlice';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
function App() {


  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  // console.log(dispatch);


  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        }
        else {
          dispatch(logout())
        }
      })
      .finally(() => {
        setLoading(false)
      })

  }, [dispatch]);

  return (

    <div>

      {!loading ? (<div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
        <div className='w-full block'>
          <Header />
          <main>
            Appwrite  {/* <Outlet /> */}
          </main>
          <Footer />
        </div>
      </div>) : (null)}

    </div>
  )
}

export default App
