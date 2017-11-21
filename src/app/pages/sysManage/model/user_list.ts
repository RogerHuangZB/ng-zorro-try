import {User} from "./user_row";
export class UserList {
  constructor(
    public total: number,
    public rows: User[]
  ){

  }
}
