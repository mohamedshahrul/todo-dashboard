import "./CustomCard.css";

function CustomCard() {
  return (
    <div className="customcard">
      <label className="customcard_title">Task Completed</label>
      <div className="customcard__taskCount">
        <h1 className="customcard__available">5</h1>
        <p className="customcard__total">/ 20</p>
      </div>
    </div>
  );
}

export default CustomCard;
