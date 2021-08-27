import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDashboard } from "../../actions/todos";
import CreatedTasks from "../CreatedTasks/CreatedTasks";
import CustomCard from "../CustomCard/CustomCard";
import Header from "../Header/Header";
import NewTask from "../NewTask/NewTask";
import NoTask from "../NoTask/NoTask";
import PieChart from "../PieChart/PieChart";
import TodoContainer from "../TodoContainer/TodoContainer";
import UtilityBar from "../UtilityBar/UtilityBar";

function Dashboard() {
  const dispatch = useDispatch();
  const { tasks, isOpenNewTask, isModal } = useSelector((state) => state.tasks);
  const user = JSON.parse(localStorage.getItem("profile"));
  const id = user?.result?.userId;

  useEffect(() => {
    dispatch(getDashboard(id));
  }, [dispatch]);

  if (!tasks?.length && !isOpenNewTask)
    return (
      <>
        <Header />
        <NoTask />
      </>
    );

  return (
    <>
      <Header />
      {isOpenNewTask ? (
        <NewTask />
      ) : (
        <>
          {isModal && <NewTask />}
          <div className={`app__container ${isModal && "app__modal"}`}>
            <section className="app__cardContainer">
              <CustomCard />
              <CreatedTasks />
              <PieChart />
            </section>
            <section className="app__todoContainer">
              <UtilityBar />
              <TodoContainer />
            </section>
          </div>
        </>
      )}
    </>
  );
}

export default Dashboard;
