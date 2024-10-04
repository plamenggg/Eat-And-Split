import Button from "./components/Button"
import FormAddFriend from "./components/FormAddFriend"
import FormSplitBill from "./components/FormSplitBill"
import Friendslist from "./components/Friendslist"

function App() {
  return (
    <div className = 'app'>
        <div className = 'sidebar'>
          <Friendslist />
          <FormAddFriend />
          <Button>Add friend</Button>
        </div>
        <FormSplitBill />
    </div>
  )
}

export default App

