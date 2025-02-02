import { isAxiosError } from "axios"

const isAxiosErrorHandler = (error:unknown) => {

 if(isAxiosError(error)) {
                return (error?.response?.data || error?.message)
            } else {
                return ("failed to conection")
            }


}

export default isAxiosErrorHandler