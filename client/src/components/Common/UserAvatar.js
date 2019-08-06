import React from 'react'

const UserAvatar = ({ img }) => {
  return (
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
  )
}
export default UserAvatar
