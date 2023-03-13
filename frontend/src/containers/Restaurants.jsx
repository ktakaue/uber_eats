import React, { Fragment, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { fetchRestaurants } from '../apis/restaurants'

import Skeleton from '@material-ui/lab/Skeleton';


import { REQUEST_STATE } from '../constants';
import {
  initialState,
  restaurantsActionTypes,
  restaurantsReducer,
} from '../reducers/restaurants'

import { useReducer } from 'react';


import MainLogo from '../images/logo.png';
import MainCoverImage from '../images/main-cover-image.png';
import RestaurantImage from '../images/restaurant-image.jpg';


const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 8px 32px;
`;

const MainLogoImage = styled.img`
  height: 90px;
`

const MainCoverImageWrapper = styled.div`
  text-align: center;
`;

const MainCover = styled.img`
  height: 600px;
`;

const RestaurantsContentsList = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 150px;
`;
const RestaurantsImageNode = styled.img`
  width: 100%;
`;

const RestaurantsContentWrapper = styled.div`
  width: 450px;
  height: 300px;
  padding: 48px;
  `
const MainText = styled.p`
  color: black;
  font-size: 12px;`

const SubText = styled.p`
  color: black;
  font-size: 12px;
`;

export const Restaurants = () => {
  const [state, dispatch] = useReducer(restaurantsReducer, initialState);
  useEffect(() => {
    dispatch({ type: restaurantsActionTypes.FETCHING });
    fetchRestaurants()
      .then((data) => {
        dispatch({
        type: restaurantsActionTypes.FETCH_SUCCESS,
        payload: {
          restaurants: data.restaurants
        }
        })
      }
    )
  }, [])



// このコードは、Reactコンポーネントの1つであり、レストラン一覧を表示するためのUIを作成しています。

// 最初に、<HeaderWrapper>と<MainCoverImageWrapper>でヘッダーとカバー画像を表示しています。
// 次に、<RestaurantsContentsList>でレストランの一覧を表示しています。レストラン一覧は、state.restaurantsListのマッピングを使用して、配列の各要素を繰り返し表示しています。
// ここで、レストラン一覧がロード中である場合は、スケルトンローディングを表示するために<Fragment>と<Skeleton>を使用しています。スケルトンローディングは、ロード中にデータが表示されていない場合にユーザーにフィードバックを提供するために使用されるUIコンポーネントです。
// 最後に、各レストランの詳細ページに移動するための<Link>タグがあります。各レストランの名前、配送料、時間、画像が表示されます。
// このコードは、Reactコンポーネントの視覚的な側面とロジックの両方をカバーしています。 このコードは、Reactアプリケーションの一部であり、レストラン情報を表示するコンポーネントとして使用されることがあります。

  return (
    <Fragment>
      <HeaderWrapper>
        <MainLogoImage src={MainLogo} alt="main logo" />
      </HeaderWrapper>
      <MainCoverImageWrapper>
        <MainCover src={MainCoverImage} alt="main cover" />
      </MainCoverImageWrapper>
      <RestaurantsContentsList>
        {
          state.fetchState === REQUEST_STATE.LOADING ?
            <Fragment>
              <Skeleton variant="rect" width={450} height={300} />
              <Skeleton variant="rect" width={450} height={300} />
              <Skeleton variant="rect" width={450} height={300} />
            </Fragment>
          :
            state.restaurantsList.map((item, index) =>
              <Link to={`/restaurants/${item.id}/foods`} key={index} style={{ textDecoration: 'none' }}>
                <RestaurantsContentWrapper>
                  <RestaurantsImageNode src={RestaurantImage} />
                  <MainText>{item.name}</MainText>
                  <SubText>{`配送料：${item.fee}円 ${item.time_required}分`}</SubText>
                </RestaurantsContentWrapper>
              </Link>
            )
        }
      </RestaurantsContentsList>
    </Fragment>
  )
}