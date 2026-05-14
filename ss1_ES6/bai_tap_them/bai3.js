const sv1 = {
  firstName: "Hieu",
  gender: "male",
  degree: "bacheloder",
  english: "english"
};
const sv2 = {
  name: "Van",
  gender: "male",
  degre: "bacheloder",
  english: "english"
};

const showInfo = ({firstName = "Quan", degree = "N/A"}) => {
    console.log("firstName: ", firstName);
    console.log("degree: ", degree);

}

showInfo(sv1);
console.log("------");
showInfo(sv2);