/**
 * 机床品牌model
 */
export class JcBrandModel {
  constructor(
    public brandId: number,
    public brandName: string,
    public brandShortcut: string,
    public brandUrl: string,
    public brandLogo: string,
    public remark: string,
    public sortNo: string,
    public validity: string
  ){}
}

export class JcBrandList {
  constructor(
    public total: number,
    public rows: JcBrandModel[]
  ){}
}
