import RightFollowUpCards from "./RightFollowUpCards";

const RightSection = () => {
  return (
    <div className="p-4">
      <div>
        <span className="float-end">
          <i class="bi bi-bell"></i> <b>David Haris</b>
        </span>
        <h6>
          <i class="bi bi-arrow-left"></i> Back to Dashboard
        </h6>
      </div>
      <h4 className="mt-3">Current Appointment</h4>
      <div className="mt-3">
        <RightFollowUpCards />
      </div>
    </div>
  );
};
export default RightSection;
