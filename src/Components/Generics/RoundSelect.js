import React, { Component } from 'react'
import classNames from 'classnames'
import './RoundSelect.css'
import _ from 'lodash'

class RoundSelect extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
      choice: _.first(this.props.choices)
    }
  }

  select(choice) {
    this.props.handleSelect(choice)
    this.setState({
      choice,
      open: false
    })
  }

  getChoiceComponent(choice, isSelected) {
    if (!isSelected) {
      return <div className={classNames({
        Choice: true,
        first: false
      })} onClick={() => this.select(choice)}>{choice.name}</div>
    }
    const mouseEnterHandler = () => {
      this.setState({
        open: true
      })
    }
    return <div className={classNames({
      Choice: true,
      first: true
    })}
    onClick={() => this.select(choice)}
    onMouseEnter={mouseEnterHandler}>{choice.name}</div>
  }

  getChoices() {
    return this.props.choices.reduce((result, choice) => {
      if (choice.name === this.state.choice.name) {
        return _.concat([this.getChoiceComponent(choice, true)], result)
      }
      if (this.state.open) {
        return _.concat(result, [this.getChoiceComponent(choice, false)])
      } else {
        return result
      }
    }, [])
  }

  render() {
    const mouseOutHandler = () => {
      this.setState({
        open: false
      })
    }

    return (
      <div className='RoundSelect' onMouseLeave={mouseOutHandler}>
        {this.getChoices()}
      </div>
    );
  }
}

export default RoundSelect
