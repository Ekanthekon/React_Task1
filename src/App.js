import Boxes from "./Component/Boxes/Boxes";
import Card from "./Component/Card/Card";
import Notification from "./Component/Notification/Notification";
import Banner from "./Component/ReusableBanners/Banner";

import Button from "./Component/Socialbutton/Button";

import Superover from "./Component/Superover";
import Technology from "./Component/TechnologyCards/Cards";




function App() {
  return (
    <div className="App">
    
     {/* <Superover></Superover> */}
     {/* <Boxes></Boxes> */}
     {/* <Card></Card> */}
     {/* <Notification></Notification> */}
     {/* <Banner
        title="Welcome to Our Website"
        subtitle="We are glad to have you here."
        backgroundImage="https://example.com/background.jpg"
        link="https://example.com"
        linkText="Learn More"
      />
      <Banner
        title="Join Our Community"
        subtitle="Become a part of something great."
        backgroundImage="https://example.com/community.jpg"
        link="https://example.com/join"
        linkText="Join Now"
      /> */}
     {/* <Button></Button> */}
     <Technology></Technology>
        
    </div>
  );
}

export default App;
