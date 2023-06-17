import React, { useEffect, useState } from "react";
import "./App.css";


function App() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(`https://dummyjson.com/users`)
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setData(actualData.users);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <tbody id="tb">
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>E-Mail</th>
          <th>Phone No.</th>
          <th>Userame</th>
          <th>Date of Birth</th>
          <th>Image </th>
          <th>Height</th>
          <th>Weight</th>
          <th>Address</th>
          <th>Bank</th>
          <th>Company</th>
        </tr>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.firstName} {item.lastName}</td>
            <td>{item.age}</td>
            <td>{item.gender}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.username}</td>
            <td>{item.birthDate}</td>
            <td><img src={item.image} alt="" height={100} /></td>
            <td>{item.height}cm</td>
            <td>{item.weight}kg</td>
            <td>{item.address.city} @ {item.address.coordinates.lat},{item.address.coordinates.lng}</td>
            <td>{item.bank.cardExpire}</td>
            <td>{item.company.name}</td>
          </tr>
        ))}
      </tbody>
    </div>
  );
}

export default App;

