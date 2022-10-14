import React from 'react'
import { useState } from 'react'
import * as actions from "../../redux/actions";
import {connect} from 'react-redux'


const Product = ({item,imgSrc,nameGood,price,count, remove,addSum}) => {

  const [active, setActive] = useState('true')
  const activeProduct = active ? 'border' : 'border active'
  const btn = document.getElementsByTagName('button')

  const changeActiveTask = (e) => {
    setActive((previousState) => !previousState)
    for (let i = 0; i < btn.length; i++) {
      if (e.target === btn[i]) {
        setActive((previousState) => !previousState)
      }
    }
  }



  return (
    <div className={'catalog__column '}>
      <div className={'catalog__item item_catalog'}>
        <div className={activeProduct} onClick={changeActiveTask}>
          <div className={'item_catalog__image _img'}>
            <img
              className={'product_img'}
              src={imgSrc}
              alt={nameGood}
            />
          </div>
          <div className={'item_catalog_content'}>
            <div className={'content'}>
              <div className={'item_catalog__link'}>
                <h4 className={'item_catalog__title'}>{nameGood}</h4>
              </div>
            </div>
          </div>
          <div className={'item_action'}>
            <div className={'item_price'}>
              <span className={'item_price item_action_text'}>
                {price} $
              </span>
            </div>
            <div className={'item_info'}>
              <p className={'item_catalog__title'}>

                Количество шт: <span>{count}</span>
              </p>
              <button onClick={() => remove(item)}>Удалить</button>
              <button  onClick={() => addSum(price)}>Купить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};




export default  (Product);
