import { Link } from "react-router-dom";

const Register = () => {

    const handleRegister = e =>{
        e.preventDefault()

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name,email,password)
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Register Now!</h1>
                    
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    {/* Form start here  */}

                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>

                            <input type="text" placeholder="Your name" name="name" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>

                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>

                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>

                    <p className="pl-4">You have Account? please 
                        <Link to={"/login"}><button className="btn btn-link">Login</button></Link> </p>

                </div>
            </div>
        </div>
    );
};

export default Register;