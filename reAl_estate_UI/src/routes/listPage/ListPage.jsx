import React from 'react'
import "./listPage.scss";
import { listData } from '../../lib/dummyData';
import Filter from '../../components/filter/Filter'; // Ensure the path is correct
import Card from '../../components/cards/Card'; // Ensure the path is correct
import Map from '../../components/map/map';

const ListPage = () => {
    const data = listData; // Assuming you want to use the dummy data here

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
