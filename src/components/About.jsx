import BannerImage from "../assets/banneryeni.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>Hakkımızda</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt qui
          quae magni, reprehenderit adipisci temporibus maxime ab dolores
          inventore doloribus distinctio laboriosam voluptatum architecto illo
          ullam libero, repellendus aliquam debitis! Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Eligendi eos illo quaerat excepturi
          magni. Nihil expedita necessitatibus animi aliquam perferendis aperiam
          dolores non tempora velit, eveniet voluptates accusamus error
          consequuntur? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Pariatur nam, quo labore modi ex earum soluta enim aperiam officiis
          veritatis consequatur eius voluptates! Ducimus veniam laborum suscipit
          quisquam dolor soluta! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Iusto commodi, tenetur omnis numquam, vero libero
          eveniet sed hic, in blanditiis nisi beatae ullam magnam enim natus
          sunt iste sequi nesciunt?
        </p>
      </div>
    </div>
  );
}

export default About;
