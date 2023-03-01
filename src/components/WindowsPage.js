import React from 'react'
import { useParams } from 'react-router-dom'
import { windowPages } from '../utils/helper';

const WindowsPage = () => {
    const {id} = useParams();
    const window = windowPages;
  return (
    <div className ="flex justify-center">
        <img src= {window[id].url} alt="shopping_windows"/>
    </div>
    
  )
}

export default WindowsPage;