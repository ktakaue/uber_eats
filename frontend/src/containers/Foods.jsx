import React, { Fragment, useEffect, useReducer } from 'react';
import {
  initialState as foodsInitialState,
  foodsActionTypes,
  foodsReducer,
} from '../reducers/foods'
import { fetchFoods } from '../apis/foods';
import { REQUEST_STATE } from '../constants';

// export const Foods = ({
//   match // --- matchを追加 ---
// }) => {
  // --- ここから追加 ---
//   const [foodsState, dispatch] = useReducer(foodsReducer, foodsInitialState);
  // --- ここまで追加 ---

//   useEffect(() => {
    // --- ここから修正 ---
//     dispatch({ type: foodsActionTyps.FETCHING });
//     fetchFoods(match.params.restaurantsId)
//       .then((data) => {
//         dispatch({
//           type: foodsActionTyps.FETCH_SUCCESS,
//           payload: {
//             foods: data.foods
//           }
//         });
//       })
    // --- ここまで修正 ---
//   }, [])

export const Foods = ({
  match
}) => {
  const [foodsState, dispatch] = useReducer(foodsReducer, foodsInitialState);

  useEffect(() => {
    dispatch({ type: foodsActionTypes.FETCHING });
    fetchFoods(match.params.restaurantsId)
      .then((data) => {
        dispatch({
          type: foodsActionTypes.FETCH_SUCCESS,
          payload: {
            foods: data.foods
          }
        });
      })
    // --- ここまで修正 ---
  }, [])

  return (
    <Fragment>
      {
        foodsState.fetchState === REQUEST_STATE.LOADING ?
          <Fragment>
            <p>
              ロード中...
            </p>
          </Fragment>
        :
          foodsState.foodsList.map(food =>
            <div key={food.id}>
              {food.name}
            </div>
          )
      }
    </Fragment>
  )
}