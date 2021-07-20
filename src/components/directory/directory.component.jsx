import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

export default class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
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
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.collections.map(({ id, ...props }) => {
          return <MenuItem key={id} {...props}></MenuItem>;
        })}
      </div>
    );
  }
}
