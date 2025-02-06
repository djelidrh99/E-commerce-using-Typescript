import Heading from "@components/common/Heading/Heading";
import Input from "@components/forms/Input";
import { Alert, Col, Row, Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useLogin from "@hooks/useLogin";
import { Navigate } from "react-router-dom";

function Login() {
  const {
    error,
    errors,
    handleSubmit,
    loading,
    onSubmit,
    register,
    searchParams,
    accessToken,
  } = useLogin();

  if (accessToken) {
    return <Navigate to={"/"} />;
  }

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
          {searchParams.get("message") === "Login_is_required" && (
            <Alert variant="danger">
              You need to log in to access this section.
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
              {loading === "pending" ? (
                <>
                  <Spinner
                    style={{ marginRight: "5px" }}
                    animation="border"
                    size="sm"
                    variant="primary"
                  />
                  Loading...{" "}
                </>
              ) : (
                "Sign In"
              )}
            </Button>

            {loading === "failed" && (
              <p
                style={{
                  marginTop: "-45px",
                  fontSize: ".875em",
                  color: "#dc3545",
                }}
              >
                {error}
              </p>
            )}
          </Form>
        </Col>
      </Row>
    </>
  );
}

export default Login;
