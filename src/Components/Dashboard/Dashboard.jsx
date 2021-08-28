import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDashboard } from "../../actions/todos";
import CreatedTasks from "../Cards/CreatedTasks/CreatedTasks";
import CustomCard from "../Cards/CustomCard/CustomCard";
import PieChart from "../Cards/PieChart/PieChart";
import NoTask from "../Task/NoTask/NoTask";
import NewTask from "../Task/NewTask/NewTask";
import Header from "../Header/Header";
import SkeletonDashboard from "../Skeleton/SkeletonDashboard/SkeletonDashboard";
import SkeletonHeader from "../Skeleton/SkeletonHeader/SkeletonHeader";
import SkeletonNoTask from "../Skeleton/SkeletonNoTask/SkeletonNoTask";
import UtilityBar from "../TodoContainer/UtilityBar/UtilityBar";
import TodoContainer from "../TodoContainer/TodoContainer";

function Dashboard() {
  const dispatch = useDispatch();
  const { tasks, isOpenNewTask, isModal, isLoading } = useSelector(
    (state) => state.tasks
  );
  const user = JSON.parse(localStorage.getItem("profile"));
  const id = user?.result?.userId;

  useEffect(() => {
    dispatch(getDashboard(id));
  }, [dispatch]);

  if (!tasks?.length && !isOpenNewTask)
    return (
      <>
        {isLoading ? <SkeletonHeader /> : <Header />}
        {isLoading ? <SkeletonNoTask /> : <NoTask />}
      </>
    );

  return (
    <>
      {isLoading ? <SkeletonHeader /> : <Header />}

      {isOpenNewTask ? (
        <NewTask />
      ) : (
        <>
          {isModal && <NewTask />}
          <div className={`app__container ${isModal && "app__modal"}`}>
            {isLoading ? (
              <SkeletonDashboard placement="top" />
            ) : (
              <section className="app__cardContainer">
                <CustomCard />
                <CreatedTasks />
                <PieChart />
              </section>
            )}

            {isLoading ? (
              <SkeletonDashboard placement="bottom" />
            ) : (
              <section className="app__todoContainer">
                <UtilityBar />
                <TodoContainer />
              </section>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default Dashboard;
