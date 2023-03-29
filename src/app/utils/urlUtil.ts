const getFullPath = (path: string) => {
    if (path.startsWith("http" || path.startsWith("https"))) {
        return path;
    }
    return process.env.PUBLIC_URL + path;

}

export const urlUtil = {
    getFullPath
}