import React, { useState } from "react"
import { calculateResults, singleRewardPoint } from "../Assets/function"


const RewardContainer = ({data})=>{
    const [price, setPrice]= useState(0)
    const [reward, setReward] = useState(0)


    const handleOnChange = (e)=>{
        setPrice(e.target.value)
        // const rewardCal = singleRewardPoint(price)
        // setReward(rewardCal)
        setReward(singleRewardPoint(price))

    }


    const handleSubmit =(e)=>{
        e.preventDefault()
        setReward(singleRewardPoint(price))
    }


    return <>

    <form onSubmit={handleSubmit}>
    <input type="number"   placeholder={"Please enter the reward."} onChange={handleOnChange} />
    <input type="submit"/>
    </form>
        <p>Your Reward of ${price} is :{reward}</p>
       {data &&<> <p>Data from API</p>
        <TableofContainer data={calculateResults(data)}/></>}
    </>
}


const TableofContainer = ({data})=>{
    return <table>
        <tr>
        <th>ID</th>
        <th>Amount</th>
        <th>Month</th>
        <th>Name</th>
        <th>Points</th>
        <th>Date</th>
        </tr>
        {data.pointsPerTransaction.map((trans,index)=><tr key={index}>
            <td>{trans.id}</td>
            <td>${trans.amount}</td>
            <td>{trans.month}</td>
            <td>{trans.name}</td>
            <td>{trans.points}</td>
            <td>{trans.transactionDate}</td>
        </tr>)}
    </table>
}


export default  RewardContainer