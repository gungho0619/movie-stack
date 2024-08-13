export function getTitleFontSize(title: string) {
  const length = title.length;
  let size = 16;
  if (length > 9) size = 14;
  if (length > 10) size = 13;
  if (length > 11) size = 12;
  if (length > 12) size = 11;
  if (length > 20) size = 10;
  if (length > 34) size = 9;
  if (length > 42) size = 8;

  return size;
}

export function getPositionFontSize(position: number) {
  const i = position + 1;
  if (i >= 100) return 12;
  if (i >= 10) return 18;
  return 26;
}
