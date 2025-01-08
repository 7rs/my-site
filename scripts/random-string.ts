interface UnicodeRange {
  start: number;
  end: number;
}

const NUMBERS = newUnicodeRange(0x30, 0x39);
const UPPER_LATIN = newUnicodeRange(0x41, 0x5a);
const LOWER_LATIN = newUnicodeRange(0x61, 0x7a);

const ALPHANUMERIC = [
  ...generateStringArray(NUMBERS),
  ...generateStringArray(UPPER_LATIN),
  ...generateStringArray(LOWER_LATIN),
].join('');

function newUnicodeRange(start: number, end: number): UnicodeRange {
  return { start: start, end: end };
}

function generateStringArray(range: UnicodeRange): string[] {
  if (range.start > range.end) {
    return [];
  }

  return Array.from({ length: range.end - range.start + 1 }, (_, i) => String.fromCodePoint(range.start + i));
}

function pickRandomChar(charactersSource: string = ALPHANUMERIC): string {
  return charactersSource[Math.floor(Math.random() * charactersSource.length)];
}

export function generateRandomString(length: number, charactersSource: string = ALPHANUMERIC): string {
  return Array.from({ length: length }, () => pickRandomChar(charactersSource)).join('');
}
