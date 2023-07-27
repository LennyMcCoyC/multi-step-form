import { useState } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Info } from "./components/Info";
import { Plan } from "./components/Plan";
import { Addon } from "./components/Addon";
import { Summary } from "./components/Summary";
import { ThankYou } from "./components/ThankYou";

export const router = createBrowserRouter([
  {
    element: <NavLayout />,
    children: [
      { path: "/", element: <Info /> },
      { path: "/plan", element: <Plan /> },
      { path: "/addon", element: <Addon /> },
      { path: "/summary", element: <Summary /> },
      { path: "/thankyou", element: <ThankYou /> },
    ],
  },
]);

function NavLayout() {
  const [isYearly, setIsYearly] = useState(false);
  const [plan, setPlan] = useState("Arcade (Monthly)");
  const [planPrice, setPlanPrice] = useState("9");
  const [addonOneChecked, setAddonOneChecked] = useState(false);
  const [addonTwoChecked, setAddonTwoChecked] = useState(false);
  const [addonThreeChecked, setAddonThreeChecked] = useState(false);
  const [addonOnePrice, setAddonOnePrice] = useState(0);
  const [addonTwoPrice, setAddonTwoPrice] = useState(0);
  const [addonThreePrice, setAddonThreePrice] = useState(0);
  const [addonAmount, setAddonAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  return (
    <div className="main-wrapper">
      <NavBar />
      <Outlet
        context={[
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
        ]}
      />
    </div>
  );
}
