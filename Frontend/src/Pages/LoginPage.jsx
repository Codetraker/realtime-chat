import { Form } from "../Components/Form";
import { SideImage } from "../Components/SideImage";

export const LoginPage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 px-10">
      <div>
        <Form type="login" />
      </div>
      <div className="hidden lg:block">
        <SideImage />
      </div>
    </div>
  );
};
