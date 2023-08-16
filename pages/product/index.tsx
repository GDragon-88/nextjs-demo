// import Link from 'next/link'
import React, { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import style from '../../styles/product.module.scss'
import ProductCard from '../../Components/Product/ProductCard'
import { Button, Radio, Slider, Collapse, theme, Pagination } from 'antd'
import { CaretRightOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import { getListProduct } from '../../redux/productSlice'

const Index = () => {
  const [orderByName, setOrderByName] = useState('asc')
  const [orderByPrice, setOrderByPrice] = useState('asc')
  const [orderByQuantity, setOrderByQuantity] = useState('asc')
  const [fromPrice, setFromPrice] = useState<any>(0)
  const [toPrice, setToPrice] = useState<any>(0)
  const dispatch = useDispatch<any>()
  const router =  useRouter()
  const {query} = router;
  useEffect(()=> {
    console.log(query)
    for(const key in query){
      switch(key){
        case 'orderByName':
          setOrderByName(query[key]?.toString() || 'asc')
        case 'orderByPrice':
          setOrderByPrice(query[key]?.toString() || 'asc')
        case 'orderByQuantity':
          setOrderByQuantity(query[key]?.toString() || 'asc')
        case 'fromPrice':
          setFromPrice(Number(query[key]) || 0)
        case 'toPrice':
          setToPrice(Number(query[key]) || 0)
      }
    }
  },[query])

  // init
  // const init = useCallback(async()=>{

  //   await dispatch(getListProduct(orderByName))
  // },[])

  const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: 'none',
  };

  const onNameChange = (e: any) => {
    setOrderByName(e.target.value)
  }

  const onPriceChange = (e: any) => {
    setOrderByPrice(e.target.value)
  }

  const onQuantityChange = (e: any) => {
    setOrderByQuantity(e.target.value)
  }

  const onRangeChange = (e: any) => {
    setFromPrice(e[0])
    setToPrice(e[1])
  }

  const handleSort = async () => {
    const payload = {
      orderByName: orderByName || '',
      orderByPrice: orderByPrice || '',
      orderByQuantity: orderByQuantity || 0,
      // rangePrice: `from${range[0]}to${range[1]}`
      fromPrice: fromPrice || 0,
      toPrice: toPrice || 10000000
    }
    router.push({
      pathname: router.pathname,
      query: {...query, ...payload}
    })
    console.log(payload)
  }
  return (
    <div className={style.product_page}>
      <div className={style.sort_form}>

        <Collapse
          bordered={false}
          expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
          style={{ background: token.colorBgContainer }}
        >
          <Collapse.Panel
            header={
              <p className={style.sort_header}>Filter</p>
            }
            key={1}
            showArrow={true}
            style={panelStyle}
          >
            <div className={style.form}>
              <div className={style.sort_field}>
                <p>sort by name</p>
                <div>
                  <Radio.Group onChange={(e) => onNameChange(e)} value={orderByName}>
                    <Radio value={'asc'}>A-Z</Radio>
                    <Radio value={'desc'}>Z-A</Radio>
                  </Radio.Group>
                </div>
              </div>

              <div className={style.sort_field}>
                <p>sort by price</p>
                <div>
                  <Radio.Group onChange={(e) => onPriceChange(e)} value={orderByPrice}>
                    <Radio value={'asc'}>Increase</Radio>
                    <Radio value={'desc'}>Decrease</Radio>
                  </Radio.Group>
                </div>
              </div>

              <div className={style.sort_field}>
                <p>sort by range price </p>
                <Slider range defaultValue={[0,0]}
                  value={[fromPrice, toPrice]}
                  min={0} max={10000000}
                  onChange={onRangeChange}
                  step={100000}
                // onAfterChange={(e) => onRangeChange(e)} 
                  style={{maxWidth:'250px'}}
                />
              </div>

              <div className={style.sort_field}>
                <p>sort by sale quantity </p>
                <Radio.Group onChange={(e) => onQuantityChange(e)} value={orderByQuantity}>
                  <Radio value={'asc'}>Increase</Radio>
                  <Radio value={'desc'}>Decrease</Radio>
                </Radio.Group>
              </div>
            </div>


            <div className={style.sort_apply}>
              <Button type='primary'
                className={style.button_apply_sort}
                onClick={() => handleSort()}
              >
                Sort
              </Button>
            </div>
          </Collapse.Panel>
        </Collapse>
      </div>


      <div className={style.content}>
        <div className={style.col1}>
          <h2>filter</h2>
          <div className={style.sort_field}>
            <p>sort by name</p>
            <div>
              <Radio.Group onChange={(e) => onNameChange(e)} value={orderByName}>
                <Radio value={'asc'}>A-Z</Radio>
                <Radio value={'desc'}>Z-A</Radio>
              </Radio.Group>
            </div>
          </div>

          <div className={style.sort_field}>
            <p>sort by price</p>
            <div>
              <Radio.Group onChange={(e) => onPriceChange(e)} value={orderByPrice}>
                <Radio value={'asc'}>Increase</Radio>
                <Radio value={'desc'}>Decrease</Radio>
              </Radio.Group>
            </div>
          </div>

          <div className={style.sort_field}>
            <p>sort by range price </p>
            <Slider range defaultValue={[0, 0]} 
            min={0} max={10000000} 
            // value={[fromPrice, toPrice]}
            onChange={onRangeChange}
            step={100000}
            // onAfterChange={onRangeChange} 
            />
          </div>

          <div className={style.sort_field}>
            <p>sort by sale quantity </p>
            <Radio.Group onChange={(e) => onQuantityChange(e)} value={orderByQuantity}>
              <Radio value={'asc'}>Increase</Radio>
              <Radio value={'desc'}>Decrease</Radio>
            </Radio.Group>
          </div>

          <div>
            <Button type='primary'
              className={style.button_sort}
              onClick={() => handleSort()}
            >
              Sort
            </Button>
          </div>

        </div>

        <div className={style.col2}>
          <div className={style.productList}>
            {
            [1, 2, 3, 4].map((item) => {
              return (
                <ProductCard key={item} />
              )
            })
          }
          </div>
          

          <div className={style.paginate}>
            <Pagination
              defaultCurrent={1}
              total={50}
              pageSize={10}
              onChange={(e)=>{console.log(e)}}
            />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Index