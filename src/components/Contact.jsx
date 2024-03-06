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

    <div className="border-spacing-1  border-1 p-6  py-2 px-5 border-solid">
    <h2 className="text-left text-3xl  font-bold">Contact me</h2>
    <div className="relative mx-1 mt-1 h-8 overflow-hidden rounded-sm bg-white bg-clip-border text-gray-700 shadow-lg">
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
</form></div>
</div>

);
    
}

export default Contact;
