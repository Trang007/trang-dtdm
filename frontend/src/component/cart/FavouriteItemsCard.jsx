import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./FavouriteItemsCard.css";
import { useSelector, useDispatch } from "react-redux";

const FavouriteItemsCard = ({ item, deleteFavouriteItems }) => {
  const dispatch = useDispatch();
  const { project } = useSelector(
    (state) => state.projectDetails
  );

  return (
    <div className='FavouriteItemsCard'>
      <div>
        <img src={item.image} alt="ssa" />
        <p onClick={() => deleteFavouriteItems(item.project)}>Remove</p>
        <Link to={`/project/${item.project}`} style={{
          fontSize: "300 0.9vmax",
          fontFamily: "cursive",
        }}>{item.name}</Link>
      </div>
    </div>
  )
}

export default FavouriteItemsCard
