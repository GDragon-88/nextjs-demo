import { CaretRightOutlined } from '@ant-design/icons'
import { Collapse, Divider } from 'antd'
import React from 'react'
import style from '../../styles/Component/orderHistory.module.scss'
import moment from 'moment'

function OrderHistory() {
  const formatDate = 'DD-MM-YYYY'
  const data = [
    {
      order_id: '123',
      order_time: "20-06-2023",
      order_status: '1',
      total: '500',
      subTotal: '500',
      discount: '0',
      productList: [
        {
          product_id: '1232',
          product_name: 'product name',
          product_price: '100',
          product_quantity: '5'
        },
        {
          product_id: '12',
          product_name: 'product 2',
          product_price: '100',
          product_quantity: '4'
        },
        {
          product_id: '2',
          product_name: 'product 3',
          product_price: '50',
          product_quantity: '1'
        }
      ]
    },
    {
      order_id: '123w',
      order_time: "17-08-2022",
      order_status: '2',
      total: '350',
      subTotal: '400',
      discount: '50',
      productList: [
        {
          product_id: '123',
          product_name: 'product 123',
          product_price: '200',
          product_quantity: '2'
        },
        {
          product_id: 'sd2',
          product_name: 'product abc',
          product_price: '100',
          product_quantity: '4'
        }
      ]
    }
  ]

  // const renderStatus = (status) => {
  //   switch(status){
  //     case 1:
  //       return ''
  //   }
  // }
  return (
    <div className={style.orderHistory}>
      <div>Order history</div>
      <Divider />
      <div className={style.listOrder}>
        {data.map((item, index) => {
          return (
            <Collapse
              key={index}
              bordered={false}
              className={style.order_detail}
              expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
            >
              <Collapse.Panel
                header={
                  <div className={style.sub_detail}>
                    <div className={style.header_panel}>
                      <div className={style.order_time}>{'Order time'}</div>
                      <div className={style.order_time}>{'Order status'}</div>
                      <div className={style.order_time}>{'Sub total'}</div>
                      <div className={style.order_time}>{'Discount'}</div>
                      <div className={style.order_time}>{'Total'}</div>
                    </div>
                    <div className={style.header_panel}>
                      <div className={style.order_time}>{moment(new Date()).format(formatDate)}</div>
                      <div className={style.order_time}>{item.order_status}</div>
                      <div className={style.order_time}>{item.subTotal}</div>
                      <div className={style.order_time}>{item.discount}</div>
                      <div className={style.order_time}>{item.total}</div>
                    </div>
                  </div>
                }
                key={`${index}-1`}
                showArrow={true}
              >
                <div className={style.list_product}>
                  <div className={style.product_name}>{'Product name'}</div>
                  <div className={style.product_price}>{'Product price'}</div>
                  <div className={style.quantity}>{'Quantity'}</div>
                  <div className={style.subTotal}>{'Sub total'}</div>
                </div>
                {item.productList.map((el) => {
                  return (
                    <div className={style.list_product} key={el.product_id}>
                      <div className={style.product_name}>{'product name'}</div>
                      <div className={style.product_price}>{'2000'}</div>
                      <div className={style.quantity}>{'4'}</div>
                      <div className={style.subTotal}>{'8000'}</div>
                    </div>
                  )
                })}

              </Collapse.Panel>
            </Collapse>
          )
        })}
      </div>

    </div>
  )
}

export default OrderHistory