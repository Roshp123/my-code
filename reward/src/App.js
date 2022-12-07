import logo from './logo.svg';
import './App.css';
import RewardContainer from './Components/RewardContainer'
import { axiosBase } from './axios';
import { useEffect, useState } from 'react';

function App() {


  const [data, setData] = useState([])
  const [error, setError]= useState(null)


  const fetchData = async () =>{

    try{
      const response  = await axiosBase.get("/get_transactions")

      console.log("response ", response)
      setData([...response.data])
    }
    catch(e){
      setError({...e,message:"There is something worng .Check your internet connection"})
    }
  }


  useEffect(()=>fetchData,[])

  if(error)
  {
    return <h2>{error.message}</h2>
  }

  return data.length!==0? <RewardContainer data={data}/>:<h2>Loading</h2>
  ;
}

export default App;
