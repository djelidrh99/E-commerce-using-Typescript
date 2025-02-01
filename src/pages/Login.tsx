import Heading from '@components/common/Heading/Heading';
import Input from '@components/forms/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema,signInType } from '@validation/signInSchema';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { SubmitHandler, useForm } from 'react-hook-form';


function Login() {

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
    <Heading title={'User Login'}/>
    <Row>
      <Col md={{span:6,offset:3}} >
      <Form onSubmit={handleSubmit(onSubmit)}>
      

            <Input
              register={register}
              errors={errors.email?.message as string}
              name={"email"}
              label={"Email Adress"}
            />

            <Input
              register={register}
              errors={errors.password?.message as string}
              name={"password"}
              label={"Password"}
              type="password"
            />
  
       
  
        <Button className='mb-5' variant="primary" type="submit">
          Login
        </Button>
      </Form>
      </Col>
    
    </Row>
    
    </>
  )
}

export default Login