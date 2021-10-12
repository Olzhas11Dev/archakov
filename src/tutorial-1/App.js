import ProfileClass from "./components/ProfileClass"
import ProfileFunc from "./components/ProfileFunc"

function App() {
  return (
    <div className="App">
      <ProfileFunc name="Вася Пупкин" registredAt={new Date(2021, 5, 22)} />
      <ProfileClass name="Вася Пупкин" registredAt={new Date(2021, 5, 22)} />
    </div>
  )
}

export default App
