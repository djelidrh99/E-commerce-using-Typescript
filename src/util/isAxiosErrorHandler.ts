import { isAxiosError } from "axios"

const isAxiosErrorHandler = (error:unknown) => {

 if(isAxiosError(error)) {
                return (error.response?.data.massege)
            } else {
                return ("failed to conection")
            }


}

export default isAxiosErrorHandler