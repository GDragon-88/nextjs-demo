import { Divider } from 'antd'
import React, { useState, useTransition } from 'react'
import InfoForm from './component/InfoForm'
import UpdateUserInfo from './component/updateForm'
import FooterButton from './component/FooterButton';
import style from '../../styles/user.module.scss'
function UserInfo() {
   const [tabActive, setTabActive] = useState(1);
   const [disableUpdate, setDisableUpdate] = useState(true)
   const [isPending, startTransition] = useTransition();

   return (
      <div className={style.user_info}>
         <div className={style.header}>
            <Divider orientation='left' className={style.divider}>
               User information
            </Divider>
         </div>
         <div className='info'>
            {tabActive === 1 && <InfoForm />}
            {tabActive === 2 && <UpdateUserInfo setDisableUpdate={(target:any)=>setDisableUpdate(target)}/>}
         </div>
         <FooterButton
            activeTab={tabActive}
            setActive={(target: any) => setTabActive(target)}
            disable = {disableUpdate}
         />
      </div>
   )
}

export default UserInfo