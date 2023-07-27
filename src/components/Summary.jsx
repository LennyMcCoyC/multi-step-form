import { useEffect } from "react";
import { Link, useOutletContext } from "react-router-dom";

export function Summary() {
  const [
    isYearly,
    setIsYearly,
    plan,
    setPlan,
    planPrice,
    setPlanPrice,
    addonOneChecked,
    setAddonOneChecked,
    addonTwoChecked,
    setAddonTwoChecked,
    addonThreeChecked,
    setAddonThreeChecked,
    addonOnePrice,
    setAddonOnePrice,
    addonTwoPrice,
    setAddonTwoPrice,
    addonThreePrice,
    setAddonThreePrice,
    addonAmount,
    setAddonAmount,
    totalAmount,
    setTotalAmount,
  ] = useOutletContext();

  useEffect(() => {
    setTotalAmount(parseInt(planPrice) + parseInt(addonAmount));
  }, []);

  return (
    <div className="page">
      <div className="page-header">
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>
      </div>
      <div className="summary-wrapper">
        <div className="summary-wrapper-top">
          <div className="summary-plan">
            <div className="summary-plan-left">
              <p id="plan-summary">{plan}</p>
              <button id="change">
                {" "}
                <Link to="/plan">Change</Link>
              </button>
            </div>
            {!isYearly ? (
              <span>{`$${planPrice}/mo`}</span>
            ) : (
              <span>{`$${planPrice}/yr`}</span>
            )}
          </div>

          <div className="summary-addon ">
            <div
              className={addonOneChecked ? "summary-addon-wrapper" : "hidden"}
            >
              <span className="addon-name">Online service</span>
              <span className="addon-price">
                {isYearly ? "+$10/yr" : "+$1/mo"}
              </span>
            </div>
            <div
              className={addonTwoChecked ? "summary-addon-wrapper" : "hidden"}
            >
              <span className="addon-name">Large Storage</span>
              <span className="addon-price">
                {isYearly ? "+$20/yr" : "+$2/mo"}
              </span>
            </div>
            <div
              className={addonThreeChecked ? "summary-addon-wrapper" : "hidden"}
            >
              <span className="addon-name">Customizable profile</span>
              <span className="addon-price">
                {isYearly ? "+$20/yr" : "+$2/mo"}
              </span>
            </div>
          </div>
        </div>

        <div className="total-summary">
          {!isYearly ? (
            <span className="total">Total (per month)</span>
          ) : (
            <span className="total">Total (per year)</span>
          )}

          {!isYearly ? (
            <span className="total-price">{`$${totalAmount}/mo`}</span>
          ) : (
            <span className="total-price">{`$${totalAmount}/yr`}</span>
          )}
        </div>
      </div>

      <div className="button-footer">
        <button className="go-back">
          <Link to="/addon">Go Back</Link>
        </button>
        <button className="next-step" id="confirm">
          <Link to="/thankyou">Confirm</Link>
        </button>
      </div>
    </div>
  );
}
