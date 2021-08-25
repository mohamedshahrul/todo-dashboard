import React from "react";
import Header from "./Components/Header/Header";
import "./App.css";
import Login from "./Components/Login/Login";
import NoTask from "./Components/NoTask/NoTask";
import NewTask from "./Components/NewTask/NewTask";
import CustomCard from "./Components/CustomCard/CustomCard";
import CreatedTasks from "./Components/CreatedTasks/CreatedTasks";
import PieChart from "./Components/PieChart/PieChart";
import UtilityBar from "./Components/UtilityBar/UtilityBar";
import TodoContainer from "./Components/TodoContainer/TodoContainer";

function App() {
  return (
    <div className="app">
      {/* <Login /> */}
      <Header />
      <div className="app__container">
        {/* <NoTask /> */}
        {/* <NewTask /> */}
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
    </div>
  );
}

export default App;
