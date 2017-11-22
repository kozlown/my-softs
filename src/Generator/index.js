class Generator {
  constructor(os) {
    this.os = os
  }

  * generate(softs) {
    yield * softs.map(({ script, version }) => script({
      version,
      os: this.os
    }))
  }
}

export default Generator