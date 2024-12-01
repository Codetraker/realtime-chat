import { Form } from "../Components/Form";
import { SideImage } from "../Components/SideImage";

export const SignupPage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 px-10">
      <div>
        <Form type="signup" />
      </div>
      <div className="hidden lg:block">
        <SideImage />
      </div>
    </div>
  );
};
