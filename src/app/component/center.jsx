export const Center = () => {

  const size = [ 140, 340, 540, 940 ]

    return ( 
        <>
        { size.map( ( v, i) => 
                       <div  key={i} className=" absolute rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 border-[1px] border-gray-300  "
                        style={{ width: `${v}px`, height: `${v}px` }} >
                            { i === 0 && 
                                   <div className=" absolute  w-[140px] h-[140px]  items-center justify-center gap-[15px] flex  rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 border-[1px] border-gray-300 bg-white  " >
                                      <img src="photos/logoL.webp" alt=""  />
                                      <img src="photos/logoR.webp" alt=""  />
                                  </div> }
                       </div>
              )
        }
      </>
   )

}