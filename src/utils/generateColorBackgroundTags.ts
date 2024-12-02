export default function generateColorBackgroundTags(alpha: string) {
  const part01 = String(Math.floor(Math.random() * 100)).padStart(2, '0');
  const part02 = String(Math.floor(Math.random() * 100)).padStart(2, '0');
  const part03 = 'ff';

  const a = alpha.padStart(2, '0');

  return {
    bg: `#${part01}${part02}${part03}${alpha}`,
    color: `#${part01}${part02}${part03}`,
  };
}
