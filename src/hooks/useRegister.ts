import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, signUpType } from "@validation/signUpSchema";
import useEmailAvailability from "@hooks/useEmailAvailability";



const useRegister = () => {
    
const {emailAvailibiltyCheck,checkEmailStatus,entredEamil,resetemailAvailibiltyCheck} = useEmailAvailability()
  const {
    register,
    handleSubmit,
    getFieldState,
    trigger,
    formState: { errors },
  } = useForm<signUpType>({
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<signUpType> = (data) => console.log(data);

  const onBlurHandler = async (e:React.FocusEvent<HTMLInputElement>)=>{
    await trigger("email")
   const {invalid,isDirty}=getFieldState("email")
   const value = e.target.value

   if(isDirty && !invalid && entredEamil !== value) {
    emailAvailibiltyCheck(value)
   } 
    if (isDirty && invalid && entredEamil) {
      resetemailAvailibiltyCheck()

    }
   
   

  } 

    return {onBlurHandler,onSubmit,checkEmailStatus,register,errors,handleSubmit}
}

export default useRegister