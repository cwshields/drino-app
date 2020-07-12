import React from "react";
import "../../assets/scss/about.scss";
import DrinoNavbar from "../Navbar/DrinoNavbar";
import Footer from "../Navbar/Footer";

const About = () => {
  return (
    <div className="about_page">
      <DrinoNavbar></DrinoNavbar>
      <div className="img-shape-wrap">
        <img
          className="about-img"
          src="https://i.imgur.com/PbLLEe2.jpg"
          alt="About Our Business"
        />
        <div className="shape"></div>
      </div>
      <div className="about-wrap">
        <div className="about-content">
          <h1>About</h1>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            inventore perspiciatis ducimus itaque debitis aperiam illo est in
            numquam quod possimus facilis, ea aliquam quidem consequatur vero
            molestiae quia, fugit corporis tenetur tempora rerum neque quis?
            Accusantium omnis ex laudantium, optio enim consequuntur ratione ea
            assumenda quaerat iure natus placeat quibusdam voluptatum hic,
            culpa, molestiae maxime. Nam qui, doloremque sunt pariatur impedit
            animi, placeat sequi nesciunt quibusdam, omnis necessitatibus
            perspiciatis consectetur ex ut. Repellat ipsam facere laudantium
            iste maxime rerum magnam aliquam possimus perferendis nihil fuga
            officia repudiandae adipisci quas doloremque sunt numquam, ipsum
            esse doloribus minus doloremque veniam sit soluta culpa beatae.
          </div>
          <div className="text">
            Sequi, quasi! Deleniti omnis obcaecati itaque amet, officiis
            expedita ad! Vero eligendi optio tenetur exercitationem tempore
            quod, quae saepe possimus eos, veritatis molestiae natus esse
            accusamus. Error libero repellendus est accusamus adipisci?
          </div>
          <div className="text">
            Impedit, quasi voluptates! Sed animi blanditiis tempore quia
            accusantium, doloremque voluptate reiciendis iusto quam vitae fugiat
            ducimus recusandae repellendus nihil consectetur et, voluptatem
            excepturi est enim reprehenderit laudantium eligendi? Architecto vel
            repudiandae at porro nemo in repellendus inventore incidunt, natus
            est quos quo error minima illum ipsam fuga accusamus tempore
            doloribus corporis voluptatem tenetur odio. Sint minima quibusdam
            eum vel, sit culpa perspiciatis ea adipisci? Tenetur alias itaque ad
            facilis veniam vel?
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
