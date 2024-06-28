import React from "react";
import { Link } from "react-router-dom";
import "./Body.css";

// Example data from the server
const cardData = [
  {
    image1:
      "https://media.cnn.com/api/v1/images/stellar/prod/230210161917-01-japan-never-traveler-culture-tokyo.jpg?c=16x9&q=h_833,w_1480,c_fill",
    image2:
      "https://www.state.gov/wp-content/uploads/2019/04/Japan-2107x1406.jpg",
    country: "ABOUT",
    path: "/about",
  },
  {
    image1:
      "https://media.cnn.com/api/v1/images/stellar/prod/230210161917-01-japan-never-traveler-culture-tokyo.jpg?c=16x9&q=h_833,w_1480,c_fill",
    image2:
      "https://www.state.gov/wp-content/uploads/2019/04/Japan-2107x1406.jpg",
    country: "JAPAN",
    path: "/countryJapan",
  },
  {
    image1:
      "https://assets3.thrillist.com/v1/image/2783896/792x528/scale;webp=auto;jpeg_quality=60;progressive.jpg",
    image2:
      "https://www.journalofnomads.com/wp-content/uploads/2019/09/Ala-Kul-Lake-Kyrgyzstan-2-1024x768.jpg",
    country: "KYRGYZSTAN",
    path: "/countryKyrgyzstan",
  },
  {
    image1:
      "https://cdn.britannica.com/06/171306-050-C88DD752/Aurora-borealis-peninsula-Snaefellsnes-Iceland-March-2013.jpg",
    image2:
      "https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/0c/d7/0cd72b96-17d4-44a5-95c7-6dcdc8788517/7_-_535c1da8-9b12-421c-a350-682d69d7eb48.jpg",
    country: "ICELAND",
    path: "/countryIceland",
  },
  {
    image1:
      "https://visitukraine.today/media/blog/previews/OABKGsg7KSrnN1ksEI0gQFP561hhG29QSUVdb5ex.webp",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrSQeSRAUK8h1qT-Mrq26CQ3CFi4oOos9RvA&s",
    country: "UKRAINE",
    path: "/countryUkraine",
  },
  {
    image1: "https://georgiaintrend.com/wp-content/uploads/2018/06/8days.jpg",
    image2:
      "https://touringhighlights.com/wp-content/uploads/2022/07/Georgia-1.jpg",
    country: "GEORGIA",
    path: "/countryGeorgia",
  },
  {
    image1:
      "https://www.nomadicmatt.com/wp-content/uploads/2011/12/11reasonsthailand.jpg",
    image2:
      "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSXM6RWAKurJJRDwMFub0zxoASiMilC-Y79n7sLIEommzGKyw47YQ06iAaINz1k0i42GQ6qCiroOzZB5f9wuwhxMf9h4EL8DV1JFIRe0Q",
    country: "THAILAND",
    path: "/countryThailand",
  },
];

const Body = () => {
  return (
    <section className="new-container">
      <div className="large-item-container">
        {cardData.slice(0, 1).map((data, index) => (
          <Link to={data.path} key={index} className="new-content large">
            <img
              src={data.image1}
              className="new-profession-image"
              alt="Profession"
            />
            <img
              src={data.image2}
              className="new-profile-image"
              alt="Profile"
            />
            <div className="new-wrapper">
              <div className="new-profile-quote">
                <p>{data.country}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="small-items-container">
        {cardData.slice(1).map((data, index) => (
          <Link to={data.path} key={index} className="new-content small">
            <img
              src={data.image1}
              className="new-profession-image"
              alt="Profession"
            />
            <img
              src={data.image2}
              className="new-profile-image"
              alt="Profile"
            />
            <div className="new-wrapper">
              <div className="new-profile-quote">
                <p>{data.country}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Body;
