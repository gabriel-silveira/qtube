export function brightness(hex: string) {
  // strip #
  const color = hex.substring(1);

  // convert rrggbb to decimal
  const rgb = parseInt(color, 16);

  const r = (rgb >> 16) & 0xff;  // extract red
  const g = (rgb >>  8) & 0xff;  // extract green
  const b = (rgb >>  0) & 0xff;  // extract blue

  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

  return luma < 128 ? 'dark' : 'light';
}

export function getTextColor(hex: string) {
  return brightness(hex) === 'light' ? 'black' : 'white';
}

export default {
  brightness,
  getTextColor,
}
