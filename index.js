const calculateDistanceBetweenStoreAndUser = (a, b) => {
  const [xa, ya] = a
  const [xb, yb] = b
  const x = Math.pow((xb - xa), 2)
  const y = Math.pow((yb - ya), 2)
  return Math.sqrt((x + y))
}

const getShortestDistanceBetweenStoreAndUser = (distances) => {
  let shortestDistanceValue = null
  let shortestDistanceKey = null
  for(let d in distances) {
    if(!shortestDistanceValue) {
      shortestDistanceValue = distances[d]
      shortestDistanceKey = d
    }

    if (shortestDistanceValue && shortestDistanceValue > distances[d]) {
      shortestDistanceValue = distances[d]
      shortestDistanceKey = d
    }
  }
  return shortestDistanceKey
}

const getSortedDistancesBetweenStoresAndUser = (stores, userPosition) => {
    if(!stores || !userPosition) return []

    const distances = {}
    for(let i=0; i<stores.length; i++) {
      const currentStore = stores[i]
      const distance = calculateDistanceBetweenStoreAndUser(currentStore, userPosition)
      distances[stores[i]] = distance
    }
    console.log(`Calculated distances:`, distances)

    const sortedDistances = []
    while(Object.keys(distances).length !== 0) {
      const shortestDistance = getShortestDistanceBetweenStoreAndUser(distances)
      delete distances[shortestDistance]
      const splitShortesDistance = shortestDistance.split(",")
      const arrayDistance = splitShortesDistance.map(val => parseFloat(val))
      sortedDistances.push(arrayDistance)
    }
    return sortedDistances
}

const getClosestStores = (stores) => {
    if (stores.length > 3) {
        return [stores[0], stores[1], stores[2]]
    }

    return stores
}

module.exports = { getSortedDistancesBetweenStoresAndUser, getClosestStores }
