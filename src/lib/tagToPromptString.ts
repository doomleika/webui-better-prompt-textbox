const tagToPromptString = (strArr: Array<string>) => {
  const newStr = strArr.filter(v => v !== '');
  const r = newStr.join(', ');
  return r;
};

export { tagToPromptString };
