import React, { useState } from 'react'
import style from '../../../styles/user.module.scss'
import { Modal } from 'antd'

function FooterButton({ activeTab, setActive, disable }: any) {
   const [openBack, setOpenBack] = useState(false)
   const [openConfirm, setOpenConfirm] = useState(false)
   const setActiveTab = (target: number) => {
      setActive(target)
   }

   const onConfirmBack = (e: any) => {
      setOpenBack(false)
      setActiveTab(e)
   }

   const renderButton = (activeTab: any) => {
      switch (activeTab) {
         case 1:
            return (
               <div className={style.group_button}>
                  <button onClick={() => setActiveTab(2)} className={style.update_button}>
                     Update
                  </button>
               </div>
            )
         case 2:
            return (
               <div className={style.group_button}>
                  <button onClick={() => setOpenBack(true)} className={style.back_button}>
                     Back
                  </button>
                  <button 
                     onClick={() => setOpenConfirm(true)} 
                     className={style.confirm_button}
                     disabled= {disable}
                  >
                     Confirm
                  </button>
               </div>
            )
         default:
            return (
               <></>
            )
      }
   }
   return (
      <>
         <Modal
            className={style.modal_back}
            width={350}
            open={openBack}
            onCancel={() => setOpenBack(false)}
            title={
               <>
                  <span>{'Do you want to discard change?'}</span>
               </>
            }
            footer={
               <div className={style.modal_group_button}>
                  <button className={style.cancel}
                     onClick={() => setOpenBack(false)}
                  >
                     Cancel
                  </button>
                  <button className={style.ok}
                     onClick={() => onConfirmBack(1)}
                  >
                     Ok
                  </button>
               </div>
            }
         >
            {'Are you sure?'}
         </Modal>
         <Modal
            className={style.modal_confirm}
            width={350}
            open={openConfirm}
            onCancel={()=>setOpenConfirm(false)}
            title={
               <>
                  <span>{"Your info are correct?"}</span>
               </>
            }
            footer={
               <div className={style.modal_group_button}>
                  <div className={style.modal_group_button}>
                     <button className={style.cancel}
                        onClick={()=> setOpenConfirm(false)}
                     >
                        Cancel
                     </button>
                     <button className={style.ok}>
                        Ok
                     </button>
                  </div>
               </div>
            }
         >
            {'Are you sure?'}
         </Modal>
         {renderButton(activeTab)}
      </>
   )
}

export default FooterButton