export const JoinName = (delimiter = ".", name, prefix, suffix, extension) => {
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
