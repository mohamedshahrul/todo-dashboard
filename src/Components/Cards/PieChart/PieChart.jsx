import { PieChart } from "react-minimal-pie-chart";
import { useSelector } from "react-redux";
import "./PieChart.css";

function PieChart1() {
  const { tasks } = useSelector((state) => state.tasks);
  const completed = tasks?.filter(({ completed, task }) => {
    if (completed === true) return task;
  });

  return (
    // <div className="piechart">
    //   <div className="piechart__container">
    //     <div className="piechart__big"></div>
    //     <div className="piechart__small"></div>
    //     <label className="piechart__arrow">/</label>
    //     <label className="piechart__name">Completed Tasks</label>
    //   </div>
    // </div>

    <div className="piechart">
      <PieChart
        className="piechart__big"
        data={[
          { title: "Completed", value: completed?.length, color: "#5285ec" },
          {
            title: "Incomplete",
            value: tasks?.length - completed?.length,
            color: "#e8ecec",
          },
        ]}
      />
    </div>
  );
}

export default PieChart1;
