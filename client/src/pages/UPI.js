import React,{ useState, useEffect } from "react";
import "./data.css"
function UPI() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    useEffect(() => {
      console.log('Initial data')
      const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:3001/api/upi1?search=${search}`);
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
          const response = await fetch(`http://localhost:3001/api/upii?search=${search}`);
          const data = await response.json();
          console.log('api called')
          setData(data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }, [search]);
    const handleSearch = event => {
      setSearch(event.target.value);
     };
    return (
        <div>
            <div className="search">
            <input className="input" type="text" placeholder="Search.." value ={search} onChange ={(event)=>handleSearch(event)} />
            </div>
            <div>
                {data.map(item => (
                    <div className="grid_item ">
                        <div className="box" key="item.id">
                            <strong>URL: </strong>{item.url}<br />
                            <strong>Bank Name: </strong>{item.bank_name}<br />
                            <strong>IFSC Code: </strong>{item.Ifsc_code}<br />
                            <strong>Recipient Name: </strong>{item.recipient_name}<br />
                            <strong>Recipient ID: </strong>{item.recipient_id}<br />
                            <strong>Recipient Bank: </strong>{item.recipient_bank}<br />
                            <strong>Recipient IFSC Code: </strong>{item.recipient_ifsccode}<br />
                            <strong>Phone Number: </strong>{item.phno}<br />
                            <strong>Recipient Phone Number: </strong>{item.recipient_phno}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default UPI;