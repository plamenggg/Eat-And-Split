import { initialFriends } from "../App";
import Friend from "./Friend";

function Friendslist() {

    const friends = initialFriends;


    return (
        <ul>
           {friends.map(friend => <Friend key = {friend.id} friend={friend}/> )}
        </ul>
    )
}

export default Friendslist
