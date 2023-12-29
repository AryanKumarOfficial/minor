"use client";
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { inject } from '@vercel/analytics';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import toast from 'react-hot-toast';
import { Provider } from 'react-redux';
import { store, persistor } from './Redux/store';
import { PersistGate } from "redux-persist/integration/react";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

const Root = () => {

  useEffect(() => {

    const timer = setTimeout(() => {
      toast.dismiss();
    }, 2000);

    return () => clearTimeout(timer);

  }, []);

  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </>
  );
}
root.render(<Root />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
inject();
