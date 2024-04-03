import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { postUser } from '../Service/API'


const Contact = () => {
    const initialValue = {
        name: "",
        email: "",
        phone: "",
        city: ""
    }

    const [postuser, setPostuser] = useState(initialValue)
    const [error, setError] = useState({})
    const navigate = useNavigate()

    const validation = () => {
        let error = {}

        if (!postuser.name) {
            error.name = "Name is Requried"
        }
        if (!postuser.email) {
            error.email = "Email is Requried"
        } else if (
            !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(postuser.email)
        ) {
            error.email = "Email is not valid"
        }
        if (!postuser.phone) {
            error.phone = "Phone No is Required"
        }
        if (!postuser.city) {
            error.city = "City is Required"
        }
        return error
    }

    let name, value
    const PostuserData = e => {
        name = e.target.name
        value = e.target.value

        setPostuser({ ...postuser, [name]: value })

        if (name === 'name') {
            if (value.length === 0) {
                setError({ ...error, name: "@Name is Required" })
                setPostuser({ ...postuser, name: "" })
            } else {
                setError({ ...error, name: "" })
                setPostuser({ ...postuser, name: value })
            }
        }
        if (name === 'email') {
            if (value.length === 0) {
                setError({ ...error, email: "@Email is Required" })
                setPostuser({ ...postuser, email: "" })
            } else {
                setError({ ...error, email: "" })
                setPostuser({ ...postuser, email: value })
            }
        }
        if (name === 'phone') {
            if (value.length === 0) {
                setError({ ...error, phone: "@Phone is Required" })
                setPostuser({ ...postuser, phone: "" })
            } else {
                setError({ ...error, phone: "" })
                setPostuser({ ...postuser, phone: value })
            }
        }
        if (name === 'city') {
            if (value.length === 0) {
                setError({ ...error, city: "@City is Required" })
                setPostuser({ ...postuser, city: "" })
            } else {
                setError({ ...error, city: "" })
                setPostuser({ ...postuser, city: value })
            }
        }
    }

    const onsubmit = async (e) => {
        e.preventDefault()
        let ErrorList = validation()
        setError(validation())

        if (Object.keys(ErrorList).length === 0) {
            await postUser(postuser)
            navigate('/alluser')
        }
    }
    return (
        <>
            <header class="masthead" style={{ backgroundImage: "url('assets/img/contact-bg.jpg')" }}>
                <div class="container position-relative px-4 px-lg-5">
                    <div class="row gx-4 gx-lg-5 justify-content-center">
                        <div class="col-md-10 col-lg-8 col-xl-7">
                            <div class="page-heading">
                                <h1>Contact Me</h1>
                                <span class="subheading">Have questions? I have answers.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <main class="mb-4">
                <div class="container px-4 px-lg-5">
                    <div class="row gx-4 gx-lg-5 justify-content-center">
                        <div class="col-md-10 col-lg-8 col-xl-7">
                            <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
                            <div class="my-5">
                                <form onSubmit={onsubmit}>
                                    <div class="form-floating">
                                        <input class="form-control" name='name' onChange={e => PostuserData(e)} value={postuser.name} id="name" type="text" placeholder="Enter your name..." />
                                        <span className='text-danger'>{error.name}</span>
                                        <label for="name">Name</label>
                                    </div>
                                    <div class="form-floating">
                                        <input class="form-control" name='email' onChange={e => PostuserData(e)} value={postuser.email} id="email" type="email" placeholder="Enter your email..." />
                                        <span className='text-danger'>{error.email}</span>
                                        <label for="email">Email address</label>
                                    </div>
                                    <div class="form-floating">
                                        <input class="form-control" name='phone' onChange={e => PostuserData(e)} value={postuser.phone} id="phone" type="tel" placeholder="Enter your phone number..." />
                                        <span className='text-danger'>{error.phone}</span>
                                        <label for="phone">Phone Number</label>
                                    </div>
                                    <div class="form-floating">
                                        <input class="form-control" name='city' onChange={e => PostuserData(e)} value={postuser.city} id="phone" type="text" placeholder="Enter your phone number..." />
                                        <span className='text-danger'>{error.city}</span>
                                        <label for="phone">City</label>
                                    </div>
                                    <div class="form-floating">
                                        <input class="form-control" name='file' onChange={e => PostuserData(e)} id="phone" type="file" placeholder="Enter your phone number..." />
                                        <span className='text-danger'>{error.city}</span>
                                        <label for="phone">Choose File</label>
                                    </div>
                                    <br />
                                    <button class="btn btn-primary text-uppercase" type="submit">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Contact