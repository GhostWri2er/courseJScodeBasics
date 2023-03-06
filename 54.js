const isInternationalPhone = (tel) => {
    const firstLetter = tel[0];
    return firstLetter.slice(0,1) === '+'
  }