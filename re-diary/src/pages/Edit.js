import { useSearchParams } from "react-router-dom";

const Edit = () => {
  const [serachParams, setSearchParams] = useSearchParams();

  const id = serachParams.get("id");
  console.log(id);

  const mode = serachParams.get("mode");
  console.log(mode);

  return (
    <div>
      <h1>Edit</h1>
      <p>이곳은 edit 입니다.</p>
      <button
        onClick={() => {
          setSearchParams({ who: "정수인" });
        }}
      >
        {" "}
        QS바꾸기
      </button>
    </div>
  );
};

export default Edit;
