import { ChakraProvider, extendTheme, } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      // ...
      900: "#000000",
    },
  },
})



ReactDOM.createRoot(document.getElementById('root')).render(

    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>

)
