import { useState } from 'react'
import { Provider } from 'react-redux'
import Resume from './features/resume/Resume'
import store from './redux/store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Resume />
      </Provider>
    </div>
  )
}

export default App
