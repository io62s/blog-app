export const flex = (direction, justify, align = "center") => {
  return `
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${align};
  `;
};
