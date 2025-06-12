'use client';

import '@/app/globals.css';
import { IoMailOpen } from "react-icons/io5";
import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react';

export default function Contact(){
    const [state, handleSubmit] = useForm("mzzgrvrl");
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');

    const handleReset = () => {

            setTimeout(() => {
            setName('');
            setEmail('');
            setMessage('');
        },2000)
    }

    return(
        <>
            <div className='container min-h-screen mt-[20px] text-gray-700 pb-[200px]'>
                <div className='font-quicksand font-bold flex justify-center items-center p-5 gap-2 text-2xl'>
                   <IoMailOpen/> Contact
                </div>

                <div className='m-auto mt-2 lg:w-[80vh] w-[90%] leading-loose font-quicksand text-center font-semibold'>
                    Got a question, comment, or just want to connect? I love hearing from readers like you! Whether you'd like to collaborate, share feedback, or suggest a topic for a future post, feel free to drop me a line. Let's keep the conversation going — I can't wait to hear from you!
                </div>

                <div className='mt-8 lg:w-fit w-full m-auto '>

                    {state.succeeded && <div className='pb-3 text-red-600 font-quicksand font-bold text-center'>Thanks! for reaching out.</div>}

                    <form onSubmit={handleSubmit}>
                        <div className='flex lg:w-fit w-full lg:flex-row flex-col lg:gap-10 gap-3 h-fit justify-center items-center'>
                            <label htmlFor='name'>
                                <input type='text' placeholder='Name' className='border p-3 w-[300px] border-gray-400 focus:outline-none rounded-md' required minLength={4} value={name} onChange={(e) => setName(e.target.value)} name='name'/>
                            </label>
                            <ValidationError 
                                prefix="Name" 
                                field="name"
                                errors={state.errors}
                            />

                            <label htmlFor='email'>
                                <input type='email' placeholder='Email' className='border p-3 w-[300px] lg:mt-0 mt-5 border-gray-400 focus:outline-none rounded-md' required minLength={12} value={email} name='email' onChange={(e) => setEmail(e.target.value)}/>
                            </label>
                            <ValidationError 
                                prefix="Email" 
                                field="email"
                                errors={state.errors}
                            />
                        </div>

                        <div className='mt-5 lg:w-full w-fit m-auto'>
                            <label htmlFor='message'>
                                <textarea className='lg:w-full w-[350px] h-[200px] border border-gray-400 p-5 focus:outline-none lg:h-[250px] rounded-md' placeholder='Message' minLength={10} required value={message} onChange={(e) => setMessage(e.target.value)} name='message'/>
                            </label>

                            <ValidationError 
                                prefix="Message" 
                                field="message"
                                errors={state.errors}
                            />
                        </div>

                        <div className='mt-5 flex justify-center'>
                            <button type='submit' className='p-3 bg-slate-800 text-gray-200 font-quicksand font-bold w-[50%] rounded-md' onClick={handleReset}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>  
        </>
    )
}