import {NavLink} from "react-router";
import Container from "../../components/Container";
import {FaGlobe} from "react-icons/fa";
import {FaGears} from "react-icons/fa6";
import {useState} from "react";

export default function  Links()
{
    const [showOptions, setShowOptions] = useState(false);
    const onSearch = (e) => {
        e.preventDefault();
    }
    return <>
        <Container>
            <div className={"text-lg font-bold mb-4"}>Create New Short URL</div>

            <div>
                <form onSubmit={onSearch} className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <FaGlobe className="w-4 h-4 text-gray-500 "/>
                    </div>
                    <input type="url" id="search"
                           className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500"
                           placeholder="https://website.com" required/>
                    <button type="submit" onClick={onSearch}
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
                    <input className={`border border-gray-300 rounded-lg py-2 px-4 ${showOptions ? '' : 'hidden'}`} placeholder={'Custom Link Name...'}/>
                </div>
            </div>
        </Container>

        <Container>
            <div className={"mb-4 flex justify-between items-center"}>
                <div className={"text-lg font-bold"}>Latest URLs</div>
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
                    {[1, 2, 3, 4, 5].map(number => (
                        <tr key={number} className="bg-white border-b ">
                            <th scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                http://localhost:3000/
                            </th>
                            <td className="px-6 py-4">
                                https://www.nytimes.com/topic/subject/paintball-sport
                            </td>
                            <td className="px-6 py-4">
                                0
                            </td>
                        </tr>))}
                    </tbody>
                </table>
            </div>

        </Container>
    </>
}