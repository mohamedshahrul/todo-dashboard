import SkeletonElement from "../SkeletonElement/SkeletonElement";

function SkeletonHeader() {
  return (
    <header className="skeletonHeader">
      <div className="header_container">
        <div className="header_imageContainer">
          <SkeletonElement type="avatar" />
          <SkeletonElement type="title" />
        </div>
        <div>
          <SkeletonElement type="title" />
        </div>
      </div>
    </header>
  );
}

export default SkeletonHeader;
