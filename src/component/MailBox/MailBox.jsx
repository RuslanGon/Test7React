import MailBoxItem from "../MailBoxItem/MailBoxItem";
import css from "./MailBox.module.css";

const MailBox = ({ boxTitle, boxUsers, onDeleteUsers }) => {
  return (
    <div>
      <h2 className={css.desc}>{boxTitle}</h2>
      <ul className={css.mailBoxlist}>
        {Array.isArray(boxUsers) && boxUsers.map((user) => {
          return <MailBoxItem onDeleteUsers={onDeleteUsers} user={user} key={user.id} />;
        })}
      </ul>
    </div>
  );
};

export default MailBox;