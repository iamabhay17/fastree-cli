export const JoinName = (
  delimiter: string = ".",
  name: string,
  prefix?: string,
  suffix?: string,
  extension?: string
): string => {
  let fileName = "";
  if (prefix) {
    fileName = prefix + delimiter + fileName;
  }
  fileName = fileName + name;
  if (suffix) {
    fileName = fileName + delimiter + suffix;
  }

  return `${fileName}${extension}`;
};
