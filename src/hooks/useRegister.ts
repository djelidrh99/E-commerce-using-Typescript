import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, signUpType } from "@validation/signUpSchema";
import useEmailAvailability from "@hooks/useEmailAvailability";
import { postAuthThunk } from "@store/Auth/thunk/postAuthThunk";
import { useAppDispatch, useAppSelector } from "@store/Hooks/hooks";
import { useNavigate } from "react-router-dom";



const useRegister = () => {
  const navigate=useNavigate()
  const dispatch =useAppDispatch()
  const {loading,error}=useAppSelector(state=>state.auth)
    
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

  const onSubmit: SubmitHandler<signUpType> = async (data) => {
    const {firstName,lastName,email, password}=data
     dispatch(postAuthThunk({firstName,lastName,email, password})).unwrap()
     .then(()=>navigate("/login?message=Account_Created"))
        
  };

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

    return {onBlurHandler,onSubmit,checkEmailStatus,register,errors,handleSubmit,loading,error}
}

export default useRegister