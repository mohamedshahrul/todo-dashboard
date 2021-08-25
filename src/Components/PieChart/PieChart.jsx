import "./PieChart.css";

function PieChart() {
  return (
    <div className="piechart">
      <div className="piechart__container">
        <div className="piechart__big"></div>
        <div className="piechart__small"></div>
        <label className="piechart__arrow">/</label>
        <label className="piechart__name">Completed Tasks</label>
      </div>
    </div>
  );
}

export default PieChart;
