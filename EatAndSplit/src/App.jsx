import { initialFriends } from "./App"
import Button from "./components/Button"
import FormAddFriend from "./components/FormAddFriend"
import FormSplitBill from "./components/FormSplitBill"
import Friendslist from "./components/Friendslist"
import {useState} from 'react'

function App() {

  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleShowAddFriend() {
    setShowAddFriend(!showAddFriend);
  }

  function handleAddFriend(friend) {
    setFriends(friends => [...friends, friend]);
    setShowAddFriend(false);
  }

  return (
    <div className = 'app'>
        <div className = 'sidebar'>
          <Friendslist friends={friends}/>
          {showAddFriend && <FormAddFriend onAddFrined={handleAddFriend}/>}
          <Button onClick={handleShowAddFriend}>{showAddFriend ? 'Close' : 'Add friend'}</Button>
        </div>
        <FormSplitBill />
    </div>
  )
}

export default App

