import {Link, useNavigate} from "react-router";
import useForm from "../../../hooks/useForm";
import axios from "axios";
import { toast } from 'react-toastify';

export default function Register () {
    const navigate = useNavigate();

    const [data, onChange] = useForm({
        username: "",
        password: "",
        confirm_password: "",
    })

    const handleSubmit = async (evt) => {
        evt.preventDefault();

        if(data.username && data.password && (data.password === data.confirm_password)) {
            try {
                await axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/register`, data);
                toast.success("Registration Successful! Please Login now.")
                navigate("/auth/sign-in");
            }catch(err) {
                console.log(err)
                toast.error(err.response.data)
            }
        } else {
            toast.error("Please enter a valid username and password")
        }
    }

    return <section className={'p-6 flex flex-col justify-center'}>
        <div className={'font-bold text-xl'}>Create Account</div>

        <form className="space-y-4 md:space-y-6 mt-6" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 ">Username</label>
                <input type="text" name="username"
                       className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5"
                       placeholder="Username..."
                       value={data.username}
                       onChange={onChange}
                />
            </div>
            <div>
                <label htmlFor="password"
                       className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                <input type="password" name="password" placeholder="Password..."
                       className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5"
                       value={data.password}
                       onChange={onChange}
                />
            </div>
            <div>
                <label htmlFor="confirm_password"
                       className="block mb-2 text-sm font-medium text-gray-900 ">Confirm Password</label>
                <input type="password" name="confirm_password" placeholder="Password..."
                       className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5"
                       value={data.confirm_password}
                       onChange={onChange}
                />
            </div>

            <button onClick={handleSubmit}
                    className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">Sign
                Up
            </button>
            <p className="text-sm font-light text-gray-500">
                Already have an account?
                <Link to={'/auth/sign-in'} className="font-medium text-indigo-600 hover:underline ms-2">
                    Sign in
                </Link>
            </p>
        </form>
    </section>
}