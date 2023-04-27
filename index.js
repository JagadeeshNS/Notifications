const Notification = (props) => {
  //  Write your code here.
  const { className, text, imageurl } = props;
  return (
    <li className={`notification ${className}`}>
      <img src={imageurl} alt="" className="icon" />
      <p>{text}</p>
    </li>
  );
};

const element = (
  //  Write your code here.
  <div className="container">
    <h1>Notifications</h1>
    <Notification
      imageurl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      className="information-msg"
      text="Information Message"
    />
    <Notification
      imageurl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      className="success-msg"
      text="Success Message"
    />
    <Notification
      imageurl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      className="warning-msg"
      text="Warning Message"
    />
    <Notification
      imageurl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      className="error-msg"
      text="Error Message"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
