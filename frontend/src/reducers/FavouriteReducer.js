import {
  ADD_TO_FAVOURITE,
  REMOVE_FROM_FAVOURITE,
} from "../constans/FavouriteConstans";

export const favouriteReducer = (
  state = { favouriteItems: [] },
  action
) => {
  switch (action.type) {
    case ADD_TO_FAVOURITE:
      const item = action.payload;

      const isItemExist = state.favouriteItems.find(
        (i) => i.project === item.project
      );

      if (isItemExist) {
        return {
          ...state,
          favouriteItems: state.favouriteItems.map((i) =>
            i.project === isItemExist.project ? item : i
          ),
        };
      } else {
        return {
          ...state,
          favouriteItems: [...state.favouriteItems, item],
        };
      }

    case REMOVE_FROM_FAVOURITE:
      return {
        ...state,
        favouriteItems: state.favouriteItems.filter((i) => i.project !== action.payload),
      };

    default:
      return state;
  }
};

