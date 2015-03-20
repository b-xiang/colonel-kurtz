import Button from './ui/button'
import React  from 'react'

var AddBlock = React.createClass({

  propTypes: {
    blockType : React.PropTypes.object.isRequired,
    onAdd     : React.PropTypes.func.isRequired
  },

  render() {
    var { icon, id, label } = this.props.blockType

    return (
      <Button aria-label={ label } className="col-btn-icon" onClick={ this._onClick }>
        <img src={ icon } alt={ id } aria-hidden="true" />
      </Button>
    )
  },

  _onClick(e) {
    var { block, position, blockType } = this.props

    this.props.onAdd({
      parent : block,
      type   : blockType.id,
      position
    })

    e.preventDefault()
  }

})

export default AddBlock