import {preview} from '../assets'
import {useNavigate} from 'react-router-dom'
import {getRandomPrompt} from '../utils'
import React, {useState} from 'react'
import {FormField, Loader} from '../components'

const CreatePost = () => {
    const navigate = useNavigate();
    const[form, setForm] = useState({
        name:'',
        prompt:'',
        photo:'',
    })
    const [generatingImg, setGeneratingImg]= useState(false);
    const [loading, setLoading] = useState(false);
  return (
    <section className='max-w-7xl mx-auto'>
        <div>
            <h1 className='font-extrabold text-[#2223328] text-[32px]'>
                Create

            </h1>
            <p className='mt-2 text-[#666e75] text-[17px] max-w[500px]'>
                Create through a collection of imaginative ans
                visually stunning images through PixelWiz and
                share them with community.
            </p>
        </div>

        <form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
            <div className='flex felx-col gap-5'>
                <FormField 
                 LabelName= "Your Name"
                 type= "text"
                 name= "name"
                 placeholder= "John Doe"
                 value={form.name}
                 handleChange= {handleChange}
                >
                </FormField>
                <FormField 
                 LabelName= "Prompt"
                 type= "text"
                 name= "prompt"
                 placeholder= "A plush toy robot sitting against a yellow wall"
                 value={form.prompt}
                 handleChange= {handleChange}
                 isSupriseMe
                 handleSupriseMe={handleSupriseMe}
                >
                </FormField>
            </div>
        </form>

    </section>
  )
}

export default CreatePost