/**
 * 机床model
 */
export class JcModel {
  constructor(
    public jcId: number,
    public jcName: string,
    public jcTypeId: number,
    public jcTypeName: string,
    public jcBrandId: number,
    public jcBrandName: string,
    public origin: string,
    public productTime: string,
    public usedMonth: number,
    public isSale: number,
    public price: number,
    public jcModelNo: string,
    public feature01: string,
    public feature02: string,
    public feature03: string,
    public feature04: string,
    public feature05: string,
    public remark: string,
    public sortNo: string,
    public validity: string,
    public createTime: string,
    public creator: number,
    public modifyTime: string,
    public modifier: number
  ){}
}

export class JcList {
  constructor(
    public total: number,
    public rows: JcModel[]
  ){}
}
