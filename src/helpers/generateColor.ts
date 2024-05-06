function generateRandomColor() {
  let color = "#";
  do {
    color += Math.floor(Math.random() * 16777215).toString(16);
  } while (color === "#ffffff");
  return color;
}

function generateColors(length: number) {
  const colors = [];
  for (let i = 0; i < length; i++) {
    colors.push(generateRandomColor());
  }
  return colors;
}

export default generateColors;
