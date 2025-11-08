const altText = (fileName) => {
  switch (fileName) {
    case "brew-buddies-v2":
      return "Brew Buddies home page showing 1-5 star reviews of local breweries";
    case "e-commerce-database":
      return "VS Code and Insomnia screenshot depicting Node.js running API CRUD operations in SQL";
    case "hey-boo-boo":
      return "Hey Boo Boo landing page showcasing the uses for the app";
    case "organigramme":
      return "VS Code screenshot depicting Node.js running the employee management system";
    case "socket-chat":
      return "Socket Chat landing page";
    case "state-park-excursion":
      return "National Parks landing page showing search feature";
    case "weather-forecast":
      return "Weather Forecast homepage showcasing hometown weather and search feature.";
    case "lees-cleaners":
      return 'Lee\'s Cleaners homepage showcasing dry cleaning and laundry services.';
    case "alternate-universes":
      return "Alternate Universes LLC homepage showcasing headless WordPress application.";
  }
};

export { altText };
