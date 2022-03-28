import { useContext } from "react";
import { ArticleContext } from "../App";
import { useParams } from "react-router-dom";

const ArticleItem = () => {
  const dummyArticles = useContext(ArticleContext);
  const { id } = useParams();
  const targetArticle = dummyArticles.find(
    (it) => parseInt(it.id) === parseInt(id)
  );
  return (
    <div>
      <h1>{targetArticle.title}</h1>
      <div>{targetArticle.content}</div>
      <div>{targetArticle.date}</div>
    </div>
  );
};

export default ArticleItem;
