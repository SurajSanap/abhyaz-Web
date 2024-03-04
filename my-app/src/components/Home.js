import {React,useState} from 'react';
import axios from 'axios';
import swal from 'sweetalert';

export default function Home() {


  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [comments, setComments] = useState('');
  const[exp,setExp]=useState('');
  const[feedback,setFeedback]=useState('')
  const[bg,setbg]=useState("white")
  const[col,setcol]=useState("black")

  const toggle=(e)=>{
    e.preventDefault()
    if(bg==="white"){
      setbg("black")
      setcol("white")
    }
    else{
      setbg("white")
      setcol("black")
    }
  }
  const handleSubmit=async(event)=>{
    event.preventDefault();
    try {
      const response=await axios.post("http://localhost:5001/send/feedback",{
        username,name,comments,exp,feedback
      })
      swal({title:"Thank you so much for your feedback",
      icon:"success"})
      setUsername("")
      setName("")
      setComments("")
      setExp("")
      setFeedback("")
      
    } catch (error) {
      console.log(error);
   
    }
}
 
  return (
    <div>
  
  
 
<form  style={{color:`${col}`,background:`${bg}`}} onSubmit={handleSubmit}>
<h1>Abhyaz Feedback Form</h1>
<div> <button  style={{color:`${col}`,background:`${bg}`,border:`2px solid ${col}`}}onClick={toggle}>Dark mode</button></div>
        <div>
        
          <input type="text" placeholder='Username'  onChange={(e)=>{setUsername(e.target.value)}} required value={username} />
        </div>
        <div>
         
          <input type="text" placeholder='Name of the product' value={name} onChange={(e)=>{setName(e.target.value)}}required />
        </div>
        <div>
         
          <textarea value={comments} placeholder='Comments about our product' onChange={(e)=>{setComments(e.target.value)}} required />
        </div>
        <div>
      
          <input value={exp} placeholder='Rate from 1-10' onChange={(e)=>{setExp(e.target.value)}}required />
        </div>
        <div>
          <textarea value={feedback} placeholder='Feedback' onChange={(e)=>{setFeedback(e.target.value)}}  />
        </div>
        <button style={{color:`${col}`,background:`${bg}`,border:`2px solid ${col}`}} type="submit">Submit</button>
      </form>
    </div>
  )
}
