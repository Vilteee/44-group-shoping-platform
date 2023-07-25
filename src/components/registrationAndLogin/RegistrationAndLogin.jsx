import { Registration } from "./Registration";
import { Login } from "./Login";


export function RegistrationAndLogin({registrationAndLoginData}) {
    return(
        <div>
            <Registration RegistrationAndLoginTemplateData={registrationAndLoginData[0]} />
            <Login RegistrationAndLoginTemplateData={registrationAndLoginData[1]} />
        </div>
    )
            
}