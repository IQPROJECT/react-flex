import join from './join';
import props2flex from './props2flex';
import prefix from './prefix';

var PREFIX = prefix;

export default (function (props) {

  var column = !!props.column;
  var row = !column && !!props.row;
  var reverse = props.reverse ? '-reverse' : '';

  var flex = props2flex(props);

  var flexGrow = props.flexGrow;
  var flexShrink = props.flexShrink;
  var flexBasis = props.flexBasis;
  var display = props.inline ? 'inline-flex' : props.display;

  var className = join(props.className, props.alignItems ? PREFIX + '--align-items-' + props.alignItems : null, props.alignContent ? PREFIX + '--align-content-' + props.alignContent : null, props.justifyContent ? PREFIX + '--justify-content-' + props.justifyContent : null, props.wrap ? PREFIX + '--wrap' : null, props.alignSelf ? PREFIX + '--align-self-' + props.alignSelf : null, row ? PREFIX + '--row' + reverse : null, column ? PREFIX + '--column' + reverse : null,

  // more like flex item related
  flex != null ? PREFIX + '--flex-' + flex : null, flexGrow != null ? PREFIX + '--flex-grow-' + flexGrow : null, flexShrink != null ? PREFIX + '--flex-shrink-' + flexShrink : null, flexBasis != null ? PREFIX + '--flex-basis-' + flexBasis : null, display != null ? PREFIX + '--display-' + display : null);

  return className;
});