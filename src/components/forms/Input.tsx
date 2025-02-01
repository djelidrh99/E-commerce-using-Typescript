import { Form } from "react-bootstrap"
import { Path,  UseFormRegister,FieldValues } from "react-hook-form";

type TForm<TFeildsdVlaue extends FieldValues> ={
   errors: string;
   name: Path<TFeildsdVlaue>;
   label:string;
   register : UseFormRegister<TFeildsdVlaue>;
   type?:string;
   onBlur?:(e:React.FocusEvent<HTMLInputElement>)=>void;
   checkLoading?:string;
   succesCheck?:string
}




const Input = <TFeildsdVlaue extends FieldValues>({errors,name,label,register,type="text",onBlur,checkLoading,succesCheck}:TForm<TFeildsdVlaue> ) => {
  
 const blurHandeler= (e:React.FocusEvent<HTMLInputElement>)=>{
  if (onBlur) {
    onBlur(e)
    register(name).onBlur(e)
  }else {
    register(name).onBlur(e)
  }

 }
  
  return (
<Form.Group className="mb-3">
              <Form.Label>{label}</Form.Label>
              <Form.Control
                {...register(name)}
                type={type}
                isInvalid={errors ? true : false}
                onBlur={blurHandeler}
                isValid={succesCheck?true:false}
                disabled={checkLoading?true:false}
              />
              <Form.Control.Feedback type="invalid">
                {errors}
              </Form.Control.Feedback>
              <Form.Control.Feedback type="valid">
                {succesCheck}
              </Form.Control.Feedback>
              {checkLoading &&
              <Form.Text>
              {checkLoading}
            </Form.Text>
              
              }
              

            </Form.Group>
)
}

export default Input