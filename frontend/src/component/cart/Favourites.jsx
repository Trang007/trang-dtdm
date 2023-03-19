import React from 'react';
import "./Favourite.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteFavouriteItemsToCart, deleteOfferFavouriteItemsToCart } from "../../actions/FavouriteAction"
import { Typography } from "@material-ui/core";
import RemoveShoppingCartIcon from "@material-ui/icons/FavoriteBorder";
import { Link } from "react-router-dom";
import FavouriteItemsCard from './FavouriteItemsCard.jsx';
import MetaData from '../../more/Metadata';
import Loading from '../../more/Loader';
import { useState } from "react";
import BottomTab from '../../more/BottomTab';

const Favourite = ({ history }) => {
  const dispatch = useDispatch();

  const { loading } = useSelector(
    (state) => state.projectDetails
  );
  const { favouriteItems } = useSelector((state) => state.favourite);

  const deleteFavouriteItems = (id) => {
    dispatch(deleteFavouriteItemsToCart(id));
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <MetaData title="Yêu thích" />
          {favouriteItems.length === 0 ? (
            <div className="emptyCart">
              <RemoveShoppingCartIcon />
              <Typography>
                Không có mục nào trong mục ưa thích</Typography>
              <Link to="/project">Xem đồ án</Link>
              <BottomTab />
            </div>
          ) : (
            <>
              <div className="favouritesPage">
                <div className="favouritesHeader">
                  <p>Đồ án</p>
                  <p>Trạng thái</p>
                </div>
                {favouriteItems &&
                  favouriteItems.map((item) => (
                    <div className="favouritesContainer" key={item.project}>
                      <FavouriteItemsCard item={item} deleteFavouriteItems={deleteFavouriteItems} />
                    </div>
                  ))
                }
                <BottomTab />
              </div>
            </>
          )}
        </>
      )}
    </>
  )
}

export default Favourite
