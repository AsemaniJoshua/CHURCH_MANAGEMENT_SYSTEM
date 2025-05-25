import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";

function LoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    // Handle form submission logic here
    console.log("Form submitted");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-[100px] pb-[60px]">
      <form
        className="flex max-w-md flex-col gap-[30px] bg-[#FFF5EB] p-8 lg:p-10 lg:w-[400px] rounded-lg shadow-lg text-[#161722]"
        onSubmit={handleSubmit}
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" className="text-[#161722]" color="#161722">Email</Label>
          </div>
          <TextInput
            id="email2"
            type="email"
            placeholder="joshua@gmail.com"
            color="#161722"
            required
            shadow
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-[#161722] text-xl"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" className="text-[#161722]" color="#161722">Password</Label>
          </div>
          <TextInput
            id="password2"
            type="password"
            required
            shadow
            placeholder="••••••••"
            color="#161722"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="text-[#161722] text-xl"
          />
        </div>
        <div className="flex items-center gap-2">
          {/* <Checkbox
            id="agree"
            required
            color="#161722"
            className="text-[#161722]"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          /> */}
          <Label htmlFor="agree" className="flex text-[#161722]" color="#161722">
            {/* I agree with the&nbsp; */} Forget Password?&nbsp;
            <a
              href="/"
              className="text-[#161722] underline font-medium"
            >
              Reset Password
            </a>
          </Label>
        </div>
        <Button
          type="submit"
          disabled={isLoading}
          className="bg-[#FFD0A0] text-[#161722] hover:bg-[#FFD2A4] focus:ring-2 focus:ring-[#FFD0A0] border-none hover:text-xl font-medium" color="#FFD0A0"
        >
          {isLoading ? "Loading..." : "Login Now"}
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
// filepath: c:\Users\NGTs\Music\Frontend\CHURCH_MANAGEMENT_SYSTEM\src\Components\Login\loginForm.jsx