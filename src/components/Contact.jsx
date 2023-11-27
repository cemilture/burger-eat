import BannerImage from "../assets/banner.png";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="rightSide">
        <h1>Bizimle iletişime geçin</h1>
        <form>
          <label>Ad Soyad</label>
          <input
            type="text"
            name="name"
            placeholder="Lütfen adınızı soyadınızı giriniz..."
          />
          <label>E-mail</label>
          <input
            type="text"
            name="email"
            placeholder="Lütfen e-mailinizi giriniz..."
          />
          <label>Mesajınız</label>
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Lütfen mesajınızı giriniz..."
          ></textarea>
          <button>Gönder</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
