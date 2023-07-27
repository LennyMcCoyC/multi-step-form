import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export function Info() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  function onSubmit() {
    navigate("/plan");
  }

  return (
    <>
      <div className="page info-page">
        <div className="page-header">
          <h1>Personal info</h1>
          <p>Please provide your name, email address, and phone number.</p>
        </div>
        <form
          id="info-form"
          onSubmit={handleSubmit(onSubmit)}
          className={errors ? "errors" : undefined}
        >
          <label htmlFor="name-input">
            <span>Name</span>
            <input
              type="text"
              id="name-input"
              placeholder="e.g. Stephen King"
              {...register("name", {
                required: true,
              })}
            />
            {errors.name && (
              <p className="error-message">This field is required</p>
            )}
          </label>

          <label htmlFor="email-input">
            <span>Email Address</span>
            <input
              type="email"
              id="email-input"
              placeholder="e.g. Stephen King@lorem.com"
              {...register("email", {
                required: true,
              })}
            />
            {errors.email && (
              <p className="error-message">This field is required</p>
            )}
          </label>

          <label htmlFor="phone-input">
            <span>Phone Number</span>
            <input
              type="number"
              id="phone-input"
              placeholder="e.g. +1 234 567 890"
              {...register("phoneNumber", {
                required: true,
              })}
            />
            {errors.phoneNumber && (
              <p className="error-message">This field is required</p>
            )}
          </label>
          <button type="submit" className="next-step">
            Next Step
          </button>
        </form>
      </div>
    </>
  );
}
