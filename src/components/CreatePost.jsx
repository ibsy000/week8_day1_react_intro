import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function CreatePost(props) {

    let navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()

        if (localStorage.getItem('token')){

            let myHeaders = new Headers()
            myHeaders.append('Authorization', 'Bearer ' + localStorage.getItem('token'))
            myHeaders.append('Content-Type', 'application/json')
    
            let formData = JSON.stringify({
                title: e.target.title.value,
                body: e.target.body.value
            })
        
            fetch('http://localhost:5000/api/posts', {
                method: 'POST',
                headers: myHeaders,
                body: formData
            })
                .then(res => res.json())
                .then(data => {
                    if (data.error){
                        console.error(data.error)
                    } else {
                        props.flashMessage('Your post has been successfully created!', 'success')
                        navigate('/')
                    }
                })
        } else {
            props.flashMessage('You have to be logged in to do that.', 'danger')
        }

            
    }
    

    return (
        <>
            <h4 className="text-center">Create A New Post</h4>

            <form className="createPost" onSubmit={handleSubmit}>

                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className='form-control' placeholder='Enter Title' 
                        name='title'/>

                    <label htmlFor="body">Body</label>
                    <input type="text" className='form-control' placeholder='Enter Body' 
                        name='body'/>

                    <input type="submit" className='btn text-light w-100 mt-3' value='Create Post' 
                        style={{backgroundColor: '#5b8e7d'}}/>

                </div>
            </form>
        </>
    )
}
