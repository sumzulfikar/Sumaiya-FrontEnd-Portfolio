import {useState} from "react";

const Contact=()=>{
    const [formData,setFormData]=useState({name:"",email:"",message:""});

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

const handleSubmit=event=>{
    event.preventDefault();
    setFormData({name:"",email:"",message:""});


}

return(
    <>
    <h2>Contact me</h2>
<form action="mailto:sumaiya.zulfikar29@gmail.com" method="post" encType="text/plain" onSubmit={handleSubmit}>
<label>Name:
    <input type="text" id="name" value={formData.name} onChange={handleChange} />
</label>
<label>Email:
    <input type="text" id="email" value={formData.email} onChange={handleChange}/>
</label>
<label>Message:
    <textarea type="text" id="message" value={formData.message} onChange={handleChange}/>
    
    <button type="submit">Send</button>
</label>
</form>
</>

);
    
}

export default Contact;
