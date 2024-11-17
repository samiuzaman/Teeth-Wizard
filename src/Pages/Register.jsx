import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Divider, Input, Label } from "keep-react";
import { FaGithub, FaGoogle } from "react-icons/fa";


const Register = () => {
  return (
    <div>
      <Card className="max-w-md my-2">
        <CardContent className="space-y-3">
          <CardHeader>
              <CardTitle>Create an account</CardTitle>
              <CardDescription>
                If you don&apos;t have any account then just click here
              </CardDescription>
            </CardHeader>
            <div className="flex items-center justify-between gap-3">
              <Button variant="outline" color="secondary" className="w-full">
                <FaGoogle size={20} className="mr-1.5 text-[#4285F4]" />
                Google
              </Button>
              <Button variant="outline" color="secondary" className="w-full">
                <FaGithub size={20} className="mr-1.5 text-[ #171515]" />
                Github
              </Button>
            </div>
            <Divider>Or</Divider>
          <form  className="space-y-2">
            <fieldset className="space-y-1">
              <Label htmlFor="email">First Name</Label>
              <div className="relative">
                <Input
                  type="text"
                  name="FName"
                  placeholder="Enter First Name"
                  className=""
                />
              </div>
            </fieldset>
            <fieldset className="space-y-1">
              <Label htmlFor="email">Last Name</Label>
              <div className="relative">
                <Input
                  type="text"
                  name="LName"
                  placeholder="Enter First Name"
                  className=""
                />
              </div>
            </fieldset>
            <fieldset className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Input
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  className=""
                />
                {/* <InputIcon>
                    <FaRegEnvelope size={19} color="#AFBACA" />
                  </InputIcon> */}
              </div>
            </fieldset>
            <fieldset className="space-y-1">
              <Label htmlFor="email">Phone Number</Label>
              <div className="relative">
                <Input
                  type="number"
                  name="number"
                  placeholder="Phone Number"
                  className=""
                />
              </div>
            </fieldset>
            <fieldset className="space-y-1">
              <Label htmlFor="password">Appointment date</Label>
              <div className="relative">
                <Input
                  type="date"
                  name="date"
                  placeholder="Appointment date"
                  className=""
                />
                {/* <InputIcon>
                    <FaLock size={19} color="#AFBACA" />
                  </InputIcon> */}
              </div>
            </fieldset>
            <fieldset className="space-y-1">
              <Label htmlFor="password">Address</Label>
              <div className="relative">
                <Input
                  name="address"
                  placeholder="Appointment date"
                  type="password"
                  className=""
                />
                {/* <InputIcon>
                    <FaLock size={19} color="#AFBACA" />
                  </InputIcon> */}
              </div>
            </fieldset>
            <Button type="submit" className="!mt-3 block w-full">
              Make Appointment
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;