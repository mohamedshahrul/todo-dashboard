import React from "react";
import SkeletonElement from "../SkeletonElement/SkeletonElement";

import "./SkeletonDashboard.css";

function SkeletonDashboard({ placement }) {
  if (placement === "top")
    return (
      <section className="skeleton__appCardContainer">
        <SkeletonElement type="thumbnail" />
        <SkeletonElement type="thumbnail" />
        <SkeletonElement type="thumbnail" />
      </section>
    );

  if (placement === "bottom")
    return (
      <section className="skeleton__appTodoContainer">
        <SkeletonElement type="thumbnail" />
        <SkeletonElement type="thumbnail" />
        <SkeletonElement type="thumbnail" />
      </section>
    );
}

export default SkeletonDashboard;
