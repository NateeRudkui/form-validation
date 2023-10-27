import "./FormComponent.css";
import { useState } from "react";

const FormComponent = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassWord, setRePassword] = useState("");

  const [errorUserName, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("password ไม่ปลอดภัย");
  const [errorRePassword, setErrorRePassword] = useState("รหัสผ่านไม่ตรงกัน");

  const validateForm = (e) => {
    e.preventDefault();

    if (userName.length > 8) {
      setErrorUserName("");
    } else {
      setErrorUserName("username ต้องมีความยา 8 ตัวอักษรขึ้นไป");
    }

    if (email.includes("@")) {
      setErrorEmail("");
    } else {
      setErrorEmail("รูปแบบ email ไม่ถูกต้อง");
    }
  };
  return (
    <div className="container">
      <form className="form" onSubmit={validateForm}>
        <div className="form-control">
          <label>ชื่อผ้ใช้</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
          <small>{errorUserName}</small>
        </div>
        <div className="form-control">
          <label>email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <small>{errorEmail}</small>
        </div>
        <div className="form-control">
          <label>password</label>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <small>{errorPassword}</small>
        </div>
        <div className="form-control">
          <label>ยืนยัน password</label>
          <input
            type="text"
            value={repassWord}
            onChange={(e) => setRePassword(e.target.value)}
          ></input>
          <small>{errorRePassword}</small>
        </div>
        <button type="submitฃ">Submit</button>
      </form>
    </div>
  );
};
export default FormComponent;
