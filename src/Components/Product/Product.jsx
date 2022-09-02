import React from 'react'
import { useState } from 'react'

// import './product.scss'

const Product = (props) => {
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
              src={props.item.imgSrc}
              alt={props.item.nameGood}
            />
          </div>
          <div className={'item_catalog_content'}>
            <div className={'content'}>
              <div className={'item_catalog__link'}>
                <h4 className={'item_catalog__title'}>{props.item.nameGood}</h4>
              </div>
            </div>
          </div>
          <div className={'item_action'}>
            <div className={'item_price'}>
              <span className={'item_price item_action_text'}>
                {props.item.price}
              </span>
            </div>
            <div className={'item_info'}>
              <p className={'item_catalog__title'}>

                Количество шт: <span>{props.item.count}</span>
              </p>
              <button onClick={() => props.remove(props.item)}>Удалить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
