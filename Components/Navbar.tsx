import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import style from '../styles/navbar.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { selectCommonState } from '../redux/globalSlice';
import { Drawer, Space, Input, Badge, Popover } from 'antd';
import { CloseOutlined, MenuOutlined, SearchOutlined, ShoppingOutlined, UserOutlined } from '@ant-design/icons';
import { selectAuthState, userLogout } from '../redux/authSlice';
import { selectCartState } from '../redux/cartSlice';


function Navbar() {
  const [mobile, setMobile] = useState(false);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('')
  const { windowWidth } = useSelector(selectCommonState)
  const {userInfo} = useSelector(selectAuthState)
  const {numberItem} = useSelector(selectCartState)

  const dispatch = useDispatch<any>()

  useEffect(() => {
    if (windowWidth < 1024) {
      setMobile(true)
    } else {
      setMobile(false)
      setOpen(false)
    }
  }, [windowWidth])

  const onClose = () => {
    setOpen(false)
  }

  const handleShowMenu = () => {
    setOpen(true)
  }

  const handleSearch = () => {
    if (search) {
      console.log("search", search), 1000
    }

  }

  const onChangeInput = (e: any) => {
    e.stopPropagation()
    setSearch(e.target.value)
  }


  const listUrl = [
    {
      text: 'Go to User',
      url: '/user'
    },
    {
      text: 'Go to About',
      url: '/about'
    },
    {
      text: 'Product',
      url: "/product"
    },
    {
      text: 'Blog',
      url: '/blog'
    }
  ]
  const handleLogout = async() =>{
    console.log('aaa')
   await dispatch(userLogout(null))
  }

  const content = (
    <div className={style.userPopup}>
      <Link href={'/'}>
        User infor
      </Link>
      <Link href={'/login'}>
        <div onClick={handleLogout}>Logout</div>
      </Link>
    </div>
  )

  return (
    <div className={style.header}>
      <div className={style.topbar}>
        <span className={style.user}>
          {!userInfo ? (
            <div>
              <Link href={'/login'}>
                <UserOutlined style={{ fontSize: "24px", marginRight: "10px" }} />
                <span>Login</span>
              </Link>
            </div>
          ):(
            <div>
              <Popover content={content}>
                <span className={style.user}>{userInfo?.name}</span>
              </Popover>
              
            </div>
          )}

        </span>
        <span className={style.cart}>
          <Link href={'/cart'}>
            <Badge count={numberItem} showZero>
              <ShoppingOutlined style={{ fontSize: "24px" }} />
            </Badge>
          </Link>

        </span>
      </div>
      <div className={style.nav_bar}>
        <div className={style.logo}>
          <Link href={"/"}>
            LOGO
          </Link>
        </div>

        <div className={style.search}>
          <Space.Compact className={style.search_input}>
            <Input placeholder='input to search...'
              onChange={(e) => onChangeInput(e)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch()
                }
              }
              }
              suffix={
                <SearchOutlined onClick={handleSearch} />
              }
            />
          </Space.Compact>
        </div>

        {mobile ?
          (
            <MenuOutlined className={style.menu_button} onClick={handleShowMenu} />
          ) : (
            <div className={style.link_site}>
              {listUrl.map((item, index) => {
                return (
                  <div className={style.link} key={index}>
                    <Link href={item.url}>
                      {item.text}
                    </Link>
                  </div>
                )
              }
              )}
            </div>
          )
        }
        <Drawer
          onClose={onClose}
          placement='right'
          open={open}
          className={style.menu_content}
          closeIcon={<CloseOutlined style={{ fontSize: "24px" }} />}
        >

          {listUrl.map((item, index) => {
            return (
              <div onClick={onClose} key={index}>
                <Link href={item.url}>
                  {item.text}
                </Link>
              </div>
            )
          }
          )}
        </Drawer>
      </div>
    </div>
  )
}

export default Navbar