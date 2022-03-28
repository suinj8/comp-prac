import Header from "../Components/Header";
import Album from "../Components/Album";
import SubHeader from "../Components/SubHeader";

const Article = () => {
  return (
    <div>
      <Header />
      <SubHeader />
      <article>
        <Album />
      </article>
    </div>
  );
};

export default Article;
