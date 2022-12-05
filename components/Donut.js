import { React, useState } from "react";
import { DonutChart } from "react-native-circular-chart";

const Donut = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const data = [
    { name: "Privacy", value: 30, color: "blue" },
    { name: "Integriteit", value: 20, color: "green" },
    { name: "Collegialiteit", value: 15, color: "pink" },
    { name: "Slaap", value: 35, color: "red" },
  ];

  const toggleSwitch = () => {
    if (isEnabled) {
      data = [
        { name: "Honor", value: 30, color: "blue" },
        { name: "Integrity", value: 20, color: "green" },
        { name: "collegiality", value: 15, color: "pink" },
        { name: "Sleep", value: 35, color: "red" },
      ];
    } else {
      data = [
        { name: "Honor", value: 50, color: "blue" },
        { name: "Cat", value: 10, color: "green" },
        { name: "Dog", value: 10, color: "pink" },
        { name: "Sheep", value: 30, color: "red" },
      ];
    }
    setIsEnabled((previousState) => !previousState);
  };

  return (
    <DonutChart
      data={data}
      strokeWidth={15}
      radius={100}
      containerWidth={500}
      containerHeight={500}
      type="butt"
      startAngle={0}
      endAngle={360}
      animationType="slide"
    />
  );
};
