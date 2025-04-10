import { Heart, HomeIcon, MapPin, MapPinIcon, Search, User } from "lucide-react";

export const White = ( {inputChange, input, suggest, data, selectCity, load, value } ) => {

  return (
    <div className=" relative  w-[50%] flex items-center justify-center bg-gray-100  ">

        <div className=" relative h-[828px]  w-[414px]  " >

          <div className="flex flex-col  absolute z-2  w-[500px]  shadow-black right-0 -translate-y-[100%] "  >
                 
                 <div className="flex items-center rounded-full bg-[white]  w-[100%] p-[10px_14px] "  >
                    <Search className="  w-[35px] h-[35px] text-gray-700 " />
                    <input
                      type="text"
                      placeholder="Search"
                      value ={input}
                      onChange={inputChange}
                      className=" flex-1   rounded-[0px] text-[32px] font-bold h-[45px] border-none ml-[24px] focus:outline-none placeholder:text-gray-400 "
                    />
                 </div>
          
          
           </div>

           {suggest.length > 0 &&
                  <ul className=" bg-[white] absolute z-2 right-0 w-[500px] py-[20px] rounded-[20px] mt-[10px] " >
                     {suggest.map((obj) => (
                           <li key={`${obj.name} ${obj.country} ${suggest.indexOf(obj)}`} 
                               onClick={() => selectCity(obj.name)} 
                               className="flex items-center gap-[10px] h-[48px] font-bold text-2xl hover:bg-gray-100 transition-all duration-500 ease-in-out " >
                                    <MapPin className="ml-[20px]" />
                                    <span> {obj.name}, {obj.country}</span>
                           </li>
                           
                     ))}
                  </ul>
                 } 

           { load === false && data &&  <>
            <img src="photos/sun.webp" alt="" className=" -translate-x-[40%] -translate-y-[35%] " />

            <div className=" bg-gray-100/50  w-[100%] p-[30px] h-[100%] absolute z-1 bottom-[0px] right-0  shadow-lg rounded-4xl  " >
        
                           <div className="flex backdrop-blur-sm items-center   " >
                               <div  >
                                 <h4 className="text-gray-400" > { data.forecast.forecastday[0].date } </h4 > 
                                 <h2 className="h-12 text-5xl font-extrabold text-gray-800 " > { data.location.name } </h2>
                               </div>
                               
                              <MapPin  className="ml-auto h-[32px] w-[32px] text-gray-800 " />
                           </div>

                           <div className="w-[100%]  flex justify-center mt-[40px] mb-[40px] " >
                              <img src="photos/sunny.webp" alt="" className="h-[274px] w-[274px] "  />
                           </div>
                            
                           <p className=" font-extrabold text-[110px]  bg-emerald-500 text-transparent bg-clip-text bg-gradient-to-b from-[blue] to-[red]  " >{ data.forecast.forecastday[0].day.maxtemp_c }&deg; </p>
                           <p className="text-purple-600 font-extrabold " >  { data.forecast.forecastday[0].day.condition.text } </p>

                            <div className="flex justify-between mt-[50px] text-gray-800 " > 
                              <HomeIcon className="w-[32px] h-[32px] "  />
                              <MapPinIcon className="w-[32px] h-[32px] text-gray-400 "/>
                              <Heart className="w-[32px] h-[32px] text-gray-400 "/>
                              <User className="w-[32px] h-[32px] text-gray-400 "/>
                            </div>
                    
             </div>
             </> }{
              load === true && 
              <div className=" mt-[5px] h-[100px] w-[200px] " > 
                   <p className=" text-red-500 " > "{value}"  Not found </p>
              </div>
             }
         </div>

         {
          load === true && 
          <div className=" absolute h-[140px] z-3 w-[140px] animate-spin  " >
               <img src="photos/axe.jpg" alt="" className=" rounded-full w-[100%] h-[100%] shadow-md shadow-[black] " /> 
            </div>
         }
    </div>
  );
};
