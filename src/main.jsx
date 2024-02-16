import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
// import Store from './Redux/store.js' // if u want import store with out {} u have to make it export default
import {Store} from './Redux/store.js'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(

<BrowserRouter>
    <Provider store={Store}>
        <App />
    </Provider>
</BrowserRouter>

)