import {Link, useNavigate} from "react-router";
import {useStore} from "../../../store";
import axios from "axios";
import {toast} from 'react-toastify';
import useForm from "../../../hooks/useForm";
import {FaSpinner} from "react-icons/fa6";
import {useState} from "react";

export default function Login() {
    const navigate = useNavigate();
    const {setLogin} = useStore()
    const [processing, setProcessing] = useState(false);

    const [data, onChange] = useForm({
        username: "",
        password: "",
    })

    const handleSubmit = async (evt) => {
        evt.preventDefault();

        setProcessing(true);
        if (data.username && data.password) {
            try {
                const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/login`, data);
                toast.success("Login Successful!.")
                setLogin(response.data)
                navigate("/");
            } catch (err) {
                console.log(err)
                toast.error(err.response.data)
                setProcessing(false);
            }
        } else {
            toast.error("Please enter a valid username and password")
            setProcessing(false);
        }
    }

    return <section className={'p-6 flex flex-col justify-center'}>
        <div className={'font-bold text-xl'}>Sign In</div>

        <form className="space-y-4 md:space-y-6 mt-6" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 ">Username</label>
                <input type="text" name="username"
                       className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5"
                       placeholder="Username..." value={data.username}
                       onChange={onChange}/>
            </div>
            <div>
                <label htmlFor="password"
                       className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                <input type="password" name="password" placeholder="Password..."
                       value={data.password}
                       onChange={onChange}
                       className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5"
                />
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-start">
                    <div className="flex items-center h-5">
                        <input id="remember" aria-describedby="remember" type="checkbox"
                               className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-indigo-300"
                        />
                    </div>
                    <div className="ml-3 text-sm">
                        <label htmlFor="remember" className="text-gray-500 ">Remember me</label>
                    </div>
                </div>
                <Link to={'/auth/forgot-password'} className="text-sm font-medium text-indigo-600 hover:underline">
                    Forgot password?
                </Link>
            </div>
            <button type="submit" onClick={handleSubmit}
                    disabled={processing}
                    className="w-full text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-950 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">
                {!processing ? 'Sign in' : <div className="flex justify-center"><FaSpinner className={'animate-spin text-xl self-center'}/></div>}
            </button>
            <p className="text-sm font-light text-gray-500 ">
                Don’t have an account yet?
                <Link to={'/auth/sign-up'} className="font-medium text-indigo-600 hover:underline ms-2">
                    Sign up
                </Link>
            </p>
        </form>
    </section>
}