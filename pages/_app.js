import '../styles/globals.css'
import Head from 'next/head';
import { useState } from 'react';
//Redux import
import user from '../reducers/user'
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
const store = configureStore({
  reducer: {user},
 });
 //

function MyApp({ Component, pageProps }) {

  return( 
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )}

export default MyApp
