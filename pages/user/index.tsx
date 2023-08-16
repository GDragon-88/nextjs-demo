import React, { useState } from 'react'
import UserMenu from '../../Components/User/UserMenu'
import UserInfo from './userInfo'
import OrderHistory from './orderHistory'
import ChangePassword from './changePassword'
import style from '../../styles/user.module.scss'
function Index() {
  const [activeTab, setActiveTab] = useState(1)
  const setActiveTabMenu = (target: any) => {
    setActiveTab(target)
  }
  return (
    <div className={style.user_page}>
      <div className={style.page_content}>
        <div className={style.col1}>
          <UserMenu
            active={activeTab}
            setActiveMenu={(e: any) => setActiveTabMenu(e)} />
        </div>
        <div className={style.col2}>
          {activeTab === 1 && <UserInfo />}
          {activeTab === 2 && <OrderHistory />}
          {activeTab === 3 && <ChangePassword />}
        </div>

        <a href='tel:0978896741'>send mail</a>
      </div>
    </div>
  )
}

export default Index