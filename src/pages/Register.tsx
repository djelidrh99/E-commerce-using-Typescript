import Heading from "@components/common/Heading/Heading";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Input from "@components/forms/Input";
import useRegister from "@hooks/useRegister";

function Register() {
  const {checkEmailStatus,onBlurHandler,onSubmit,errors,register,handleSubmit} =useRegister()
  
  return (
    <>
      <Heading title={"User Register"} />
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              register={register}
              errors={errors.firstName?.message as string}
              name={"firstName"}
              label={"First Name"}
            />

            <Input
              register={register}
              errors={errors.lastName?.message as string}
              name={"lastName"}
              label={"Last Name"}
            />

            <Input
              register={register}
              errors={errors.email?.message ? errors.email?.message as string: checkEmailStatus==="notAvaiulible"?"email is already used":""}
              name={"email"}
              label={"Email Adress"}
              onBlur={onBlurHandler}
              checkLoading={checkEmailStatus==="checking"?"wait for checking...":""}
              succesCheck={checkEmailStatus==="availible"?"email is available to use":""}
            />

            <Input
              register={register}
              errors={errors.password?.message as string}
              name={"password"}
              label={"Password"}
              type="password"
            />

            <Input
              register={register}
              errors={errors.confirmPassword?.message as string}
              name={"confirmPassword"}
              label={"Confirm Password"}
              type="password"
            />

            <Button className="mb-5" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
}

export default Register;
