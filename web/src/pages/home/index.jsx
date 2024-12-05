import Container from "../../components/Container";
import {FaGlobe} from "react-icons/fa";
import {FaChartLine, FaGears, FaUsers} from "react-icons/fa6";
import {useEffect, useState} from "react";
import {NavLink} from "react-router";
import {useStore} from "../../store";
import useForm from "../../hooks/useForm";
import {useLinks} from "../../hooks/useLinks";
import {useCreateLink} from "../../hooks/useCreateLink";
import axios from "axios";
import {toast} from "react-toastify";


export default function Home() {
    const token = useStore(state => state.token);
    const [showOptions, setShowOptions] = useState(false);
    const [latestLinks, setLatestLinks] = useState([]);

    const fetchLinks = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/urls`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            console.log(response.data)
            setLatestLinks(response.data)
        } catch (err) {
            console.log(err)
            toast.error(err.response.data)
        }
    }

    const createLink = useCreateLink(token);

    const [data, onChange] = useForm({url: '', id: ""})

    const onSubmit = (e) => {
        e.preventDefault();
        const body = {
            url: data.url,
        }

        if(data.id) {
            body.id = data.id;
        }
        createLink.mutate(body);
    }

    useEffect(() => {
        fetchLinks();
    }, [token]);
    return (
        <>
            <Container padding={''} transparent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Container yPadding={''} xPadding={''}>
                        <div className={'flex items-center'}>
                            <div className={'flex-1'}>
                                <div className="font-medium uppercase text-gray-600 text-sm">Short URLs Created
                                </div>
                                <div className="font-bold text-xl">169</div>
                            </div>
                            <div className={'p-3 text-xl rounded-full text-white bg-red-500'}>
                                <FaGlobe/>
                            </div>
                        </div>
                    </Container>

                    <Container yPadding={''} xPadding={''}>
                        <div className={'flex items-center'}>
                            <div className={'flex-1'}>
                                <div className="font-medium uppercase text-gray-600 text-sm">Users
                                </div>
                                <div className="font-bold text-xl">69</div>
                            </div>
                            <div className={'p-3 text-xl rounded-full text-white bg-red-500'}>
                                <FaUsers/>
                            </div>
                        </div>
                    </Container>

                    <Container yPadding={''} xPadding={''}>
                        <div className={'flex items-center'}>
                            <div className={'flex-1'}>
                                <div className="font-medium uppercase text-gray-600 text-sm">Impressions
                                </div>
                                <div className="font-bold text-xl">69</div>
                            </div>
                            <div className={'p-3 text-xl rounded-full text-white bg-red-500'}>
                                <FaChartLine/>
                            </div>
                        </div>
                    </Container>
                </div>
            </Container>

            <Container>
                <div className={"text-lg font-bold mb-4"}>Create New Short URL</div>

                <div>
                    <form onSubmit={onSubmit} className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <FaGlobe className="w-4 h-4 text-gray-500 "/>
                        </div>
                        <input type="url" name={'url'}
                               value={data.url}
                               onChange={onChange}
                               className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500"
                               placeholder="https://website.com"/>
                        <button type="submit" onClick={onSubmit}
                                className="text-white absolute end-2.5 bottom-2.5 bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2">Create
                        </button>
                    </form>

                    <div className={'mt-4 flex flex-col gap-2'}>
                        <div>
                            <button
                                onClick={() => setShowOptions(s => !s)}
                                className={'flex gap-1 text-sm items-center border border-gray-300 bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded-lg drop-shadow hover:drop-shadow-lg transition-all'}>
                                <FaGears/> Options
                            </button>
                        </div>
                        <input className={`border border-gray-300 rounded-lg py-2 px-4 ${showOptions ? '' : 'hidden'}`}
                               placeholder={'Custom Link Name...'} name={'id'} value={data.id} onChange={onChange}/>
                    </div>
                </div>
            </Container>

            <Container>
                <div className={"mb-4 flex justify-between items-center"}>
                    <div className={"text-lg font-bold"}>Latest URLs</div>
                    <NavLink to={'/links'}
                             className={'bg-indigo-600 hover:bg-indigo-500 py-2 px-4 rounded-lg text-sm font-medium text-white'}>See
                        All</NavLink>
                </div>

                <div className="overflow-x-auto shadow-sm border border-gray-100 sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                        <thead
                            className="text-xs text-gray-700 uppercase bg-gray-50 ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Short URL
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Long URL
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Views
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {latestLinks?.map((link, index) => (
                            <tr key={index} className="bg-white border-b ">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    {`${process.env.REACT_APP_BACKEND_URL}/${link.id}`}
                                </th>
                                <td className="px-6 py-4">
                                    {link.url}
                                </td>
                                <td className="px-6 py-4">
                                    {link.visits_count}
                                </td>
                            </tr>))}
                        </tbody>
                    </table>
                </div>

            </Container>
        </>
    )
}
