/** @flow */

var MediumEditor = require('./vendor/medium-editor')
var React        = require('react')
var Types        = React.PropTypes

require('./vendor/medium-editor/style')

var Editor = React.createClass({

  propTypes: {
    html   : Types.string.isRequired,
    onBlur : Types.func.isRequired
  },

  shouldComponentUpdate(props: Object, state: Object): boolean {
    return false
  },

  componentDidMount(): void {
    this.setState({
      editor: new MediumEditor(this.refs.editor.getDOMNode(), this.props.options)
    })
  },

  componentWillUnmount(): void {
    this.state.editor.deactivate()
  },

  render(): any {
    return (
      <div className="colonel-block-content">
        <div className="colonel-block-editor" onBlur={ this._onBlur } role="textarea" aria-multiline="true" ref="editor" dangerouslySetInnerHTML={{ __html: this.props.html }} />
      </div>
    )
  },

  _onBlur() {
    var editor = this.refs.editor.getDOMNode()

    this.props.onBlur({
      text: editor.textContent,
      html: editor.innerHtml
    })
  }

})

module.exports = Editor
