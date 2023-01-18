import "./pageHeader.css";

const PageHeader = () => {
  const sum = 5 * 6;
  console.log(sum);

  const people = ["yossi", "shalom", "beni", "bob"];
  const startWithB = people.find((person) => {
    return person.startsWith("b");
  });

  const student = {
    firstName: "Adi",
    lastName: "Dan",
    age: 31,
    phone: "05238485",
  };

  let myStyle = { color: "red", fontFamily: "arial" };

  return (
    <>
      <h2>This is The header!</h2>
      <h2 style={myStyle}>{startWithB}</h2>
      <p style={{ color: "pink" }}>{student.firstName}</p>
      <p className="blue">{student.lastName}</p>
      <p>{student.age}</p>
      <p>{student.phone}</p>
    </>
  );
};

export default PageHeader;
