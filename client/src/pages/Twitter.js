import React, { useState, useEffect } from "react";
import "./data.css";

function Twitter() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  // const [filteredsearch, setFilteredsearch] = useState([]);

  useEffect(() => {
    console.log('Initial data')
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/twet?search=${search}`);
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
        const response = await fetch(`http://localhost:3001/api/twet?search=${search}`);
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


  return (
    <div>
      <div className="search">
        <input
          className="input"
          type="text"
          placeholder="search...."
          value={search}
          onChange ={(event)=>handleSearch(event)}/>
          &nbsp;
      </div>
      <div>
        {data.map(item => (
          <div className="grid_item ">
            <div className="box" key="item.id">
              <strong>URL: </strong>{item.url}<br />
              <strong>Tweet_link: </strong>{item.tweet_link}<br />
              <strong>User_id: </strong>{item.user_id}<br />
              <strong>Hastag: </strong>{item.hastag}<br />
              <strong>Retweet_count: </strong>{item.retweet_count}<br />
              <strong> Share_count: </strong>{item.share_count}<br />
              <strong>Description: </strong>{item.description}<br />
              <strong>Following: </strong>{item.following}<br />
              <strong>Followers: </strong>{item.followers}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Twitter;