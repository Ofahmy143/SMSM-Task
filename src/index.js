import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './header'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode  >
    <Header />
    <div className='container'>
    <App 
    todo = {'go to gym'}
    priority = {'HIGH'}
    />
    <App 
    todo = {'go to school'}
    priority = {'HIGH'}
    />
    <App 
    todo = {'Do homework'}
    priority = {'MEDIUM'}
    />
        <App 
    todo = {'go to gym'}
    priority = {'LOW'}
    />
            <App 
    todo = {'go to gym'}
    priority = {'LOW'}
    />
            <App 
    todo = {'go to gym'}
    priority = {'LOW'}
    />
            <App 
    todo = {'go to gym'}
    priority = {'LOW'}
    />
            <App 
    todo = {'go to gym'}
    priority = {'LOW'}
    />

      
</div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
