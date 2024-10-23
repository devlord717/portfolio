import type { NextPage } from "next";

const Portfolio: NextPage = () => {
  return (
    <div>
      <section className="portfolio section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Portfolio</h2>
            </div>
          </div>
{/* 
          <div className="row">
            <div className="portfolio-filter padd-15">
              <button type="button" className="active" data-filter="all">
                All
              </button>
              <button type="button" data-filter="graphics-design">
                Graphics Design
              </button>
              <button type="button" data-filter="web-design">
                Web Design
              </button>
              <button type="button" data-filter="wordpress">
                Wordpress
              </button>
            </div>
          </div> */}

          <div className="row">
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/1.png" alt="portfolio" />
                </div>
                <a href="https://apps.apple.com/us/app/sunshine-birthdays/id1592003429" >
                <div className="portfolio-info">
                  <h4>Sunshine Birthday</h4>
                  <div className="icon">
                    <i className="fa fa-search" />
                  </div>
                </div>
                </a>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/2.png" alt="portfolio" />
                </div>
                <a href="https://apps.apple.com/us/app/activehealth/id1048853544" >
                <div className="portfolio-info">
                  <h4>ActiveHealth</h4>
                  <div className="icon">
                    <i className="fa fa-search" />
                  </div>
                </div>
                </a>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/3.png" alt="portfolio" />
                </div>
                <a href="https://apps.apple.com/us/app/appscend/id1843863461" >
                <div className="portfolio-info">
                  <h4>Romania TV</h4>
                  <div className="icon">
                    <i className="fa fa-search" />
                  </div>
                </div>
                </a>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div
              className="portfolio-item padd-15"
              data-category="graphics-design"
            >
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/4.png" alt="portfolio" />
                </div>
                <a href="https://www.libon.com/" >
                <div className="portfolio-info">
                  <h4>Libon</h4>
                  <div className="icon">
                    <i className="fa fa-search" />
                  </div>
                </div>
                </a>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/6.png" alt="portfolio" />
                </div>
                <a href="https://ybzpp.itch.io/magnetmaster?secret=qu05JAv6xkMq5QEINMvHi6HU" >
                <div className="portfolio-info">
                  <h4>Magnet Master</h4>
                  <div className="icon">
                    <i className="fa fa-search" />
                  </div>
                </div>
                </a>
              </div>
            </div>
            {/* Portfolio Item End*/}
            
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/7.png" alt="portfolio" />
                </div>
                <a href="https://ybzpp.itch.io/aimshooter?secret=5Trz0dF4oL1ItGYGdpuHfQEw" >
                <div className="portfolio-info">
                  <h4>Aim Shooter</h4>
                  <div className="icon">
                    <i className="fa fa-search" />
                  </div>
                </div>
                </a>
              </div>
            </div>
            {/* Portfolio Item End*/}
            
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/8.png" alt="portfolio" />
                </div>
                <a href="https://play.google.com/store/apps/details?id=com.ZlodeyStudios.YolkKnightTowerDefense" >
                <div className="portfolio-info">
                  <h4>Yolk Knight: Tower Defence</h4>
                  <div className="icon">
                    <i className="fa fa-search" />
                  </div>
                </div>
                </a>
              </div>
            </div>
            {/* Portfolio Item End*/}
            
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/9.png" alt="portfolio" />
                </div>
                <a href="https://play.google.com/store/apps/details?id=com.ZlodeyStudios.DateRunner&pli=1" >
                <div className="portfolio-info">
                  <h4>Date&lsquo;n&rsquo;Run</h4>
                  <div className="icon">
                    <i className="fa fa-search" />
                  </div>
                </div>
                </a>
              </div>
            </div>
            {/* Portfolio Item End*/}
            
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/5.png" alt="portfolio" />
                </div>
                <a href="https://ybzpp.itch.io/merge-tower-defense?secret=X6NspIX8X4nGVs2TyU9qwxZ9tw" >                
                <div className="portfolio-info">
                  <h4>Merge Town Defence</h4>
                  <div className="icon">
                    <i className="fa fa-search" />
                  </div>
                </div>
                </a>
              </div>
            </div>
            {/* Portfolio Item End*/}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
