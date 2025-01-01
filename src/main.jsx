import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import {
  QueryClient, QueryClientProvider,
} from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast';
import store from './Redux/Store/store.js'
import { Provider } from 'react-redux'

const queryClient = new QueryClient()


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <App />
        </Provider>
        <Toaster></Toaster>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
)
