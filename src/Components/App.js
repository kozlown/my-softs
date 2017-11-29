import React, { Component } from 'react'
import softs from '../Softs/softs'
import SearchBar from './SearchBar'
import Soft from './Soft'
import MiniSoft from './MiniSoft'
import FontAwesome from 'react-fontawesome'
import FileSaver from 'file-saver'
import CircularProgressbar from 'react-circular-progressbar'
import classNames from 'classnames'
import Generator from '../Generator'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      search: '',
      os: 'Ubuntu 16.04',
      added: [],
      cache: null,
      goBack: {
        percentage: 100,
        enter: false,
        active: false
      }
    }

    this.onSearch = this.onSearch.bind(this)
    this.addSoft = this.addSoft.bind(this)
    this.deleteSoft = this.deleteSoft.bind(this)
    this.generate = this.generate.bind(this)
    this.setVersion = this.setVersion.bind(this)
    this.handleSelectOs = this.handleSelectOs.bind(this)
    this.deleteAllSofts = this.deleteAllSofts.bind(this)
    this.cancelDeleteAllSofts = this.cancelDeleteAllSofts.bind(this)
    this.hideGoBack = this.hideGoBack.bind(this)
  }

  getSofts() {
    return softs
      .filter(soft => soft.name.match(new RegExp(this.state.search, 'i')))
      .filter(soft => soft.versions.some(version => version.allowedOs.some(os => os === this.state.os)))
      .map(soft => {
        const added = this.state.added.some(added => added.name === soft.name)
        const softProps = {
          soft,
          added,
          addSoft: this.addSoft,
          deleteSoft: this.deleteSoft
        }
        return (<Soft {...softProps} />)
      })
  }

  hideGoBack() {
    clearInterval(this.state.goBack.interval)
    this.setState({
      goBack: {
        ...this.state.goBack,
        active: false
      }
    })
    setTimeout(() => {
      this.setState({
        goBack: {
          ...this.state.goBack,
          percentage: 100,
          enter: false
        }
      })
    }, 500)
  }

  deleteAllSofts() {
    this.setState({
      added: [],
      goBack: {
        ...this.state.goBack,
        enter: true
      },
      cache: this.state.added
    }, () => {
      setTimeout(() => {
        this.setState({
          goBack: {
            ...this.state.goBack,
            active: true
          }
        }, () => {
          const myInterval = setInterval(() => {
            if (this.state.goBack.percentage <= 0) {
              this.hideGoBack()
            }
            this.setState({
              goBack: {
                ...this.state.goBack,
                percentage: this.state.goBack.percentage - 20
              }
            })
          }, 1000)
          this.setState({
            goBack: {
              ...this.state.goBack,
              interval: myInterval
            }
          })
        })
      }, 100)
    })
  }

  getMiniSofts() {
    return this.state.added
      .filter(soft => soft.versions.some(version => version.allowedOs.some(os => os === this.state.os)))
      .map(soft => {
        const softProps = {
          soft,
          deleteSoft: this.deleteSoft,
          setVersion: this.setVersion
        }
        return (<MiniSoft {...softProps} />)
      })
  }

  setVersion(softToChange, version) {
    this.setState({
      added: this.state.added.map(soft => {
        if (soft.name === softToChange.name) {
          soft.version = version
        }
        return soft
      })
    })
  }

  addSoft(softToAdd) {
    this.setState({
      added: this.state.added.concat([softToAdd])
    })
  }

  deleteSoft(softToDelete) {
    this.setState({
      added: this.state.added.filter(soft => soft.name !== softToDelete.name)
    })
  }

  onSearch(event) {
    this.setState({
      search: event.target.value
    })
  }

  handleSelectOs(os) {
    this.setState({
      os
    })
  }

  cancelDeleteAllSofts() {
    this.setState({
      added: this.state.cache
    })
    this.hideGoBack()
  }

  generate() {
    const generator = new Generator(this.state.os)
    let final = `#!/bin/bash`
    const softs = this.state.added
      .filter(soft => soft.versions.some(version => version.allowedOs.some(os => os === this.state.os)))
    for (let script of generator.generate(softs)) {
      final += script
    }
    const blob = new Blob([final], {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(blob, "my-softs.sh");
  }

  render() {
    let miniSofts = this.getMiniSofts()
    if (miniSofts.length === 0) {
      miniSofts = <div id='NoSofts'>
        <FontAwesome
          onClick={this.deleteSoft}
          className='delete'
          name='thermometer-empty'
          size='2x'
        />
        <span style={{ paddingLeft: '10px' }}>
          No softs added, click on a soft to add it...
        </span>
      </div>
    } else {
      miniSofts = [
        <button id='generate' onClick={this.generate}>
          Generate
        </button>,
        <FontAwesome
          onClick={this.deleteAllSofts}
          className='deleteAll'
          name='trash'
          size='2x'
        />
      ].concat(miniSofts)
    }

    const textForPercentage = percentage => ''

    return (
      <div className='App'>
        <header className='App-header'>
          <a href='https://github.com/kozlown/my-softs' id='github-ribbon'>
            <img src='img/forkme.png' alt='Fork me on GitHub' />
          </a>
          <SearchBar onChange={this.onSearch} placeholder={'Search a soft...'} handleSelectOs={this.handleSelectOs}/>
        </header>
        <div id='Softs'>
          { this.getSofts() }
        </div>
        <div id='MiniSofts'>
          <div id='cancel' onClick={this.cancelDeleteAllSofts} className={classNames({
            active: this.state.goBack.active,
            enter: this.state.goBack.enter
          })}>
            <div className='progress'>
              <CircularProgressbar
                className="CircularProgressbar-inverted"
                background
                backgroundPadding={5}
                strokeWidth={15}
                percentage={this.state.goBack.percentage}
                textForPercentage={textForPercentage} />
            </div>
            <p>
              Cancel
            </p>
          </div>
          { miniSofts }
        </div>
      </div>
    );
  }
}

export default App
