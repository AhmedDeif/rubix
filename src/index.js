import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import {
  Button,
  Card,
  Form,
  Grid,
  Header,
  Message,
  Segment,
  Input, Menu,Icon
} from 'semantic-ui-react';



class CardItem extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          showPrice:false
      };
    }
    render() {
      return (
          <Card>
              <Card.Content header={this.props.name} />
              <Card.Content description={this.props.description} />
              <Card.Content extra>
                <Icon name='money bill alternate' />
                {this.props.price}
              </Card.Content>
            </Card>
      );
    }
}

class CardGroup extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
        var Children;
        if (this.props.selectedCategory){
            Children = this.props.selectedCategory.map((child) =>
             <CardItem name={child.name} description={child.description} price={child.price}/>
         );
        }

      return (
          <div>
          <Card.Group>
            {Children}
            </Card.Group>
          </div>
      );
    }
}

class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [
        {
          "id": 80877,
          "name": "Appetizers",
          "items": [
            {
              "id": "132548",
              "name": "French Fries",
              "description": "Custom premium cut by farm frites. Add melted cheese for 7LE - chili con carne for 9LE",
              "price": "54.834"
            },
            {
              "id": 655881,
              "name": "Nacho Chips & Salsa",
              "description": "Homemade crispy nacho chips served with fresh salsa dip",
              "price": "54.834"
            },
            {
              "id": 655882,
              "name": "Sweet Potato Fries",
              "description": "Served with hot mayo dip",
              "price": "54.834"
            },
            {
              "id": 655883,
              "name": "Seasoned Wedges",
              "description": "Served with garlic mayo dip",
              "price": "54.834"
            },
            {
              "id": 132565,
              "name": "Chili Cheese Fries",
              "description": "French fries, topped with chili con carne & melted cheddar cheese, served with sour cream and pickled jalapenos",
              "price": "54.834"
            },
            {
              "id": 655884,
              "name": "Potato Skins",
              "description": "Loaded with cheese & chili beef ( served with sour cream)",
              "price": "54.834"
            },
            {
              "id": 132549,
              "name": "Onion Rings",
              "description": "",
              "price": "54.834"
            }
          ]
        },
        {
          "id": 21281,
          "name": "Salads",
          "items": [
            {
              "id": 655880,
              "name": "BLT Salad",
              "description": "Grilled bacon , lettuce , tomatoes with ranch sauce",
              "price": "34.834"
            },
            {
              "id": 132570,
              "name": "Caesar Salad",
              "description": "Lettuce, Parmesan cheese, Croutons & Caesar dressing",
              "price": "34.834"
            },
            {
              "id": 132574,
              "name": "Garden Salad",
              "description": "Mixed greens and fresh garden selections tossed in vinaigrette dressing",
              "price": "34.834"
            },
            {
              "id": 164438,
              "name": "Rocket Mushroom Salad",
              "description": "Rocket leaves, fresh mushrooms, Parmesan cheese, Balsamic dressing",
              "price": "34.834"
            }
          ]
        }
    ]
    };
  }

  handleItemClick = (e, { name }) => {
      this.setState({ activeItem: name })
      this.state.menu.forEach(element => {
          if (name === element.name) {
              this.setState({ selectedCategory: element.items })
          }
      });
  }



  render() {
    const { activeItem } = this.state
    const children = this.state.menu
    const Children = children.map((child) =>
        <Menu.Item
            name={child.name}
            active={activeItem === child.name}
            onClick={this.handleItemClick}>
        </Menu.Item>
    )
    return (
        <div>
          <Menu pointing>
          {Children}
            <Menu.Menu position='right'>
              <Menu.Item>
                <Input icon='search' placeholder='Search...' />
              </Menu.Item>
            </Menu.Menu>
          </Menu>
          <CardGroup selectedCategory={this.state.selectedCategory}/>
        </div>
    );
  }
}

ReactDOM.render(<MainMenu />, document.getElementById("root"));
