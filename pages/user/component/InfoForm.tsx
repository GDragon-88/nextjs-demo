import React from 'react'
import style from '../../../styles/user.module.scss'
function InfoForm() {
  return (
    <div className={style.user_form}>
      <div className={style.form_item}>
        <span>Name:</span>
        <span>{'John'}</span>
      </div>
      <div className={style.form_item}>
        <span>Email:</span>
        <span>{'xxx@mail.dv'}</span>
      </div>
      <div className={style.form_item}>
        <span >Phone number:</span>
        <span>{"098988787"}</span>
      </div>
      <div className={style.form_item}>
        <span>Date of birth:</span>
        <span>{'15/06/2000'}</span>
      </div>
      <div>Address Information</div>
      <div className={style.form_item}>
        <span>City/province:</span>
        <span>{'Hanoi'}</span>
      </div>
      <div className={style.form_item}>
        <span>District:</span>
        <span>{'Namtuliem'}</span>
      </div>
      <div className={style.form_item}>
        <span>Ward</span>
        <span>{'XuanPhuong'}</span>
      </div>
      <div className={style.form_item}>
        <span>House number, street</span>
        <span>{'11/211 line 15'}</span>
      </div>
    </div>
  )
}

export default InfoForm