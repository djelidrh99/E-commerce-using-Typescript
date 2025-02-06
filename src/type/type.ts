
export type Tcategories= {id?:number,title:string,prefix:string,img:string}
export type Tproducts ={id:number,title:string,img:string,price:string,cat_prefix?:string,max?:number,isLiked?:boolean}
export type Tloading= 'idle' | 'pending' | 'succeeded' | 'failed'
export type TplaceOrderProduct = {id:number,title:string,img:string,price:string,quantity:number}

export type TPlaceOrdersFullInfo = {
    id:number
    userId:number;
    totalPrice:number;
    placeOrders:TplaceOrderProduct[]
  }
