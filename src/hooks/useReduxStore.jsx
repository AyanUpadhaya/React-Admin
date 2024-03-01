import React from 'react'
import { useSelector } from 'react-redux'

const useReduxStore = () => {
    const { email } = useSelector((state) => state.auth);


    return {
      email,
    };
}

export default useReduxStore