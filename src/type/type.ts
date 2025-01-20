
export type Tcategories= {id?:number,title:string,prefix:string,img:string}
export type Tproducts ={id:number,title:string,img:string,price:string,cat_prefix?:string,max:number}
export type Tloading= 'idle' | 'pending' | 'succeeded' | 'failed'