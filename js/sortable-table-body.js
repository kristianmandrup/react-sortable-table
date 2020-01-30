"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SortableTableRow = function (_Component) {
  _inherits(SortableTableRow, _Component);

  function SortableTableRow() {
    _classCallCheck(this, SortableTableRow);

    return _possibleConstructorReturn(this, (SortableTableRow.__proto__ || Object.getPrototypeOf(SortableTableRow)).apply(this, arguments));
  }

  _createClass(SortableTableRow, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          rowKey = _props.rowKey,
          item = _props.item,
          data = _props.data,
          columns = _props.columns;

      var tds = columns.map(function (item, index) {
        var value = data[item.key];
        if (item.render) {
          value = item.render(value);
        }
        return React.createElement(
          "td",
          _extends({ key: index, style: item.dataStyle }, item.dataProps || {}),
          value
        );
      }.bind(this));

      return React.createElement(
        "tr",
        { key: item[rowKey || "id"] },
        tds
      );
    }
  }]);

  return SortableTableRow;
}(_react.Component);

var SortableTableBody = function (_Component2) {
  _inherits(SortableTableBody, _Component2);

  function SortableTableBody() {
    _classCallCheck(this, SortableTableBody);

    return _possibleConstructorReturn(this, (SortableTableBody.__proto__ || Object.getPrototypeOf(SortableTableBody)).apply(this, arguments));
  }

  _createClass(SortableTableBody, [{
    key: "render",

    // static propTypes = {
    //   data: PropTypes.array.isRequired,
    //   columns: PropTypes.array.isRequired,
    //   sortings: PropTypes.array.isRequired,
    //   rowKey: PropTypes.string,
    //   item: PropTypes.object
    // };

    value: function render() {
      var _this3 = this;

      var bodies = this.props.data.map(function (item, index) {
        return React.createElement(SortableTableRow, {
          key: index,
          item: item,
          rowKey: _this3.props.rowKey,
          data: item,
          columns: _this3.props.columns
        });
      }.bind(this));

      return React.createElement(
        "tbody",
        null,
        bodies
      );
    }
  }]);

  return SortableTableBody;
}(_react.Component);

exports.default = SortableTableBody;