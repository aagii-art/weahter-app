


export const Center = () => {

  const size = [ 140, 340, 540, 940 ]
  

    return ( 
        <>
        { size.map( ( v, i) => 
                       <div className=" absolute rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 border-[1px] border-gray-300 "
                        style={{ width: `${v}px`, height: `${v}px` }} >
                            { i === 0 && 
                                   <div className=" absolute z-1 w-[140px] h-[140px]  items-center justify-center gap-[15px] flex  rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 border-[1px] border-blue-300   " >
                                      <img src="photos/logoL.webp" alt="" className=" w-[43px] h-[86px] " />
                                      <img src="photos/logoR.webp" alt="" className=" w-[43px] h-[86px] " />
                                  </div> }
                       </div>
              )
        }
      </>
   )

}