import React from 'react'
import "./listPage.scss";
import dummyData from "../../lib/dummyData";
import Filter from '../../components/filter/Filter'; // Ensure the path is correct
import Card from '../../components/cards/Card'; // Ensure the path is correct
import Map from "../../components/map/Map";

const ListPage = () => {
    const data = dummyData; // Changed to dummyData

  return (
    <div className='listPage'>
      <div className="listContainer">
        <div className="wrapper">
            <Filter/>
            {data.map(item => (
              <Card key={item.id} item = {item}/>
            ))}  
        </div>
      </div>
      <div className="mapContainer">
        <Map items ={data}/>
      </div>
    </div>
  )
}

export default ListPage
