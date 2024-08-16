import { useEffect, useState } from "react"

function Clock(){

    const formatTime=(date:Date)=>{
        // const day = date.getDay();
        // const month=date.getMonth();
        // const year=date.getFullYear();
        const hours=`0${date.getHours()}`.slice(-2);
        const minutes=`0${date.getMinutes()}`.slice(-2);
        const seconds=`0${date.getSeconds()}`.slice(-2);

        return `${hours} : ${minutes} : ${seconds}` 
    }
    const [timeString,settimeString]=useState('');

    useEffect(()=>{
        setInterval(()=>{
            const now=new Date();
            const newtime=formatTime(now);
            settimeString(String(newtime));
        },1000)
    },[])
    return <>
        {timeString}
    </>
}
export default Clock