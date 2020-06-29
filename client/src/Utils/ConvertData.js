export const convertDate = (dateInt) => {
    if(!!dateInt){
      const date = new Date(dateInt)
      return date.toLocaleDateString("fr-FR");
    }
    return "";
  };