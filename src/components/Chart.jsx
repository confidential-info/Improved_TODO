import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

function Chart({ data }) {
  return (
    <div className="w-full md:w-2/3 border p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-2">Graph Representation</h2>
        {
            data.length > 0 ? (
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data}>
                        <XAxis dataKey="date" />
                        <YAxis allowDecimals = {false} />
                        <Tooltip />
                        <Bar dataKey="count" fill="#4845d2" />
                    </BarChart>
                </ResponsiveContainer> 
            ) : (
                <p>No data Available !!</p>
            )
        }
    </div>
  )
}

export default Chart