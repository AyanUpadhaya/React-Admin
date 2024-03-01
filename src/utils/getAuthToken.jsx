import React from 'react'

const getAuthToken = () => {
  return localStorage.getItem("writerAuthToken")?.toString();
}

export default getAuthToken