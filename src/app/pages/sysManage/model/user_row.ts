export class User {
  constructor(
    public id: number,
    public loginName: string,
    public name: string,
    public password: string,
    public sex: number,
    public status: number,
    public deptId: number,
    public roleIds:string,
    public mobile: string,
    public deptName: string,
    public validity:number,
    public createTime:string,
    public rolesList:any
  ){

  }
}
