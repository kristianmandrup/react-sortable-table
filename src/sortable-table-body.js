import { Component, PropTypes } from "react";

class SortableTableRow extends Component {
  render() {
    const { rowKey, item, data, columns } = this.props;
    var tds = columns.map(
      function(item, index) {
        var value = data[item.key];
        if (item.render) {
          value = item.render(value);
        }
        return (
          <td key={index} style={item.dataStyle} {...(item.dataProps || {})}>
            {value}
          </td>
        );
      }.bind(this)
    );

    return <tr key={item[rowKey || "id"]}>{tds}</tr>;
  }
}

export default class SortableTableBody extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired,
    sortings: PropTypes.array.isRequired,
    rowKey: PropTypes.string,
    item: PropTypes.object
  };

  render() {
    var bodies = this.props.data.map(
      ((item, index) => {
        return (
          <SortableTableRow
            key={index}
            item={item}
            rowKey={this.props.rowKey}
            data={item}
            columns={this.props.columns}
          />
        );
      }).bind(this)
    );

    return <tbody>{bodies}</tbody>;
  }
}
