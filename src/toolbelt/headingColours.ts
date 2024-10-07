

const switchColour = (title: string) => {
    switch (title) {
      case "< Development >":
        return "dev-color";
      case "{ Design }":
        return "design-color";
      case "Other":
        return "other-color";
      case "design-head":
        return "other-color";
      case "dev-head":
        return "other-color";
      default:
        return "";
    }
  };
  
  export default switchColour;