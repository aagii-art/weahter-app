

export const Logo = () => {
    return (
        <div className=" absolute z-1 top-[50%]  left-[50%]  -translate-y-[50%] h-[200px] w-[100px]" >
           <div className=" h-[60px] w-[80px] top-[-15px]  bg-[rgb(15,20,30)] absolute z-[2] rounded-bl-full " ></div>
           <div className=" h-[60px] top-[-12] w-[30px] bg-gray-100 absolute z-1 " ></div>
           <div className=" h-[60px] w-[80px] bottom-[-15px] bg-[rgb(15,20,30)] absolute z-[2] rounded-tl-full " ></div>
           <div className=" h-[60px] bottom-[-12] w-[30px] bg-gray-100 absolute z-1 " ></div>
        </div>
    )
}