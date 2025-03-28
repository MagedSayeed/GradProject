import { Link } from "react-router-dom";

export default function SingleGameIcon({ icon, altern,gameLink }) {
    // ToDO
  return (
    <>
      <div className=" col-6 col-md-4 ">
        <Link>
          <img
            className="gameIcon object-fit-fill"
            src={icon}
            alt={altern}
          />
        </Link>
      </div>
    </>
  );
}
