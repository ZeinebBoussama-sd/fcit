export const fileToBase64String = (file) =>
  new Promise((resolve, reject) => {
    debugger;
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () =>
      resolve({
        fileName: file.name,
        base64String: reader.result.split('base64,')[1],
      });
    reader.onerror = reject;
  });
