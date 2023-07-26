import React from "react";
import {useEffect,useState} from "react";
import "./data.css";

function Telegram() {const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    // const [filteredsearch, setFilteredsearch] = useState([]);

    useEffect(() => {
      console.log('Initial data')
      const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:3001/api/teleg?search=${search}`);
          const data = await response.json();
          console.log('api called')
          console.log(data)
          setData(data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }, [search]);
  
    useEffect(() => {
      console.log('search changed')
      const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:3001/api/teleg?search=${search}`);
          const data = await response.json();
          console.log('api called')
          setData(data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }, [search]);
    // useEffect(() => {
    //   setFilteredsearch(
    //     data.filter(item =>
    //       Object.values(item).join('').toLowerCase().includes(search.toLowerCase())
    //     )
    //   );
    // }, [search, data]);
    const handleSearch = event => {
      setSearch(event.target.value);
     };
    //  const handleKeyDown = (event) => {
    //   if (event.key === "Enter") {
    //     console.log('click')
    //     event.preventDefault();
    //     setSearch(event.target.value);
    //   }
    // };
    
    return (
        <div>
            <div className="search">
                <input className="input" type="text" placeholder="Search.." value ={search} onChange ={(event)=>handleSearch(event)} />
                &nbsp;
               
            </div>
            {data.map(setData=>(
                <div className="grid_item">
                    <div className = "box" key="setData.id">
                    <strong>URL:</strong> {setData.url}<br />
                    <strong>user_id:</strong> {setData.user_id}<br />
                    <strong>channel_name:</strong> {setData.channel_name}<br />
                    <strong>members_count:</strong> {setData.members_count}<br />
                    <strong>share_count:</strong> {setData.share_count}<br />
                    <strong>description:</strong> {setData.description}<br />
                    <strong>email:</strong>{setData.email}<br />
                    <strong>website:</strong> {setData.website}<br />
                    <strong>phno:</strong> {[setData.phno[0]]},{[setData.phno[1]]}
                    </div>
                 </div>          
            ))}
        </div>
    )
}

export default Telegram