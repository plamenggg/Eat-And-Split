import Button from "./Button"

function FormSplitBill() {
    return (
        <form className='form-split-bill'>
            <h2>Split a bill with X</h2>
            
            <label>💰 Bill value</label>
            <input type='text'></input>

            <label>🙍‍♀️ Your expenses</label>
            <input type='text'></input>

            <label>👭 X expense</label>
            <input type='text' disabled></input>

            <label>Who is paying the bill</label>
            <select>
                <option value='user'>You</option>
                <option value='friend'>X</option>
            </select>

            <Button>Split bill</Button>
        </form>
    )
}

export default FormSplitBill
