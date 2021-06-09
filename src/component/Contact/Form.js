import './Form.css'

const Form = () => {
    return (
        <div id="form-body">
            <form id="actual-form">
                <label>Name :</label><input type="text" placeholder="Enter your name"></input>
                <label>Email :</label><input type="email" placeholder="Enter your email"></input>
                <label>Phone No. :</label><input type="number" type="text" placeholder="Enter your phone number"></input>
                <label>Anything you want to tell :</label><input type="text" placeholder="More"></input>
            </form>

        </div>
    )
}

export default Form;