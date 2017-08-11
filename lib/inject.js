'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

exports.inject = inject;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { observer as originObserver } from 'mobx-react';

function inject() {
  var args = arguments;
  console.log(args);
  return function (WrappedComponent) {
    var _class, _temp;

    // const ObserverComponent = originObserver(WrappedComponent);
    var ObserverComponent = WrappedComponent;

    var ContextContainer = (_temp = _class = function (_Component) {
      (0, _inherits3.default)(ContextContainer, _Component);

      function ContextContainer() {
        (0, _classCallCheck3.default)(this, ContextContainer);
        return (0, _possibleConstructorReturn3.default)(this, (ContextContainer.__proto__ || (0, _getPrototypeOf2.default)(ContextContainer)).apply(this, arguments));
      }

      (0, _createClass3.default)(ContextContainer, [{
        key: 'render',
        value: function render() {
          var store = this.context.store;

          if (args.length == 0) store = this.context.store;else {
            store = {};
            for (var index in args) {
              store[args[index]] = this.context.store[args[index]];
            }
          }
          return _react2.default.createElement(ObserverComponent, (0, _extends3.default)({}, store, this.props));
        }
      }]);
      return ContextContainer;
    }(_react.Component), _class.contextTypes = {
      store: _react.PropTypes.object
    }, _temp);


    return ContextContainer;
  };
}