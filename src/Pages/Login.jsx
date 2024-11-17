import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Divider,
  Input,
  InputIcon,
  Label,
} from "keep-react";
import { FaGithub, FaGoogle, FaLock, FaRegEnvelope } from "react-icons/fa";

const Login = () => {
  return (
    <div>
      <Card className="max-w-md mx-auto my-2">
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
          <form className="space-y-2">
            <fieldset className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Input
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  className="pl-11"
                />
                <InputIcon>
                  <FaRegEnvelope size={19} color="#AFBACA" />
                </InputIcon>
              </div>
            </fieldset>
            <fieldset className="space-y-1">
              <Label htmlFor="email">Password</Label>
              <div className="relative">
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="pl-11"
                />
                <InputIcon>
                  <FaLock size={19} color="#AFBACA" />
                </InputIcon>
              </div>
            </fieldset>

            <Button type="submit" className="!mt-3 block w-full">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
