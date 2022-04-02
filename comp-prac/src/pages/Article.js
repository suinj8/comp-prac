import Header from "../Components/Header";
import Album from "../Components/Album";
import SubHeader from "../Components/SubHeader";
import Footer from "../Components/Footer";
import "../App.css";

const Article = () => {
  return (
    <div className="articleHeader">
      <Header />
      <SubHeader />
      <article>
        <Album />
      </article>
      <Footer />
    </div>
  );
};

export default Article;
