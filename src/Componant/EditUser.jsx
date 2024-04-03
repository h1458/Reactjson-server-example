import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { editUSer, getUser } from '../Service/API'

const EditUser = () => {
    const initialValue = {
        name: "",
        email: "",
        phone: "",
        city: ""
    }

    const [edituser, setEdituser] = useState(initialValue)
    const [error, setError] = useState({})
    const navigate = useNavigate()
    const { id } = useParams()

    const validation = () => {
        let error = {}

        if (!edituser.name) {
            error.name = "Name is Requried"
        }
        if (!edituser.email) {
            error.email = "Email is Requried"
        } else if (
            !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(edituser.email)
        ) {
            error.email = "Email is not valid"
        }
        if (!edituser.phone) {
            error.phone = "Phone No is Required"
        }
        if (!edituser.city) {
            error.city = "City is Required"
        }
        return error
    }

    let name, value
    const PostuserData = e => {
        name = e.target.name
        value = e.target.value

        setEdituser({ ...edituser, [name]: value })

        if (name === 'name') {
            if (value.length === 0) {
                setError({ ...error, name: "@Name is Required" })
                setEdituser({ ...edituser, name: "" })
            } else {
                setError({ ...error, name: "" })
                setEdituser({ ...edituser, name: value })
            }
        }
        if (name === 'email') {
            if (value.length === 0) {
                setError({ ...error, email: "@Email is Required" })
                setEdituser({ ...edituser, email: "" })
            } else {
                setError({ ...error, email: "" })
                setEdituser({ ...edituser, email: value })
            }
        }
        if (name === 'phone') {
            if (value.length === 0) {
                setError({ ...error, phone: "@Phone is Required" })
                setEdituser({ ...edituser, phone: "" })
            } else {
                setError({ ...error, phone: "" })
                setEdituser({ ...edituser, phone: value })
            }
        }
        if (name === 'city') {
            if (value.length === 0) {
                setError({ ...error, city: "@City is Required" })
                setEdituser({ ...edituser, city: "" })
            } else {
                setError({ ...error, city: "" })
                setEdituser({ ...edituser, city: value })
            }
        }
    }

    const onsubmit = e => {
        e.preventDefault()
        let ErrorList = validation()
        setError(validation())

        if (Object.keys(ErrorList).length === 0) {
            let regester = {
                name: edituser.name,
                email: edituser.email,
                phone: edituser.phone,
                city: edituser.city
            }
            console.log(regester)
        }
    }
    const getUserData = async () => {
        let res = await getUser(id)
        setEdituser(res.data)
    }
    useEffect(() => {
        getUserData()
    }, [])

    const editUserDetails = async () => {
        await editUSer(edituser,id)
        navigate('/alluser')
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
                            <div class="my-5"></div>
                            <form onSubmit={onsubmit}>
                                <div class="form-floating">
                                    <input class="form-control" name='name' onChange={e => PostuserData(e)} value={edituser.name} id="name" type="text" placeholder="Enter your name..." />
                                    <span className='text-danger'>{error.name}</span>
                                    <label for="name">Name</label>
                                </div>
                                <div class="form-floating">
                                    <input class="form-control" name='email' onChange={e => PostuserData(e)} value={edituser.email} id="email" type="email" placeholder="Enter your email..." />
                                    <span className='text-danger'>{error.email}</span>
                                    <label for="email">Email address</label>
                                </div>
                                <div class="form-floating">
                                    <input class="form-control" name='phone' onChange={e => PostuserData(e)} value={edituser.phone} id="phone" type="tel" placeholder="Enter your phone number..." />
                                    <span className='text-danger'>{error.phone}</span>
                                    <label for="phone">Phone Number</label>
                                </div>
                                <div class="form-floating">
                                    <input class="form-control" name='city' onChange={e => PostuserData(e)} value={edituser.city} id="phone" type="text" placeholder="Enter your phone number..." />
                                    <span className='text-danger'>{error.city}</span>
                                    <label for="phone">City</label>
                                </div>
                                <br />
                                <button class="btn btn-primary text-uppercase" type="submit" onClick={() => editUserDetails()}>Edit Form</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default EditUser