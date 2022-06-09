import { IState as IProps } from "../App";

const List: React.FC<IProps> = ({ people }) => {

  const renderList = (): JSX.Element[] => {
    return people.map((person, index) => {
      return (
        <li className="list" key={index}>
          <div className="list-content">
            <img className="logo" src={person.url} alt="" />
            <h2>{person.name}</h2>
            <p>{person.age} years old</p>
            <p className="list-note">{person.note}</p>
          </div>
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
};

export default List;
