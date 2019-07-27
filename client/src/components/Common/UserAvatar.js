import React from 'react'

const UserAvatar = ({ img }) => {
  return (
    <div>
      <img
        src={img}
        style={{
          marginTop: ' 10%',
          marginLeft: '30%',
          borderRadius: '50%',
          width: '40%'
        }}
        alt="brokenimglink"
      />
    </div>
  )
}
export default UserAvatar
