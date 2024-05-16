import css from './MailBoxItem.module.css'

const MailBoxItem = ({user, onDeleteUsers}) => {
    return (
      
      <li>
        <p>Email: {user.userEmail}</p>
        <p className={css.name}>Name: <span style={{backgroundColor: user.favColor}} className={css.color} /> {user.userName}</p>
        <button type="button" onClick={() => onDeleteUsers(user.id)}>❌ Delete user</button>
      </li>
      
    )
  }
  
  export default MailBoxItem