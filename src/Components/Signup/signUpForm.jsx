import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useState, useEffect } from "react";


function SignUpForm({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    // Handle form submission logic here
    console.log("Form submitted");
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-[150px] pb-[60px]">
      <form className="flex max-w-md flex-col gap-[30px] bg-[#FFF5EB] p-8 lg:p-10 lg:w-[400px] rounded-lg shadow-lg text-[#161722]" onSubmit={handleSubmit}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name2" className="text-[#161722]" color="#161722">Full Name</Label>
          </div>
          <TextInput id="name2" type="text" placeholder="Joshua Amazing" required shadow value={name} onChange={(e) => setName(e.target.value)} color="#161722" className="text-[#161722] font-medium" />
        </div>                  
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" className="text-[#161722]" color="#161722">Email</Label>
          </div>
          <TextInput id="email2" type="email" placeholder="name@flowbite.com" required shadow value={email} color="#161722" className="text-[#161722] font-medium" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" className="text-[#161722]" color="#161722">Password</Label>
          </div>
          <TextInput id="password2" type="password" required shadow placeholder="••••••••" value={password} color="#161722" className="text-[#161722] font-medium" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="confirmPassword" className="text-[#161722]" color="#161722">Confirm Password</Label>
          </div>
          <TextInput id="confirmPassword" type="password" required shadow placeholder="••••••••" value={confirmPassword} color="#161722" className="text-[#161722] font-medium" onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="agree" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} required color="#161722" className="text-[#161722]" />
          <Label htmlFor="agree" className="flex text-[#161722]" color="#161722">
            I agree with the&nbsp;
            <a href="/" className="text-[#161722] hover:underline dark:text-[#161722] font-medium">
              terms and conditions
            </a>
          </Label>
        </div>
        <Button type="submit" color="#FFD0A0" className="text-[#161722] font-medium bg-[#FFD0A0] hover:text-xl" disabled={isLoading}>{isLoading ? "Loading..." : "Register New Account"}</Button>
      </form>
    </div>
  );
}

export default SignUpForm;