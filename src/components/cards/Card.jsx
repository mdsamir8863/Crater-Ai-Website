const SingleCard = ({ tittle, data }) => {
  return (
    <div className="card border border-warning border-5 shadow m-2  rounded-2  ">
      <p className="fw-bold text-decoration-underline card-header">{tittle}</p>
      <p>{data}</p>
    </div>
  );
};

export default SingleCard;
