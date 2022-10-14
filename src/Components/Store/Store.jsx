import React from 'react'
import { useState } from 'react';
import './store.scss'
import Product from '../Product/Product'
import {connect} from 'react-redux'
import * as actions from "../../redux/actions";

const Store = ({counter,addSum}) => {
  const [products, setProducts]  = useState ([
    {
      id: 1,
      nameGood: 'Футбольный мяч',
      imgSrc:
        'https://lenta.servicecdn.ru/globalassets/1/-/57/39/93/336686_9.png?preset=fulllossywhite',
      price: 12,
      count: 45,
    },
    {
      id: 2,
      nameGood: 'Волейбольный мяч',
      imgSrc:
        'https://myachiki.by/upload/iblock/2bb/2bbe43065cbb0ac112b75e83a882f339.jpg',
      price: 22,
      count: 35,
    },
    {
      id: 3,
      nameGood: 'Баскетбольный мяч',
      imgSrc:
        'https://cdn2.static1-sima-land.com/items/329280/3/700-nw.jpg',
      price: 32,
      count: 18,
    },
    {
      id: 4,
      nameGood: 'Теннисный мяч',
      imgSrc:
        'https://m.media-amazon.com/images/I/71krt-XiqcL.jpg',
      price: 42,
      count: 5,
    },
    {
        id: 5,
        nameGood: 'Гимнастический мяч',
        imgSrc:
          'https://7960777a-2fd1-4b07-8bbb-896e98c4659c.selcdn.net/upload/prod_add6/093/product-496093-1.jpg',
        price:15,
        count: 5,
      },
  ])



  const removeProduct = (item) => {

    let btnRemove = window.confirm('Удалить товар?');
    if(btnRemove){
      setProducts(products.filter(p => p.id !== item.id))
    }
  }


  return (
    <div className={'store'}>
     <div className="cart-price">
        Стоимость товаров: {counter} $
      </div>
    <div className={'products'} >
        <div className={'products'}>
          {products.map(item =>
            <Product addSum={addSum} counter={counter} remove={removeProduct} item={item} {...item} key={item.id}/>
            )}
        </div>
    </div>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    counter: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addSum: (price) => dispatch(actions.addSum(price))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Store)
