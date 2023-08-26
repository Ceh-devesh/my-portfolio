import React, { useState } from 'react'
import hello from '../assets/hello.png'
import toast from 'react-hot-toast'
import {motion} from  'framer-motion'
import {addDoc, collection} from  'firebase/firestore'
import {db} from '../firebase'
function Contact() {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [textarea, setTextarea] = useState('');

  const submitHandler = async (e)=>{
    e.preventDefault()
    
    try {
      await addDoc(collection(db,"data"),{
        Name:input
      });
      toast.success('Thanks For Submitting Your Query!')

    } catch (error) {
      toast.error('Error')
      console.log(error)
    }
    


  }



  const [input, setInput] = useState({
    name: '',
    email:'',
    textarea:'input.'
  })
  const animation={
    button:{
      initial:{
        y:'-100',
        opacity:0
      },
      whileInView:{
        y:1,
        opacity:1
      },
      transition:{
        delay:0.2
      }
    }
    
  }

  const changHandler=(e)=>{
   setInput({...input,[e.target.name]:e.target.value})
   
   
  }
    


  return (
    <div id='contact' >
        <section>
            <form>

                <h2>Don't be shy! Hit me up! 👇</h2>
                <input type="text" name='name' value={input.name} onChange={changHandler} placeholder='Name' required />
                <input value={input.email} name='email' onChange={changHandler} type="email" placeholder='me@gmail.com' required />
                {/* <input id='messagebox' type="text"  required /> */}

                {/* value={input.textarea} */}
                <textarea   onChange={changHandler} name="textarea" type='textarea' id="messagebox" cols="30" rows="20"></textarea>
                <motion.button {...animation.button} onClick={submitHandler} type='submit' >Send</motion.button>
                
            </form>
        </section>
        <aside>
            <img src={hello} alt="" />
        </aside>
      
    </div>
  )
}

export default Contact;
