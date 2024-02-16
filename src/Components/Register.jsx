import { useForm } from "react-hook-form";

// import "./RegisterStyle.css";
import { useState } from "react";

// We have to make 3 things in UseForm
// 1) manage your data
// 2) submit it
// 3) validate your data and

function Register() {


  const form = useForm();
  const {register, formState} = form;


  const handleSubmit = ()=> {
    console.log();
  }


  return (
    <>
      {/* <div>
        <form onSubmit={handelSubmit}>
          <label htmlFor="fname">Your Name</label>
          <input
            type="text"
            id="fname"
            placeholder="Your name.."
            {...register('userName')}
          />
          <label htmlFor="lname">Email</label>
          <input
            type="email"
            id="lname"
            placeholder="Your Email.."
            {...register('email')}
          />
          <label htmlFor="lPass">Password</label>
          <input
            type="password"
            id="lname"
            placeholder="Your Password.."
            {...register('password')}
          />
          <label htmlFor="country">Country</label>
          <select id="country" name="country">
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>
          <input type="submit" defaultValue="Submit" />
        </form>
      </div> */}




      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: 25 }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>


                      <form  onSubmit={handleSubmit()}>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">

                          <label htmlFor="exampleInputEmail1" className="error">{formState.errors.name?.message}</label>
                            <input
                                {...register('name', {
                                    required: {
                                        value: true,
                                        message: " Your Name Not String"
                                    },
                                    minLength: {
                                        value: 10,
                                        message: 'minLength less than 10 char'
                                    }
                                })}
                              type="text"
                              className="form-control"

                            />

                            <label
                              className="form-label"
                              htmlFor="form3Example1c"
                            >
                              Your Name
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">

                          <label htmlFor="exampleInputEmail1" className="error">{formState.errors.email?.message}</label>
                            <input
                                {...register('email', {
                                    required: {
                                        value: true,
                                        message: "must enter data in email"
                                    },
                                    minLength: {
                                        value: 10,
                                        message: 'minLength less than 10 char'
                                    },
                                    pattern: {
                                        value: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
                                        message: 'pattern  Not true'
                                    }
                                })}
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                            />

                            <label
                              className="form-label"
                              htmlFor="form3Example3c"
                            >
                              Your Email
                            </label>

                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4c"
                              className="form-control"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example4c"
                            >
                              Password
                            </label>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="button"
                            className="btn btn-primary btn-lg"
                          >
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <h1>{formState.errors.email?.message}</h1>
              <div className='container'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label><br />
                    <label htmlFor="exampleInputEmail1" className="error">{formState.errors.email?.message}</label>
                    <input
                        {...register('email', {
                            required: {
                                value: true,
                                message: "must enter data in email"
                            },
                            minLength: {
                                value: 10,
                                message: 'minLength less than 10 char'
                            },
                            pattern: {
                                value: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
                                message: 'pattern  Not true'
                            }
                        })}
                        type="text"
                        className={`form-control`}
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"

                    />
                    <br />
                    <br />
                    <small id="emailHelp" className="form-text text-danger">

                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input

                        {...register('pass', {
                            required: true,
                            
                        })}
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Name</label>
                    <label htmlFor="exampleInputEmail1" className="error">{formState.errors.name?.message}</label>

                    <input
                                {...register('name', {
                                    required: {
                                        value: true,
                                        message: " Your Name Not String"
                                    },
                                    min: {
                                        value: 10,
                                        message: 'minLength less than 10 char'
                                    },
                                    pattern:{
                                        value: /^[a-zA-Z]+ [a-zA-Z]+$/,
                                        message: 'Invalid name given.'
                                    }
                                })}
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Your Name"
                    />
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                        Check me out
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
            <h1></h1>

        </div> */}
    </>
  );
}

export default Register;
