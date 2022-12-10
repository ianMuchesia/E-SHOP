import React from 'react'
import {Alert} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { showNotification } from '../store/uiSlice'

//import '@fontsource/roboto/300.css';
const Notification = ({type, message}) => {
    const dispatch = useDispatch()

    const notification = useSelector(state=>state.ui.notification)
   

    const handleClose=()=>{
        dispatch(showNotification({
            open:false,
        }))
    }
  return (
    <div className='fixed z-[50] '>
       {notification.open && <Alert severity={type} onClose={handleClose}>{message}</Alert>}
    </div>
  )
}

export default Notification