import LoginEntity from "./LoginEntity";

export default interface LoginRepository{
    login(loginEntity:LoginEntity):Promise<any>; 
}