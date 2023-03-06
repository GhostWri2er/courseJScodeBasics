function getHiddenCard(сard, repeat = 4) {
    return "*".repeat(repeat) + сard.slice(12, 16)
}