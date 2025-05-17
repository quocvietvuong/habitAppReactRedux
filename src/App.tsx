import { Provider } from "react-redux"
import './App.css'
import store from "./store/store"

function App() {
  return (
    <Provider store={store}>
      <div>Hey please subscribe to Vinnie!!!!</div>
    </Provider>
  )
}

export default App
