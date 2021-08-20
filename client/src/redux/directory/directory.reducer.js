const INITIAL_STATE = {
  collections: [
    {
      id: 1,
      title: "Hats",
      imageUrl:
        "https://images.pexels.com/photos/984619/pexels-photo-984619.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      url: "hats",
    },
    {
      id: 2,
      title: "Shoes",
      imageUrl:
        "https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      url: "",
    },
    {
      id: 3,
      title: "Jackets",
      imageUrl:
        "https://images.pexels.com/photos/1661471/pexels-photo-1661471.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      url: "",
    },
    {
      id: 4,
      title: "Sneakers",
      size: "large",
      imageUrl:
        "https://images.pexels.com/photos/4932841/pexels-photo-4932841.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      url: "",
    },
    {
      id: 5,
      title: "Clothes",
      size: "large",
      imageUrl:
        "https://images.pexels.com/photos/1030946/pexels-photo-1030946.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      url: "",
    },
  ],
};
const DirectoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.typ) {
    default:
      return state;
  }
};

export default DirectoryReducer