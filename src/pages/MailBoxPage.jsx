import { useEffect, useMemo, useState } from "react";
// import "./App.css";
import MailBox from "../component/MailBox/MailBox";
// import MeestExpressUser from "../component/MailBox/meestExpress.json";
import { nanoid } from "nanoid";
import MailBoxForm from "../component/MailBoxForm/MailBoxForm";
import { useDispatch, useSelector } from "react-redux";
import {
  addUser,
  deleteUser,
  filterUser,
} from "../redux/mailbox/mailboxReducer";
import { selectFilter, selectUsers } from "../redux/mailbox/selectors";
import MailBoxFilter from "../component/MailBoxFilter/MailBoxFilter";

function MailBoxPage() {
  // const [filter, setFilter] = useState("");

  // const [users, setUsers] = useState(() => {
  //   const stringyfieUsers = localStorage.getItem("users");
  //   if (!stringyfieUsers) return MeestExpressUser;
  //   const parseUsers = JSON.parse(stringyfieUsers);
  //   return parseUsers;
  // });

  const dispatch = useDispatch();

  const users = useSelector(selectUsers);

  const filter = useSelector(selectFilter);

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const onAddUsers = (formData) => {
    const finalUser = {
      ...formData,
      id: nanoid(),
    };
    dispatch(addUser(finalUser));
  };

  const onDeleteUsers = (userId) => {
    dispatch(deleteUser(userId));
  };

  // const onChangeFilter = (event) => {
  //   dispatch(filterUser(event.target.value));
  // };
  const filterUsers = useMemo(
    () =>
      users.filter(
        (user) =>
          user.userName.toLowerCase().includes(filter.toLowerCase()) ||
          user.userEmail.toLowerCase().includes(filter.toLowerCase())
      ),
    [filter, users]
  );

  return (
    <div>
      <MailBoxForm onAddUsers={onAddUsers} />
      <section>
        <h2>Counter: {counter}</h2>
        <button onClick={() => setCounter(counter + 1)}>
          Click to increment counter
        </button>
      </section>
      <section>
        <MailBoxFilter />
      </section>
      <MailBox
        boxTitle="Meest Express"
        boxUsers={filterUsers}
        onDeleteUsers={onDeleteUsers}
      />
    </div>
  );
}

export default MailBoxPage;
