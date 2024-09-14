import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { CodeContext } from './context/Context.jsx'

createRoot(document.getElementById('root')).render(

<CodeContext>
    <App />
</CodeContext>

)

