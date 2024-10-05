/* eslint-disable react/prop-types */
import Button from "./Button"

function FormSplitBill({selectedFriend}) {
    return (
        <form className='form-split-bill'>
            <h2>Split a bill with {selectedFriend.name}</h2>
            
            <label>💰 Bill value</label>
            <input type='text'></input>

            <label>🙍‍♀️ Your expenses</label>
            <input type='text'></input>

            <label>👭 {selectedFriend.name}`s expense</label>
            <input type='text' disabled></input>

            <label>Who is paying the bill</label>
            <select>
                <option value='user'>You</option>
                <option value='friend'>{selectedFriend.name}</option>
            </select>

            <Button>Split bill</Button>
        </form>
    )
}

export default FormSplitBill
