

const switchColour = (title) => {
    switch (title) {
      case "< Development >":
        return "dev-color";
      case "{ Design }":
        return "design-color";
      case "Other":
        return "other-color";
      default:
        return "";
    }
  };
  
  export default switchColour;