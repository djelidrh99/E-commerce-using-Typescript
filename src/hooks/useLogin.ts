import { SubmitHandler, useForm } from "react-hook-form";
import { useSearchParams} from "react-router-dom";
import { postSigniInThunk } from "@store/Auth/thunk/postSigniInThunk";
import { useAppDispatch, useAppSelector } from "@store/Hooks/hooks";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { resetLoadingError } from "@store/Auth/authSlice";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, signInType } from "@validation/signInSchema";



const useLogin = () => {
    const navigate=useNavigate()
    const dispatch =useAppDispatch()
    const {loading,error,accessToken}=useAppSelector(state=>state.auth)
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
  
    const onSubmit: SubmitHandler<signInType> = async (data) => {
          dispatch(postSigniInThunk(data)).unwrap().then(()=>{
           navigate("/")
           setSearchParams("")
          })
    };
  
    useEffect(()=>{
     


      return ()=>{
        dispatch(resetLoadingError())
      }
  
    },[dispatch])

  

    
  
  
    return {searchParams,
        handleSubmit,
        onSubmit,
        register,
        errors,
        loading,
        error,
        accessToken
      }
}

export default useLogin