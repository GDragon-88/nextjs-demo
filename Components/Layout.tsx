import React, { useCallback, useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { resizeWindow, selectCommonState, setError, setLoading, setSuccess } from '../redux/globalSlice'
import { useSelector, useDispatch } from 'react-redux'
import Loading from '../Components/Loading'
import Head from 'next/head'
import { ToastContainer, toast } from 'react-toastify'
import { getMe, selectAuthState } from '../redux/authSlice'
import useDebounce from '../common/useDebounce'

function Layout({ children }: any) {
  const { loading, error, success } = useSelector(selectCommonState);
  const dispatch = useDispatch<any>();
  const { token } = useSelector(selectAuthState)

  const resizeWindowDispatch = useDebounce((width: number) => {
    dispatch(resizeWindow(width));
  }, 200);

  useEffect(()=>{
    dispatch(resizeWindow(window.innerWidth))
    return ()=>{}
  },[dispatch])

  useEffect(() => {
    const handleResize = () => {
      resizeWindowDispatch(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [resizeWindowDispatch]);

  useEffect(() => {
    let timer1 = setTimeout(() => dispatch(setLoading(false)), 1000);
    return () => {
      clearTimeout(timer1);
    };
  }, [dispatch]);


  const init = useCallback(async () => {
    if (token) {
      await dispatch(getMe(token))
    }
  }, [token, dispatch])

  useEffect(() => {
    init()
  }, [init])

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    }
    setTimeout(() => {
      dispatch(setError(''));
    }, 3000);
  }, [error, dispatch])

  useEffect(() => {
    if (success) {
      toast.success(success, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    }
    setTimeout(() => {
      dispatch(setSuccess(''));
    }, 3000);
  }, [success, dispatch])

  return (
    <>
      <ToastContainer />
      <Head>
        <title>NextJS-DV</title>
        <meta name='description' property='dv' content='sample web coding by nextjs' key={'dv'}></meta>
      </Head>
      <Navbar />
      {loading ? <Loading /> : null}
      <main style={{ padding: '20px', overflowWrap: "break-word" }}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout