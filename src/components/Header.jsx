import { useState } from "react";

function Header({ insertTodos }) {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    
    const submit = () => {
        insertTodos(title, date);
        setTitle("");
        setDate("");
    }
  return (
    <div className="flex flex-col md:flex-row items-center border py-4 rounded-lg shadow-md gap-1 w-full justify-around">
        <input className="border p-2 rounded w-full md:w-1/3" type="text" name="title" id="title" placeholder="TODO TITLE" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input className="border p-2 rounded w-full md:w-auto" type="date" name="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <button className="bg-indigo-600 text-white w-full px-4 py-2 rounded shadow cursor-pointer md:w-auto" onClick={submit}>SAVE</button>
    </div>
  )
}

export default Header;