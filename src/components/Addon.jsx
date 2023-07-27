import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Link, useOutletContext } from "react-router-dom";
import { useEffect } from "react";

export function Addon() {
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

  const { handleSubmit } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    if (isYearly) {
      if (addonOneChecked) {
        setAddonOnePrice("10");
      } else {
        setAddonOnePrice("0");
      }
      if (addonTwoChecked) {
        setAddonTwoPrice("20");
      } else {
        setAddonTwoPrice("0");
      }
      if (addonThreeChecked) {
        setAddonThreePrice("20");
      } else {
        setAddonThreePrice("0");
      }
    } else if (!isYearly) {
      if (addonOneChecked) {
        setAddonOnePrice("1");
      } else {
        setAddonOnePrice("0");
      }
      if (addonTwoChecked) {
        setAddonTwoPrice("2");
      } else {
        setAddonTwoPrice("0");
      }
      if (addonThreeChecked) {
        setAddonThreePrice("2");
      } else {
        setAddonThreePrice("0");
      }
    }
  }, []);
  function onSubmit() {
    navigate("/summary");
    setAddonAmount(
      parseInt(addonOnePrice) +
        parseInt(addonTwoPrice) +
        parseInt(addonThreePrice)
    );
    setPlanPriceFunc();
  }

  function setPlanPriceFunc() {
    switch (plan) {
      case "Arcade (Monthly)":
        setPlanPrice("9");
        break;
      case "Advanced (Monthly)":
        setPlanPrice("12");
        break;
      case "Pro (Monthly)":
        setPlanPrice("15");
        break;
      case "Arcade (Yearly)":
        setPlanPrice("90");
        break;
      case "Advanced (Yearly)":
        setPlanPrice("120");
        break;
      case "Pro (Yearly)":
        setPlanPrice("150");
        break;
    }
  }

  function handleAddonOneChange(e) {
    setAddonOneChecked(!addonOneChecked);
    setAddonOnePrice(e.target.value);
  }

  function handleAddonTwoChange(e) {
    setAddonTwoChecked(!addonTwoChecked);
    setAddonTwoPrice(e.target.value);
  }

  function handleAddonThreeChange(e) {
    setAddonThreeChecked(!addonThreeChecked);
    setAddonThreePrice(e.target.value);
  }

  return (
    <div className="page">
      <div className="page-header">
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>
      {!isYearly ? (
        <form id="addon-form" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="online-input" className="addon-label">
            <input
              type="checkbox"
              id="online-input"
              value="1"
              onChange={handleAddonOneChange}
              checked={addonOneChecked === true ? "checked" : null}
            />
            <span className="checkmark"></span>
            <div className="addon-left">
              <span className="addon-description">Online service</span>
              <span className="addon-details">Access to multiplayer games</span>
            </div>
            <span className="addon-price">+$1/mo</span>
          </label>

          <label htmlFor="storage-input" className="addon-label">
            <input
              type="checkbox"
              id="storage-input"
              value="2"
              onChange={handleAddonTwoChange}
              checked={addonTwoChecked === true ? "checked" : null}
            />
            <span className="checkmark"></span>
            <div className="addon-left">
              <span className="addon-description">Large storage</span>
              <span className="addon-details">Extra 1TB of cloud save</span>
            </div>
            <span className="addon-price">+$2/mo</span>
          </label>

          <label htmlFor="profile-input" className="addon-label">
            <input
              type="checkbox"
              id="profile-input"
              value="2"
              onChange={handleAddonThreeChange}
              checked={addonThreeChecked === true ? "checked" : null}
            />
            <span className="checkmark"></span>
            <div className="addon-left">
              <span className="addon-description">Customizable profile</span>
              <span className="addon-details">
                Custom theme on your profile
              </span>
            </div>
            <span className="addon-price">+$2/mo</span>
          </label>
          <div className="button-footer">
            <button className="go-back">
              <Link to="/plan">Go Back</Link>
            </button>
            <button type="submit" className="next-step">
              Next Step
            </button>
          </div>
        </form>
      ) : (
        <form id="addon-form" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="online-input" className="addon-label">
            <input
              type="checkbox"
              id="online-input"
              value="10"
              onChange={handleAddonOneChange}
              checked={addonOneChecked === true ? "checked" : null}
            />
            <span className="checkmark"></span>
            <div className="addon-left">
              <span className="addon-description">Online service</span>
              <span className="addon-details">Access to multiplayer games</span>
            </div>
            <span className="addon-price">+$10/yr</span>
          </label>
          <label htmlFor="storage-input" className="addon-label">
            <input
              type="checkbox"
              id="storage-input"
              value="20"
              onChange={handleAddonTwoChange}
              checked={addonTwoChecked === true ? "checked" : null}
            />
            <span className="checkmark"></span>

            <div className="addon-left">
              <span className="addon-description">Large storage</span>
              <span className="addon-details">Extra 1TB of cloud save</span>
            </div>
            <span className="addon-price">+$20/yr</span>
          </label>
          <label htmlFor="profile-input" className="addon-label">
            <input
              type="checkbox"
              id="profile-input"
              value="20"
              onChange={handleAddonThreeChange}
              checked={addonThreeChecked === true ? "checked" : null}
            />
            <span className="checkmark"></span>

            <div className="addon-left">
              <span className="addon-description">Customizable profile</span>
              <span className="addon-details">
                Custom theme on your profile
              </span>
            </div>
            <span className="addon-price">+$20/yr</span>
          </label>

          <div className="button-footer">
            <button className="go-back">
              <Link to="/plan">Go Back</Link>
            </button>
            <button type="submit" className="next-step">
              Next Step
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
