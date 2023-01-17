import AsyncStorage from "@react-native-async-storage/async-storage";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

//https://stackoverflow.com/questions/105034/how-do-i-create-a-guid-uuid en https://www.npmjs.com/package/uuid
//GUID staat voor globally unique identifier.. in ios kan je geen device id meer pakken.
export const createGuid = async () => {
  const guid = uuidv4();
  await AsyncStorage.setItem("guid", guid);
  return guid;
};

export const getGuid = async () => {
  let guid = await AsyncStorage.getItem("guid");
  if (!guid) {
    guid = await createGuid();
  }
  return guid;
};
