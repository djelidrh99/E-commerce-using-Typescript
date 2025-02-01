import { useState } from "react"
import axios from "axios"

type TcheckEmailStatus= "idle" | "checking" | "availible" | "notAvaiulible" | "failed"

const useEmailAvailability = () => {

    const [checkEmailStatus,setCheckEmailStatus]= useState<TcheckEmailStatus>("idle")
    const [entredEamil,setEntredEmail] =useState<null|string>(null)


    const emailAvailibiltyCheck = async (email:string)=>{
        setEntredEmail(email)
        setCheckEmailStatus(prev=>prev="checking")
        try {
            const response = await axios.get(`/user?email=${email}`)
             if ((response.data).length>0) {
                setCheckEmailStatus(prev=>prev="notAvaiulible")  
             } else {
                setCheckEmailStatus(prev=>prev="availible")
            }

             console.log(checkEmailStatus)
           
        } catch {
            setCheckEmailStatus(prev=>prev="failed")        }

    }

    const resetemailAvailibiltyCheck = ()=>{
        setCheckEmailStatus("idle")
        setEntredEmail(null)
    }
    




  
  
    return {emailAvailibiltyCheck,entredEamil,checkEmailStatus,resetemailAvailibiltyCheck}

}

export default useEmailAvailability