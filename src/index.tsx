import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import App from 'features/App'
import { BrowserRouter } from 'react-router-dom'
import { store } from 'store/store'
import { Provider } from 'react-redux'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
)
