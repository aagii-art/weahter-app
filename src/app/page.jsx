import { Background } from "./component/background";
import { Center } from "./component/center";
import { Manrope } from "next/font/google";

const manrope = Manrope( {subsets: ["latin"], weight: "variable" } )

 const  Home = () => {
 
  return (
     < div className={manrope.className} >
       <Background/>
       <Center/>
     </div>
  )
}

export default Home;

