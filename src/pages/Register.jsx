import React from 'react'
import Add from  '../img/add.png';
import {auth ,storage, db} from "../firebase";
import { getAuth, createUserWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { useState } from "react";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 



export const Register = () => {

  const [err , setErr] =useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault()
    const displayName =e.target[0].value;
    const email =e.target[1].value;
    const password =e.target[2].value;
    const file =e.target[3].files[0];

    console.log(e.target[0].value)
  
 try{
   const res= await createUserWithEmailAndPassword(auth, email, password)

   const storageRef = ref(storage, displayName);
   
   const uploadTask = uploadBytesResumable(storageRef, file);
   
  
   uploadTask.on('state_changed', 
     
     (error) => {
      setErr(true)
     }, 
     () => {
       getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
              await updateProfile(res.user, {
                displayName,
                photoURL:downloadURL,
                
              } )
              await setDoc(doc(db, "users",res.user.uid),{
                uid:res.user.id,
               displayName,
               email,
               photoURL: downloadURL
              })
       });
     }
   );

 }catch(err){
  
  setErr(true);

 }

  
  
};
  
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Catch Up</span>
            <span className='title'> Register</span>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Display name' />
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password' />
                <input style={{display:"none"}}type="file" id="file"/>
                <label htmlFor='file'>
                    <img src={Add} alt="" />
                    <span>Add an avatar</span>
                </label>
                <button>Sign up</button>

                {err && <span>Something went wrong</span>}
            </form>
            <p> You do have an account? Login</p>
        </div>
    </div>
  )
}
