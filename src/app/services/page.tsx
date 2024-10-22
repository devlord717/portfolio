import type { NextPage } from "next";

const Service: NextPage = () => {
  return (
    <>
        <section className="service section" id="services">
  <div className="container">
    <div className="row">
      <div className="section-title padd-15">
        <h2>Our Services</h2>
      </div>
    </div>
    <div className="row">
      {/* Service Item 1: Mobile App Development */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-mobile" /></div>
          <h4>Mobile App Development</h4>
          <p>
            Focuses on creating software application that run on mobile devices
            like smartphones and tablets. Cross-platform projects using Flutter.
        </p>
        </div>
      </div>
      {/* Service Item 1 End */}

      {/* Service Item 2: Android Engineering*/}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-wrench" /></div>
          <h4>Android Engineering</h4>
          <p>Speicalizes in bulding a in app for the Android platform using languages like Java and Kotlin,
            involves developing features like location services, background processing, and push notifications.
          </p>
        </div>
      </div>
      {/* Service Item 2 End */}

      {/* Service Item 3: Game developemtn */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-gamepad" /></div>
          <h4>Game development</h4>
          <p>Focuses on creating 2D & 3D games using Unity, a popular game engine. <br/>
            Involves creating game mechanics, interactive env, AI, and multiplayer networking.
          </p>
        </div>
      </div>
      {/* Service Item 3 End */}
      
      {/* Service Item 4: Technical Support */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-graduation-cap" /></div>
          <h4>Technical Support</h4>
            <p>
              Provides assistance to users and developers in troubleshooting and resolving technical issues.
              Includes customer service, issue and sometimes debugging.
            </p>
        </div>
      </div>
      {/* Service Item 4 End */}      
    </div>
  </div>
</section>

    </>
  );
};

export default Service;
