import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default btn = [
  {
    id: 1,
    value: "AC",
    stl: { color: "#ff751a", fontSize: 25 },
  },
  {
    id: 2,
    value: (
      <MaterialCommunityIcons
        name="backspace-outline"
        size={24}
        color="#ff751a"
      />
    ),
  },
  {
    id: 3,
    value: <FontAwesome5 name="percent" size={17} color="#ff751a" />,
  },
  {
    id: 4,
    value: <MaterialCommunityIcons name="division" size={34} color="#ff751a" />,
    isActive: true,
  },
  {
    id: 5,
    value: "7",
    stl: { color: "white", fontSize: 40, marginRight: 10 },
  },
  {
    id: 6,
    value: "8",
    stl: { color: "white", fontSize: 40, marginRight: 10 },
  },
  {
    id: 7,
    value: "9",
    stl: { color: "white", fontSize: 40, marginRight: 10 },
  },
  {
    id: 8,
    value: <Ionicons name="ios-close-outline" size={34} color="#ff751a" />,
    isActive: true,
  },
  {
    id: 9,
    value: "4",
    stl: { color: "white", fontSize: 40, marginRight: 10 },
  },
  {
    id: 0,
    value: "5",
    stl: { color: "white", fontSize: 40, marginRight: 10 },
  },
  {
    id: 10,
    value: "6",
    stl: { color: "white", fontSize: 40, marginRight: 10 },
  },
  {
    id: 11,
    value: <AntDesign name="minus" size={34} color="#ff751a" />,
    isActive: true,
  },
  {
    id: 12,
    value: "1",
    stl: { color: "white", fontSize: 40, marginRight: 10 },
  },
  {
    id: 13,
    value: "2",
    stl: { color: "white", fontSize: 40, marginRight: 10 },
  },
  {
    id: 14,
    value: "3",
    stl: { color: "white", fontSize: 40, marginRight: 10 },
  },
  {
    id: 15,
    value: <Ionicons name="ios-add-outline" size={34} color="#ff751a" />,
    isActive: true,
  },
  {
    id: 16,
    value: "",
    isActive: true,
  },
  {
    id: 17,
    value: "0",
    stl: { color: "white", fontSize: 40, marginRight: 10 },
  },

  {
    id: 18,
    value: <MaterialCommunityIcons name="comma" size={17} color="white" />,
    isActive: true,
  },
  {
    id: 19,
    value: <MaterialCommunityIcons name="equal" size={34} color="white" />,
  },
];
