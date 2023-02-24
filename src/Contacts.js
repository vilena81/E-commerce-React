import { useState } from "react";


export default function Contacts() {

    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${name}`);
    }
    return (
        <div className="contact">
            <div className="contacts">
                <p>Phone: (800) 806-6453</p>
                <p>email: kdshgcfk@gmail.com</p>
                <p className="coment">Please leave your comments here:<br />
                    <textarea name="comment" cols="40" rows="3" placeholder="Please enter the comment here" className="area"></textarea></p>

                <form onSubmit={handleSubmit}>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    <input type={"submit"} />
                </form>
            </div>

        </div>
    )
}