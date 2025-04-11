export default function Steps({ num, title, ans }) {
  return (
    <>
      <div className="first d-flex align-items-baseline">
        <span className="me-2 fs-3 fw-bold">{num + 1}.</span>
        <div className="title">
          <h4>{title}</h4>
          <p>{ans}</p>
        </div>
      </div>
    </>
  );
}
