function storePosition(name, lat, long) {
    localStorage.setItem(name, lat +';'+ long);
}

export default storePosition;