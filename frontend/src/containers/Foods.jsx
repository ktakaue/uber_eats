import React, { Fragment } from 'react';


// 戻り値としてdom要素を返す的な
export const Foods = ({
  match
}) => {
  return (
    <Fragment>
      フード一覧
      <p>restaurantsIdは{ match.params.restaurantsId }</p>
    </Fragment>
  )
}