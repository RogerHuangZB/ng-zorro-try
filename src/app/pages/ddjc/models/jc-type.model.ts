/**
 * 机床类型model
 */
export class JcTypeModel {
  constructor(
    public typeId: number,
    public typeName: string,
    public typePid: string,
    public typePname: string,
    public remark: string,
    public sortNo: string,
    public validity: string,
  ){}
}

export class JcTypeList {
  constructor(
    public total: number,
    public rows: JcTypeModel[]
  ){}
}
