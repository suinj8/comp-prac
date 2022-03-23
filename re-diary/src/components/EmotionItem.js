import React from "react";

const EmotionItem = ({
  emotion_id,
  emotion_img,
  emotion_descript,
  onClick, //전달받는 함수 다시생성되서 강화된 컴포넌트도 랜더링시킴
  isSelected,
}) => {
  return (
    <div
      onClick={() => onClick(emotion_id)}
      className={[
        "EmotionItem",
        isSelected ? `EmotionItem_on_${emotion_id}` : `EmotionItem_off`,
      ].join(" ")}
    >
      <img src={emotion_img} />
      <span>{emotion_descript}</span>
    </div>
  );
};

export default React.memo(EmotionItem);
