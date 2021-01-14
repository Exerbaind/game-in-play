const PageHandler = (props) => {
  return (
    <div
      className={`page-handler ${
        props.popUpHandler ? "page-handler--hide" : ""
      }`}
    >
      <div className="page-handler__container">
        <button className="page-handler__button" onClick={props.prevPage}>
          Предыдущая страница
        </button>
        <p className="page-handler__current-page">{props.pageNumber}</p>
        <button className="page-handler__button" onClick={props.nextPage}>
          Следующая страница
        </button>
      </div>
    </div>
  );
};

export default PageHandler;
