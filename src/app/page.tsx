import Main from "./Main/page";
import Services from "./Services/page";
import Family from "./Family/page";
import Facilities from "./Facilities/page";
import Trainers from "./Trainers/page";
import Contact from "./Contact/page";

export default function Home() {
  return (
   <div>
      <Main/>
      <Services/>
      <Family/>
      <Facilities/>
      <Trainers/>
      <Contact/>
   </div>
  );
}
