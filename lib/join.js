var notEmpty = function notEmpty(v) {
  return !!v;
};

export default (function () {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.filter(notEmpty).join(' ');
});