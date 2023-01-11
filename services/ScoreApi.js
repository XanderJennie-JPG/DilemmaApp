import axios from "axios";

const sendData = async (score) => {
  const scoresJSON = JSON.stringify(score);
  try {
    //Jarrel, voer hier je backend point in. Bij ''insert here''. - Nabil
    const res = await axios.post("insert_here", scoresJSON);
    return res;
  } catch (err) {
    console.log(err);
  }
};
export default sendData;
