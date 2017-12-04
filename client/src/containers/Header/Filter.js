import React, { Component } from "react";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import { connect } from "react-redux";
import { filterItems } from "../../redux/modules/filters";

const tags = [
  "Electronics",
  "Household Items",
  "Musical Instruments",
  "Physical Media",
  "Recreational Equipment",
  "Sporting Goods",
  "Tools"
];

class HeaderFilter extends Component {
  handleChange = (event, index, values) =>
    this.props.dispatch(filterItems(values));

  menuItems() {
    return tags.map(tag => (
      <MenuItem
        key={tag}
        insetChildren={true}
        checked={this.props.filteredTags.indexOf(tag) > -1}
        value={tag}
        primaryText={tag}
      />
    ));
  }

  render() {
    // const { values } = this.state;
    console.log(this.props.filteredTags);
    return (
      <SelectField
        multiple={true}
        hintText="Filter by Tag"
        value={this.props.filteredTags}
        onChange={this.handleChange}
      >
        {this.menuItems(tags, this.props.filteredTags)}
      </SelectField>
    );
  }
}

const mapStateToProps = state => ({
  filteredTags: state.filters.filters
});

export default connect(mapStateToProps)(HeaderFilter);
