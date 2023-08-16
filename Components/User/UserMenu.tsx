import React from 'react'
import style from '../../styles/Component/usermenu.module.scss'

function UserMenu({ active, setActiveMenu }: any) {
  const onChangeMenu = (target: any) => {
    setActiveMenu(target)
  }
  return (
    <div className={style.user_menu}>
      <ul className={style.tab_menu}>
        <li className={active === 1 ? style.menu_item_active : style.menu_item}
          onClick={() => onChangeMenu(1)}
        >
          User information
        </li>
        <li className={active === 2 ? style.menu_item_active : style.menu_item}
          onClick={() => onChangeMenu(2)}
        >
          Order history
        </li>
        <li className={active === 3 ? style.menu_item_active : style.menu_item}
          onClick={() => onChangeMenu(3)}
        >
          Change password
        </li>
      </ul>
    </div>
  )
}

export default UserMenu