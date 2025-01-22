import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@store/store";


export const getTotalCountSelector= createSelector((state: RootState)=>state.cart.items,(items)=>{
    const count = Object.values(items).reduce((accumulatur,current)=>{
        return accumulatur + current
    
      },0)

      return count



})

