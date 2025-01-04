import React from 'react'

function ProfileSwitcher() {
  return (
    <>
      <div>
          <div className='onProfile'>
                    <div className='user_logo'>user_logo</div>
                    <div className='user_name'>user name</div>
          </div>
          <div className='switchAccount'></div>
          <div className='logout'>logout</div>
          <div className='setting'>setting</div>
      </div>
    </>
  )
}

export default ProfileSwitcher