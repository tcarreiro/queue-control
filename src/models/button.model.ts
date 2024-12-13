export type ButtonInfo = {
  label: string;
  icon?: string;
  action?:()=>void
};

export type ButtonStyle = {
  btnClass?:string;
  minWidth?:number;
  height?:number;
  color?:string
}
