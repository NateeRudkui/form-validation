import "./FormComponent.css";

const FormComponent = () => {
  return (
    <div className="container">
      <form className="form">
        <div className="form-control">
          <label>ชื่อผ้ใช้</label>
          <input type="text"></input>
          <small>error magssge</small>
        </div>
      </form>
      <form className="form">
        <div className="form-control">
          <label>email</label>
          <input type="text"></input>
          <small>error magssge</small>
        </div>
      </form>
      <form className="form">
        <div className="form-control">
          <label>password</label>
          <input type="text"></input>
          <small>error magssge</small>
        </div>
      </form>
      <form className="form">
        <div className="form-control">
          <label>ยืนยัน password</label>
          <input type="text"></input>
          <small>error magssge</small>
        </div>
      </form>
      <button type="submit"></button>
    </div>
  );
};
export default FormComponent;
