import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { IDataBase, DATA_TYPE, ITable, Connection } from 'jsstore';

function App() {
  const [dbMsg, setDbMsg] = useState('')

  useEffect(()=>{
    let idbCon = new Connection();
    const dbname = 'Demo';
    const tblStudent: ITable = {
      name: 'Students',
      columns: {
        id: {
          primaryKey: true,
          autoIncrement: true
        },
      }
    };
    const dataBase: IDataBase = {
      name: dbname,
      tables: [tblStudent]
    };
    idbCon.initDb(dataBase).then(res => {
      setDbMsg('success')
    }).catch(err => {
      console.log('err', err)
    });
  },[])

  return (
    <div className="App">
      <h1>Vite + React</h1>
      <div className="card">
        <p>
        </p>
      </div>
      <p className="read-the-docs">
        initialize DB and message is :{dbMsg}
      </p>
    </div>
  )
}

export default App
