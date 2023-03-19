import { ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE }
    from "../constans/FavouriteConstans";
import axios from "axios";

// Add to favourites
export const addFavouriteItemsToCart = (id, quantity) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/v2/project/${id}`);

    dispatch({
        type: ADD_TO_FAVOURITE,
        payload: {
            project: data.project._id,
            name: data.project.name,
            image: data.project.images[0].url,
            quantity,
        }
    })

    localStorage.setItem("favouriteItems", JSON.stringify(getState().favourite.favouriteItems));
}

// Delete from favourites
export const deleteFavouriteItemsToCart = (id) => async (dispatch, getState) => {
    dispatch({
        type: REMOVE_FROM_FAVOURITE,
        payload: id,
    });

    localStorage.setItem("favouriteItems", JSON.stringify(getState().favourite.favouriteItems));
};
