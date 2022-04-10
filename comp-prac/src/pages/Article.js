import Header from "../components/Header";
import Album from "../components/Album";
import SubHeader from "../components/SubHeader";
import Footer from "../components/Footer";
import "../App.css";

const Article = () => {
  return (
    <div className="articleHeader">
      <Header />
      <SubHeader main="소식" sub="소식통" />
      <article>
        <Album />
      </article>
      <Footer />
    </div>
  );
};

export default Article;
