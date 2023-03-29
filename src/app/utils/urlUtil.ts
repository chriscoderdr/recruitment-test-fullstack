const publicUrl = process.env.NEXT_PUBLIC_BASE_URL;


const getFullPath = (path: string) => {
  if (path.startsWith("http" || path.startsWith("https"))) {
    return path;
  }
  console.log({publicUrl});
  return publicUrl + path;
};

export const urlUtil = {
  getFullPath,
};
