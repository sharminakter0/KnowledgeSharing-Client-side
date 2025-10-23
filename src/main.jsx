import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './Component/router'
import AuthProvider from './Provider/AuthProvider'
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { store } from './redux/store';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <RouterProvider router={router}
          fallbackElement={<p>Loading....</p>}
        />
        <Toaster position="top-right" reverseOrder={false} /> 
      </AuthProvider>
    </Provider>
  </StrictMode>,
)