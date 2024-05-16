import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { MAX_CHAR_NAME_VALIDATION } from "../../utils/constans";

const FORM_INITIAL_VALUES = {
  userEmail: "",
  userName: "",
  favColor: "",
};

const mailBosSchema = Yup.object({
  userEmail: Yup.string()
    .required("Email adress is reguired")
    .email("You must enter valid email adress!")
    .matches(/[^\s]+/, "not trim"),
  userName: Yup.string()
    .required("User name is reguired")
    .max(
      MAX_CHAR_NAME_VALIDATION,
      `Your user name must be less than ${MAX_CHAR_NAME_VALIDATION} sumbal`
    ),
  favColor: Yup.string()
    .required("favourite color is reguired")
    .oneOf(["red", "green", "blue"], "favourite color must be one "),
});

const MailBoxForm = ({ onAddUsers }) => {
  const handleSubmit = (values, actions) => {
    onAddUsers(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={mailBosSchema} >
      <Form>
        <h2>Add new users</h2>
        <label>
          <span>User email</span>
          <br />
          <Field type="email" name="userEmail" placeholder="@email" />
          <ErrorMessage component="p" name="userEmail" />
        </label>
        <br />
        <label>
          <span>User name</span>
          <br />
          <Field type="text" name="userName" placeholder="name" required />
          <ErrorMessage component="p" name="userName" />
        </label>
        <br />
          <span>favourite color</span>
          <br />
          <label>
            <Field type="radio" name="favColor" value="red" />
            <span>Red:</span>
          </label>
          <label>
            <Field type="radio" name="favColor" value="green" />
            <span>Green:</span>
          </label>
          <label>
            <Field type="radio" name="favColor" value="blue" />
            <span>Blue:</span>
            <ErrorMessage component="p" name="favColor" />
          </label>
        <br />
        <button type="submit"> ▶ Create new users</button>
      </Form>
    </Formik>
  );
};

export default MailBoxForm;