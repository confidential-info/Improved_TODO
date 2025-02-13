import { useEffect, useState } from 'react';
import './App.css'
import Chart from './components/Chart'
import Header from './components/Header'
import List from './components/List'
import { db } from '../utils/dbConfig';
import { sql } from 'drizzle-orm';
import { Lists } from '../utils/schema';

function App() {
  const [todos, setTodos] = useState([]);
  const [data, setData] = useState({});

  const insertTodos = async(title, date) => {
    if(title && date)
    {
      await db.insert(Lists).values({title, date});
      const result = await db.select().from(Lists);
      setTodos(result);
    }
  }

  const deleteTodo = async(id) => {
    await db.delete(Lists).where(sql`id = ${id}`);
    fetchData();
  }

  async function fetchData()
  {
    const result = await db.select().from(Lists);
    setTodos(result);
  }

  useEffect(() => {
    fetchData();
  }, [])

  useEffect(() => {
    async function fetchChart() {
      try
      {
        const result = await db.execute(sql`
          SELECT date, COUNT(*) FROM todos GROUP BY date ORDER BY date ASC;`);
        const chartData = result.rows.map(row => ({
          date: row.date,
          count: parseInt(row.count, 10)
        }));
        console.log("Chart Data:", chartData);
        setData(chartData);
      }catch(error)
      {
        console.log(error);
      }
    } 
    fetchChart();
  }, [todos]);
  return (
    <div className="h-screen w-full p-6 flex flex-col">
      <Header insertTodos={insertTodos} />
      <div className="mt-5 flex flex-col md:flex-row justify-around gap-2">
        <List todos={todos} deleteTodo={deleteTodo} />
        <Chart data={data} />
      </div>
    </div>
  )
}

export default App
