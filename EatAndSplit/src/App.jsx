import Button from "./components/Button"
import FormAddFriend from "./components/FormAddFriend"
import FormSplitBill from "./components/FormSplitBill"
import Friendslist from "./components/Friendslist"
import {useState} from 'react'

function App() {

  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleShowAddFriend() {
    setShowAddFriend(!showAddFriend);
  }

  return (
    <div className = 'app'>
        <div className = 'sidebar'>
          <Friendslist />
          {showAddFriend && <FormAddFriend />}
          <Button onClick={handleShowAddFriend}>{showAddFriend ? 'Close' : 'Add friend'}</Button>
        </div>
        <FormSplitBill />
    </div>
  )
}

export default App

