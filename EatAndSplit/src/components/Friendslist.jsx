/* eslint-disable react/prop-types */
import Friend from "./Friend";

function Friendslist({friends}) {


    return (
        <ul>
           {friends.map(friend => <Friend key = {friend.id} friend={friend}/> )}
        </ul>
    )
}

export default Friendslist
