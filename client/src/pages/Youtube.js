import React, { useState, useEffect } from "react";
import "./data.css";
function Youtube() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    // const [filteredsearch, setFilteredsearch] = useState([]);

    useEffect(() => {
      console.log('Initial data')
        const fetchData = async () => {
          try {
            const response = await fetch(`http://localhost:3001/api/you?search=${search}`);
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
          const response = await fetch(`http://localhost:3001/api/you?search=${search}`);
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
          onChange={(event)=>handleSearch(event)} />
      </div>
      <div>
        {data.map(item => (
          <div className="grid_item ">
            <div className="box" key="item.id">
              <strong>channel_url:</strong>{item.channel_url}<br />
              <strong>channel_name:</strong>{item.channel_name}<br />
              <strong>about_channel:</strong>{item.about_channel}<br />
              <strong>video_title:</strong>{item.video_title}<br />
              <strong>video_link:</strong>{item.video_link}<br />
              <strong> like_count:</strong>{item.Like_count}<br />
              <strong>Dislike_count:</strong>{item.Dislike_count}<br />
              <strong>video_description:</strong>{item.video_description}<br />
              <strong>Followers:</strong>{item.followers}
            </div>
          </div>
        ))}
      </div>
    </div>
    )
}

export default Youtube;