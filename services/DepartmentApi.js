import axios from "axios";

const sendDepartment = async (selected) => {
  const selectedJSON = JSON.stringify(selected);
  try {
    // Vervang met backend url..
    const res = await axios.post("insert_here", selectedJSON);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export default sendDepartment;
