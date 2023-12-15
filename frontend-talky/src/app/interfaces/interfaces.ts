export interface InewUserDetails{
    fullName:string
    userName:string
    email:string
    password:string
}

export interface IUserLogincredntials{
    email:string
    password:string
}
export interface IloggedUser{
    email:string
    token:string
}
export interface IflashMessage {
    type: 'error' | 'success' | 'info'
    message:string
  }