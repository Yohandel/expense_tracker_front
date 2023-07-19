import React from 'react'
import { Tooltip } from 'react-tooltip'
import { calender, comment, dollar, user, userAdmin, envelope } from '../../utils/Icons'
import { dateFormat } from '../../utils/dateFormat'
import './users.css'

const UserItem = ({
  id,
  name,
  lastName,
  email,
  type,
  birthday,
  status,
}) => {
  return (
    <div className='user-item-container'>
      <div className="icon">
        {type === 'user' ? user : userAdmin}
      </div>
      <div className="u-content">
        <h5>{name} {lastName} ({type})</h5>
        <div className="u-inner-content">
          <div className="u-text">
            <p>{envelope} {email}</p>
            <p>{calender} {dateFormat(birthday)}</p>
            <p className={status ? 'text-success fw-bold' : 'text-danger fw-bold'}>{status ? 'Active' : 'Inactive'}</p>



          </div>
          <a onClick={() => deleteExpense(id)}>
            <i className="fa-solid fa-trash" data-tooltip-id='btn-delete' ></i>
          </a>
        </div>
      </div>
      <Tooltip
        id="btn-delete"
        place="top"
        variant="error"
        content="Delete"
      />
    </div>
  )
}

export default UserItem