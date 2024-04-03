import React, { useEffect, useState } from 'react'
import { deleteUserApiId, getUserApi } from '../Service/API'
import { Link } from 'react-router-dom'

const AllUsers = () => {
    const [getUser, setGetUser] = useState([])

    const getUserApiDetails = async () => {
        const res = await getUserApi()
        setGetUser(res.data)
    }

    useEffect(() => {
        getUserApiDetails()
    })

    const DeleteId = async id => {
        await deleteUserApiId(id)
        getUserApiDetails()
    }
    return (
        <>
            <header class="masthead" style={{ backgroundImage: "url('assets/img/post-bg.jpg')" }}>
                <div class="container position-relative px-4 px-lg-5">
                    <div class="row gx-4 gx-lg-5 justify-content-center">
                        <div class="col-md-10 col-lg-8 col-xl-7">
                            <div class="post-heading">
                                <h1>Man must explore, and this is exploration at its greatest</h1>
                                <h2 class="subheading">Problems look mighty small from 150 miles up</h2>
                                <span class="meta">
                                    Posted by
                                    <a href="#!">Start Bootstrap</a>
                                    on August 24, 2023
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">City</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        getUser.map((getvalue, getindex) => {
                            return (
                                <>
                                    <tr key={getindex}>
                                        <th scope="row">{getvalue.id}</th>
                                        <td>{getvalue.name}</td>
                                        <td>{getvalue.email}</td>
                                        <td>{getvalue.phone}</td>
                                        <td>{getvalue.city}</td>
                                        <td>
                                            <Link className="btn btn-primary" to={`/edit/${getvalue.id}`}>EDIT</Link>
                                            <button className='btn btn-danger ms-1'onClick={() => DeleteId(getvalue.id)}>DELETE</button>
                                        </td>
                                    </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default AllUsers