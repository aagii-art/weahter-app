import { Background } from "./component/background";
import { Center } from "./component/center";
import { Manrope } from "next/font/google";
import { Logo } from "./component/logo";

const manrope = Manrope( {subsets: ["latin"], weight: "variable" } )

 const  Home = () => {
 
  return (
     < div className={ ` relative ${manrope.className}  `}  >
       <Background/>
       <Center/>
       <Logo/>
     </div>
  )
}

export default Home;

