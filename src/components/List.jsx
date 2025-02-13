function List({ todos, deleteTodo }) {
  return (
    <div className="w-full border p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-2">TODO LIST</h2>
        {
            todos.length > 0 ? (
                <ul>
                    {
                        todos.map((todo) => (
                            <li key={todo.id} className="flex justify-between border-b py-1 text-left">
                                <span>{todo.title}</span>
                                <button className="bg-white text-red-500 border px-2 py-1 rounded shadow cursor-pointer hover:bg-red-500 hover:text-white" onClick={() => deleteTodo(todo.id)}>Delete</button>
                            </li>
                        ))
                    }
                </ul>
            ) : 
            <p>Start Planning !!</p>
        }
    </div>
  )
}

export default List