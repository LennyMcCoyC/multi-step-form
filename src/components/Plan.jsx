import { Link, useOutletContext } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export function Plan() {
  const [
    isYearly,
    setIsYearly,
    plan,
    setPlan,
    planPrice,
    setPlanPrice,
    addon,
    setAddon,
    
  ] = useOutletContext();
  const { handleSubmit } = useForm();

  const navigate = useNavigate();
  function onSubmit() {
    navigate("/addon");
  }

  function handleClick() {
    setIsYearly(!isYearly);
    setPlan("Arcade (Yearly)");
  }

  function handleChange(e) {
    setPlan(e.target.value);
  }

  return (
    <div className="page plan-page">
      <div className="page-header">
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
      </div>

      {/* monthly */}
      {!isYearly ? (
        <form id="plan-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="plan-selection">
            <label htmlFor="arcade-input" className="plan-selection-label">
              <input
                type="radio"
                name="plan"
                value={"Arcade (Monthly)"}
                id="arcade-input"
                className="plan-input"
                checked={
                  plan.includes("Arcade")
                    ? "defaultChecked"
                    : plan === "Arcade (Monthly)"
                    ? "checked"
                    : null
                }
                onChange={handleChange}
              />
              <div className="plan-label-wrapper">
                <img src="/assets/icon-arcade.svg" alt="arcade icon" />
                <div className="plan-label-wrapper-bottom">
                  <span className="plan-name">Arcade</span>{" "}
                  <span className="plan-price">$9/mo</span>
                </div>
              </div>
            </label>

            <label htmlFor="advanced-input" className="plan-selection-label">
              <input
                type="radio"
                name="plan"
                value="Advanced (Monthly)"
                id="advanced-input"
                className="plan-input"
                onChange={handleChange}
                checked={plan === "Advanced (Monthly)" ? "checked" : null}
              />
              <div className="plan-label-wrapper">
                <img src="/assets/icon-advanced.svg" alt="advanced icon" />
                <div className="plan-label-wrapper-bottom">
                  <span className="plan-name">Advanced</span>{" "}
                  <span className="plan-price">$12/mo</span>
                </div>
              </div>
            </label>

            <label htmlFor="pro-input" className="plan-selection-label">
              <input
                type="radio"
                name="plan"
                value="Pro (Monthly)"
                id="pro-input"
                className="plan-input"
                onChange={handleChange}
                checked={plan === "Pro (Monthly)" ? "checked" : null}
              />
              <div className="plan-label-wrapper">
                <img src="/assets/icon-pro.svg" alt="pro icon" />
                <div className="plan-label-wrapper-bottom">
                  <span className="plan-name">Pro</span>{" "}
                  <span className="plan-price">$15/mo</span>
                </div>
              </div>
            </label>
          </div>

          <div className="frequency-wrapper frequency-active-monthly">
            <span id="monthly-label" className="frequency-label">
              Monthly
            </span>
            <button
              className="input-slider"
              type="button"
              onClick={handleClick}
            >
              <span className="slider-left"></span>
              <span className="slider-right"></span>
            </button>
            <span id="yearly-label" className="frequency-label">
              Yearly
            </span>
          </div>

          <div className="button-footer">
            <button className="go-back">
              <Link to="/">Go Back</Link>
            </button>
            <button className="next-step" type="submit">
              Next Step
            </button>
          </div>
        </form>
      ) : (
        // yearly
        <form id="plan-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="plan-selection">
            <label htmlFor="arcade-input" className="plan-selection-label">
              <input
                type="radio"
                name="plan"
                value="Arcade (Yearly)"
                id="arcade-input"
                className="plan-input"
                checked={
                  plan.includes("Arcade")
                    ? "defaultChecked"
                    : plan === "Arcade (Yearly)"
                    ? "checked"
                    : null
                }
                onChange={handleChange}
              />
              <div className="plan-label-wrapper plan-label-wrapper-yearly">
                <img src="/assets/icon-arcade.svg" alt="arcade icon" />
                <div className="plan-label-wrapper-bottom plan-label-wrapper-bottom-yearly">
                  <span className="plan-name">Arcade</span>{" "}
                  <span className="plan-price">$90/yr</span>
                  <span className="plan-discount">2 months free</span>
                </div>
              </div>
            </label>

            <label htmlFor="advanced-input" className="plan-selection-label">
              <input
                type="radio"
                name="plan"
                value="Advanced (Yearly)"
                id="advanced-input"
                className="plan-input"
                onChange={handleChange}
                checked={plan === "Advanced (Yearly)" ? "checked" : null}
              />
              <div className="plan-label-wrapper plan-label-wrapper-yearly">
                <img src="/assets/icon-advanced.svg" alt="advanced icon" />
                <div className="plan-label-wrapper-bottom plan-label-wrapper-bottom-yearly">
                  <span className="plan-name">Advanced</span>{" "}
                  <span className="plan-price">$120/yr</span>
                  <span className="plan-discount">2 months free</span>
                </div>
              </div>
            </label>

            <label htmlFor="pro-input" className="plan-selection-label">
              <input
                type="radio"
                name="plan"
                value="Pro (Yearly)"
                id="pro-input"
                className="plan-input"
                onChange={handleChange}
                checked={plan === "Pro (Yearly)" ? "checked" : null}
              />
              <div className="plan-label-wrapper plan-label-wrapper-yearly">
                <img src="/assets/icon-pro.svg" alt="pro icon" />
                <div className="plan-label-wrapper-bottom plan-label-wrapper-bottom-yearly">
                  <span className="plan-name">Pro</span>{" "}
                  <span className="plan-price">$150/yr</span>
                  <span className="plan-discount">2 months free</span>
                </div>
              </div>
            </label>
          </div>

          <div className="frequency-wrapper frequency-active-yearly">
            <span id="monthly-label" className="frequency-label">
              Monthly
            </span>
            <button
              className="input-slider"
              type="button"
              onClick={handleClick}
            >
              <span className="slider-left"></span>
              <span className="slider-right"></span>
            </button>
            <span id="yearly-label" className="frequency-label">
              Yearly
            </span>
          </div>

          <div className="button-footer button-footer-yearly">
            <button className="go-back">
              <Link to="/">Go Back</Link>
            </button>
            <button className="next-step" type="submit">
              Next Step
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
