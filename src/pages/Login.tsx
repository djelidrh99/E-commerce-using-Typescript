import Heading from "@components/common/Heading/Heading";
import Input from "@components/forms/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, signInType } from "@validation/signInSchema";
import { Alert, Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";

function Login() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(useSearchParams());

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signInType>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<signInType> = (data) => console.log(data);

  return (
    <>
      <Heading title={"Sign In"} />
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          {searchParams.get("message") === "Account_Created" && (
            <Alert variant="success">
              Your account is successfully created,please Sign In
            </Alert>
          )}
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              register={register}
              errors={errors.email?.message as string}
              name={"email"}
              label={"Email Addresse"}
            />

            <Input
              register={register}
              errors={errors.password?.message as string}
              name={"password"}
              label={"Password"}
              type="password"
            />

            <Button className="mb-5" variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
}

export default Login;
