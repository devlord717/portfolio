import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h2>
                    {/* I am Iulian Plamadeala a <span>Senior Software Developer</span> */}
                    <span>Senior Software Developer</span>
                  </h2>
                  <p>
                    Hi! My name is Iulian. I am a versatile Software Engineer with expertise in
                    Android Development, including AOSP(Android Open Source Project) development and
                    Android TV development. I am proficient in Java & Kotlin, and Flutter, enabling me to 
                    build robust and feature-rich applications for a wide range of Android devices and platforms.
                    Additionally, I have experience in Game development with C# & Unity and Cocos Creator.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>
                        Website : <span>www.piulian.vercel.app</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Email : <span>piulian@hotmail.com</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Degree : <span>Bachelor's Degree</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Phone : <span>+1 (613) 751-8039</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        City : <span>Stittsville, ON Canada</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Freelance : <span>Available</span>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="buttons padd-15">
                      <a
                        href="/assets/docs/resume.pdf"
                        target="_target"
                        className="btn"
                      >
                        Download CV
                      </a>
                      <a
                        href="#contact"
                        data-section-index={0}
                        className="btn hire-me"
                      >
                        Hire Me
                      </a>
                    </div>
                  </div>
                </div>
                <div className="skills padd-15">
                  <div className="row">
                    <div className="skill-item padd-15">
                      <h5>Java</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "90%" }} />
                        <div className="skill-percent">90%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Kotlin</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "60%" }} />
                        <div className="skill-percent">60%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Flutter</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "70%" }} />
                        <div className="skill-percent">70%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Unity</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2010 to 2014
                          </h6>
                          <h4 className="timeline-title">
                            University of Bucharest
                          </h4>
                          <h4 className="timeline-subtitle">
                            Bachelor's Degree in Computer Science
                          </h4>
                          <p className="timeline-text">
                            Passionate about Android application development and also available to learn
                            new Mobile Technologies.<br/>
                            Liked to play mobile games and developing games with Unity.<br/>
                            Had a bit exp in iPhone and Window app development.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="experience padd-15">
                  <h3 className="title">Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">

                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2022 to Present
                          </h6>
                          <h4 className="timeline-title">Senior Mobile Developer</h4>
                          <h4 className="timeline-subtitle">Sunshine</h4>
                          <p className="timeline-text">
                            I've developed serveral cross-platform Android and iOS apps in Flutter,
                            and refactored the source code for apps that help to reduce users' mobile traffic.                            
                          </p>
                        </div>
                        {/* Timeline Item end */}

                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2021 to 2022
                          </h6>
                          <h4 className="timeline-title">Mobile App Developer</h4>
                          <h4 className="timeline-subtitle">ActiveHealth Management. Inc</h4>
                          <p className="timeline-text">
                            I worked on logical modules on log health-related data, and designed back-end for front-end.
                            Also worked on Flutter & Firebase & Node.js.
                          </p>
                        </div>
                        {/* Timeline Item end */}

                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2020 to 2021
                          </h6>
                          <h4 className="timeline-title">Unity Game Developer</h4>
                          <h4 className="timeline-subtitle">Zlodey Studios LTD</h4>
                          <p className="timeline-text">
                            I worked on creation of prototypes, full game development cycle from concept to release,
                            market research, competitor analysis, reverse engineering of projects,
                            creation of marketing materials, mentoring.
                          </p>
                        </div>
                        {/* Timeline Item end */}

                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2019 to 2020
                          </h6>
                          <h4 className="timeline-title">Game Developer</h4>
                          <h4 className="timeline-subtitle">The PlayMax Group</h4>
                          <p className="timeline-text">
                            I developed many mobile games with Unity and Cocos and 
                            published the games on different stores and machines.
                          </p>
                        </div>
                        {/* Timeline Item end */}

                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2016 to 2019
                          </h6>
                          <h4 className="timeline-title">Android Engineer</h4>
                          <h4 className="timeline-subtitle">Cronos Technologies</h4>
                          <p className="timeline-text">
                            I worked on Flutter, and associated with mobile app development 
                            including various aspects like coding, testing, client communication, and requirement gathering.
                          </p>
                        </div>
                        {/* Timeline Item end */}

                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2014 to 2016
                          </h6>
                          <h4 className="timeline-title">Mobile Developer</h4>
                          <h4 className="timeline-subtitle">Appscend</h4>
                          <p className="timeline-text">
                            I worked on building android apps (Mobile & TV) to deliver video and audio content, and
                            implemented the Android component of transfer-related cross-functional features.                            
                          </p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
