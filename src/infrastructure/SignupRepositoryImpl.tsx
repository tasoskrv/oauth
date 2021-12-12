import SignUpEntity from "../domain/signup/SignUpEntity";
import SignupRepository from "../domain/signup/SignUpRepository";
import RequestApis from "./apis/RequestApis";

export default class SignupRepositoryImpl implements SignupRepository{
    async signup(loginEntity: SignUpEntity): Promise<any> {        
        let response : any;

        try {
            const responseApi = await RequestApis.post('',{
                email    : loginEntity.email,
                password : loginEntity.password
            }, {
                headers : {
                    'oauth' : 'registration'
                }
            });

            let data = responseApi.data;

            if(!data.success){
                response = {"success":false, message:data.error};
            } else {
                response = {"success":true, id:data.id};
            }

        } catch(ex:any){
            response = {"success":false, message:ex.message};
        }

        return response;
    }
}