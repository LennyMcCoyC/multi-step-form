import { NavLink } from "react-router-dom";

export function NavBar({}) {
  return (
    <nav>
      <ul>
        <NavLink to="/">
          <li>
            <span className="list-number">1</span>
            <div className="list-right">
              <span className="step-number">STEP 1</span>{" "}
              <span className="step-name">Your Info</span>
            </div>
          </li>
        </NavLink>

        <li>
          <span className="list-number">2</span>
          <div className="list-right">
            <span className="step-number">STEP 2</span>{" "}
            <span className="step-name">SELECT PLAN</span>
          </div>
        </li>

        <li>
          <span className="list-number">3</span>
          <div className="list-right">
            <span className="step-number">STEP 2</span>{" "}
            <span className="step-name">ADD-ONS</span>
          </div>
        </li>

        <li>
          <span className="list-number">4</span>
          <div className="list-right">
            <span className="step-number">STEP 4</span>{" "}
            <span className="step-name">Summary</span>
          </div>
        </li>
      </ul>
    </nav>
  );
}
