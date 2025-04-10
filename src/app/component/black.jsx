import { Heart, HomeIcon, MapPin, MapPinIcon, User } from "lucide-react";

export const Black = ({data, load }) => {

    return (
        <div className="  relative  w-[50%] flex items-center justify-center bg-[rgb(15,20,30)]  ">
          { load === false &&
            <div className=" relative h-[828px]  w-[414px]  " >
        
                  <img src="photos/moon-little.webp" alt="" className="absolute right-0 bottom-0 translate-x-[40%] translate-y-[30%] w-[176px] " />
      
                  <div className=" backdrop-blur-md w-[100%] p-[30px] h-[100%] absolute z-1 bottom-[0px] right-0  shadow-lg rounded-4xl  " >
       
                     { data && 
                        <> 
                          <div className="flex  items-center" >
                              <div  >
                                <h4 className="text-gray-400" > { data.forecast.forecastday[0].date } </h4 > 
                                <h2 className="h-12 text-5xl font-extrabold text-white " > { data.location.name } </h2>
                              </div>
                              
                             <MapPin  className="ml-auto h-[32px] w-[32px] text-gray-600 " />
                          </div>
      
                          <div className="w-[100%] flex justify-center mt-[40px] mb-[40px] " >
                             <img src="photos/moon.webp" alt="" className="h-[274px] w-[274px] "  />
                          </div>
                           
                          <p className=" font-extrabold text-[110px]  bg-emerald-500 text-transparent bg-clip-text bg-gradient-to-b from-[black] to-[white] " >{ data.forecast.forecastday[0].day.mintemp_c }&deg; </p>
                          <p className="text-gray-500 font-extrabold " >  { data.forecast.forecastday[0].day.condition.text } </p>
      
                           <div className="flex justify-between mt-[50px] text-gray-800 " > 
                             <HomeIcon className="w-[32px] h-[32px] text-white "  />
                             <MapPinIcon className="w-[32px] h-[32px] text-gray-400 "/>
                             <Heart className="w-[32px] h-[32px] text-gray-400 "/>
                             <User className="w-[32px] h-[32px] text-gray-400 "/>
                           </div>
      
                        </>
                      }
           
                  </div>
             </div>
          } 
          { load === true &&
            <div className=" absolute z-10 h-[140px] w-[140px]  animate-spin  " >
               <img src="photos/axe.jpg" alt="" className=" rounded-full  w-[100%] h-[100%] shadow-md shadow-[white] " /> 
             </div>
       
          }
  
         </div>
    )
}