import React,{useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

export const PrivateRoute = (props) => {
    const navigate=useNavigate()
    const {Component}= props
  
    useEffect(()=>{
        let login=localStorage.getItem('login')
        if(!login){
            navigate('/signup')
        }
    },[])
  return (
      <>
      <Component />
    
    </>
  )
}
