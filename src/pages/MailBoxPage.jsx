import { useState } from "react";
// import "./App.css";
import MailBox from "../component/MailBox/MailBox";
// import MeestExpressUser from "../component/MailBox/meestExpress.json";
import { nanoid } from "nanoid";
import MailBoxForm from "../component/MailBoxForm/MailBoxForm";
import { useDispatch, useSelector } from "react-redux";
import {
  addUser,
  deleteUser,
  // filterUser,
} from "../redux/mailbox/mailboxReducer";
// import { selectFilter, selectUsers } from "../redux/mailbox/selectors";
import MailBoxFilter from "../component/MailBoxFilter/MailBoxFilter";
import { selectFilteredUsers } from "../redux/mailbox/selectors";

function MailBoxPage() {

  const dispatch = useDispatch();

  // const users = useSelector(selectUsers);

  // const filter = useSelector(selectFilter);

  const [counter, setCounter] = useState(0);

  const filteredUsers = useSelector(selectFilteredUsers)

  // useEffect(() => {
  //   localStorage.setItem("users", JSON.stringify(users));
  // }, [users]);

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

  // const filterUsers = useMemo(
  //   () =>
  //     users.filter((user) => {
  //       return (
  //         user.userName.toLowerCase().includes(filter.toLowerCase()) ||
  //         user.userEmail.toLowerCase().includes(filter.toLowerCase())
  //       );
  //     }),
  //   [filter, users]
  // );

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
        boxUsers={filteredUsers}
        onDeleteUsers={onDeleteUsers}
      />
    </div>
  );
}

export default MailBoxPage;
