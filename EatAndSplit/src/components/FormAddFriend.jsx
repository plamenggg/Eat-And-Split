import Button from "./Button"

function FormAddFriend() {
    return (
        <form className = 'form-add-friend'>
            <label>👭Friend name</label>
            <input type='text'></input>

            <label> 📸 Image URL</label>
            <input type='text'></input>

            <Button>Add</Button>
        </form>
    )
}

export default FormAddFriend
