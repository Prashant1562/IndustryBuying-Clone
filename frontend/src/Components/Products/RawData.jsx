const AgriData = [
  "Agriculture & Gardening - Made In Japan",
  "Agriculture Implements",
  "Artificial Gras",
  "Blowers",
  "Brush Cutter and Accessories",
  "Chaff Cutter",
];
export default AgriData;

const Breakpoints = (base, sm, md) => {
  if (base.includes("rem") && sm.includes("rem") && md.includes("rem")) {
    // console.log("Yes")
    return { base: base, sm: sm, md: md };
  } else {
    // console.log("No")
    if (!base.includes("rem")) {
      base = base + "rem";
    }
    if (!sm.includes("rem")) {
      sm = sm + "rem";
    }
    if (!md.includes("rem")) {
      md = md + "rem";
    }
    return { base: base, sm: sm, md: md };
  }
};

export { Breakpoints };


export const DiscountInFilter = () => {
  return ["Upto 10% (2)", "10% - 20% (1)", "30% - 40% (1)", "40% - 50%"]
};
