import Description from "./Description";
import Title from "./Title";

const Content = (props) => {
  return (
    <>
      <div className="content">
        <Title name={props.name} />
        <Description text={props.text} />
      </div>
    </>
  );
};

export default Content;
