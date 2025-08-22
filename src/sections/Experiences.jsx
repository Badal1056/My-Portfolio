import { Timeline } from "../components/Timeline";
import { educations } from "../constants";
const EducationSection = () => {
  return (
    <div className="w-full">
      <Timeline data={educations} />
    </div>
  );
};

export default EducationSection;
