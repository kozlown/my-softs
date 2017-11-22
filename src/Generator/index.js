class Generator {
  constructor(os) {
    this.os = os
  }

  * generate(softs) {
    softs.forEach(({ script, version }) => {
      yield script({
        version,
        os: this.os
      })
    })
  }
}

export default Generator