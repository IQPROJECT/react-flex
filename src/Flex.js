import React, { PureComponent } from 'react'

import join from './join'
import props2className from './props2className'
import cleanup from './cleanup'

class Flex extends PureComponent {

  render(){
    const props = this.props
    const className = join('react-flex', props2className(props))

    const allProps = {...props};

    cleanup(allProps)

    allProps.className = className

    if (props.factory){
      return props.factory(allProps)
    }

    return <div {...allProps} />
  }
}

Flex.defaultProps = {
  row: true,
  wrap: true,
  alignItems: 'center',
  display: 'flex'
}

export default Flex
