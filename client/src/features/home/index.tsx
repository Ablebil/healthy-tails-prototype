import Navbar from "../../shared/components/Navbar"
import Main from "../../shared/components/Main"
import Hero from "./pages/Hero"
import History from "./pages/History"
import Service from "./pages/Service"
import Veterinarian from "./pages/Veterinarian"
import Hours from "./pages/Hours"
import Shop from "./pages/Shop"
import Feedback from "./pages/Feedback"
import Footer from "./pages/Footer"



const Index = () => {

   return (
      <div className="w-full h-fit flex flex-col items-center relative gradient-background-light">
         {/* Navbar di luar smooth wrapper */}
         <Navbar isHome={true} />

         {/* ScrollSmoother wrapper */}
         <Main>
            <Hero />
            <History />
            <Service />
            <Veterinarian />
            <Hours />
            <Feedback />
            <Shop />
            <Footer />
         </Main>
      </div>
   )
}

export default Index