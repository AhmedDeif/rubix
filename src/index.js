import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
  Input, Menu
} from 'semantic-ui-react';


class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: ["item1","item2"]
    };
  }


  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    const children = this.state.menu
    const Children = children.map((child) =>
<Menu.Item name={child} active={activeItem === child} onClick={this.handleItemClick}/>)
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

          <Segment>

          </Segment>
        </div>
    );
  }
}

ReactDOM.render(<MainMenu />, document.getElementById("root"));
