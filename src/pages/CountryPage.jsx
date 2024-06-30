import React, { useState, useEffect } from "react";
import styles from "./CountryPage.module.css";
import Footer from "../components/homePage/Footer";

const CountryPage = ({ country }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const mockData = {
      posts: [
        {
          id: 1,
          image1:
            "https://media.cnn.com/api/v1/images/stellar/prod/230210161917-01-japan-never-traveler-culture-tokyo.jpg?c=16x9&q=h_833,w_1480,c_fill",
          image2:
            "https://www.state.gov/wp-content/uploads/2019/04/Japan-2107x1406.jpg",
          country: "JAPAN",
          description:
            "Japan’s architecture, art, traditions, crafts. Also, its worldwide known pop culture (including manga, anime, and video games). It’s something that definitely only Japan can offer. No other country contains the same characteristics.",
        },
        {
          id: 2,
          image1:
            "https://assets3.thrillist.com/v1/image/2783896/792x528/scale;webp=auto;jpeg_quality=60;progressive.jpg",
          image2:
            "https://www.journalofnomads.com/wp-content/uploads/2019/09/Ala-Kul-Lake-Kyrgyzstan-2-1024x768.jpg",
          country: "KYRGYZSTAN",
          description:
            "A small mountainous country in Central Asia. The mountains are high and wild, sometimes hard to reach and unpredictable. But very beautiful and diverse. The mountains are the main property of Kyrgyzstan and the bulk of tourists come here because of the mountains.",
        },
        {
          id: 3,
          image1:
            "https://cdn.britannica.com/06/171306-050-C88DD752/Aurora-borealis-peninsula-Snaefellsnes-Iceland-March-2013.jpg",
          image2:
            "https://th-thumbnailer.cdn-si-edu.com/_riTYrpJ61h1uXR7rgZ6SZU1Xz4=/fit-in/1072x0/filters:focal(3600x2040:3601x2041)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/0c/d7/0cd72b96-17d4-44a5-95c7-6dcdc8788517/7_-_535c1da8-9b12-421c-a350-682d69d7eb48.jpg",
          country: "ICELAND",
          description:
            "Iceland, the land of fire and ice, has become a popular travel destination over the past few years. From the country’s magnificent glaciers, thundering waterfalls and epic natural nighttime displays, it’s easy to see why travelers are escaping to the edge of the world.",
        },
        {
          id: 4,
          image1:
            "https://visitukraine.today/media/blog/previews/OABKGsg7KSrnN1ksEI0gQFP561hhG29QSUVdb5ex.webp",
          image2:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrSQeSRAUK8h1qT-Mrq26CQ3CFi4oOos9RvA&s",
          country: "UKRAINE",
          description:
            "Ancient castles or natural wonders? Seaside holiday or mountain hiking? It’s hard to believe — but Ukraine has it all. And many more discoveries you wouldn’t expect!",
        },
        {
          id: 5,
          image1:
            "https://georgiaintrend.com/wp-content/uploads/2018/06/8days.jpg",
          image2:
            "https://touringhighlights.com/wp-content/uploads/2022/07/Georgia-1.jpg",
          country: "GEORGIA",
          description:
            "A country of ancient culture, where the breathtaking beauty of nature provides the perfect backdrop for infinite adventures and memorable experiences that will stay with you forever.",
        },
        {
          id: 6,
          image1:
            "https://www.nomadicmatt.com/wp-content/uploads/2011/12/11reasonsthailand.jpg",
          image2:
            "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSXM6RWAKurJJRDwMFub0zxoASiMilC-Y79n7sLIEommzGKyw47YQ06iAaINz1k0i42GQ6qCiroOzZB5f9wuwhxMf9h4EL8DV1JFIRe0Q",
          country: "THAILAND",
          description:
            "Gleaming temples and golden Buddhas frame the landscapes in Thailand, serving as a stunning backdrop for tours of Bangkok noodle shacks and adventures along the luxurious coastline.",
        },
      ],
    };

    const countryData = mockData.posts.find(
      (post) => post.country.toLowerCase() === country.toLowerCase()
    );
    setData(countryData);
  }, [country]);

  if (!data) return <div>Loading...</div>;

  return (
    <div className={styles.countryPageWrapper}>
      <h1 className={styles.countryPageTitle}>{data.country}</h1>
      <div className={styles.countryPageImageContainer}>
        <img
          src={data.image1}
          alt={data.country}
          className={styles.countryPageImage}
        />
        <img
          src={data.image2}
          alt={data.country}
          className={styles.countryPageImage}
        />
      </div>
      <p className={styles.countryPageDescription}>{data.description}</p>
      <div className={styles.countryPageQuoteContainer}>
        <section className={styles.countryPageQuote}>
          "The world is a book and those who do not travel read only one page."
          - Augustine of Hippo
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default CountryPage;
