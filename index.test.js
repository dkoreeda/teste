const {
    getSortedDistancesBetweenStoresAndUser,
    getClosestStores
} = require('./index');
const assert = require('assert').strict;

const userPosition = [20, 32]

describe("Test sorted distances between stores and user", () => {
    it("should return sorted list of stores", () => {
        // given
        const stores = [[ 40,88 ], [ 18, 56 ], [ 99, 2 ]]

        // when
        const sortedDistances = getSortedDistancesBetweenStoresAndUser(stores, userPosition)

        // then
        const expectedSortedDistances =  [[ 18, 56 ], [ 40, 88 ], [ 99, 2 ]]
        assert.deepStrictEqual(sortedDistances, expectedSortedDistances)
    });
    it("should return sorted list of closest stores", () => {
        // given
        const stores = [[ 0,100 ], [ 10, 90 ], [ 20, 80 ], [ 30, 70 ], [ 40, 60 ], [ 50, 50]]

        // when
        const sortedDistances = getSortedDistancesBetweenStoresAndUser(stores, userPosition)
        const closestStores = getClosestStores(sortedDistances)

        // then
        const expectedClosestStores =  [[ 40, 60 ], [ 50, 50 ], [ 30, 70 ]]
        assert.deepStrictEqual(closestStores, expectedClosestStores)
    });
    it("should return sorted list of closest stores when stores coordinates are very close to user position", () => {
        // given
        const stores = [[ 0,22 ], [ 22, 22 ], [ 20, 30 ], [ 21, 32 ], [ 20, 20 ], [ 32, 32]]

        // when
        const sortedDistances = getSortedDistancesBetweenStoresAndUser(stores, userPosition)
        const closestStores = getClosestStores(sortedDistances)

        // then
        const expectedClosestStores =  [[ 21, 32 ], [ 20, 30 ], [ 22, 22 ]]
        assert.deepStrictEqual(closestStores, expectedClosestStores)
    });
    it("should return sorted list of closest stores when stores coordinates are far to user position", () => {
        // given
        const stores = [[ 100, 100 ], [ 90, 80 ], [ 99, 100 ], [ 80, 90 ], [ 73, 69 ]]

        // when
        const sortedDistances = getSortedDistancesBetweenStoresAndUser(stores, userPosition)
        const closestStores = getClosestStores(sortedDistances)

        // then
        const expectedClosestStores =  [[ 73, 69 ], [ 80, 90 ], [ 90, 80 ]]
        assert.deepStrictEqual(closestStores, expectedClosestStores)
    });
    it("should return list of closest stores with same order when calculated distances has same value", () => {
        // given
        const stores = [[ 20, 20 ], [ 32, 32]]

        // when
        const sortedDistances = getSortedDistancesBetweenStoresAndUser(stores, userPosition)
        const closestStores = getClosestStores(sortedDistances)

        // then
        const expectedClosestStores =  [[ 20, 20 ], [ 32, 32 ]]
        assert.deepStrictEqual(closestStores, expectedClosestStores)
    });
    it("should return empty array if stores or user position is Null", () => {
        // when
        const sortedDistances = getSortedDistancesBetweenStoresAndUser(null, null)

        // then
        assert.deepStrictEqual(sortedDistances, [])
    });
    it("should not break if list of coordinates of stores is an empty array", () => {
        // when
        const sortedDistances = getSortedDistancesBetweenStoresAndUser([], userPosition)

        // then
        assert.deepStrictEqual(sortedDistances, [])
    });
    it("should not break if user position coordinates is an empty array", () => {
        // when
        const sortedDistances = getSortedDistancesBetweenStoresAndUser([], userPosition)

        // then
        assert.deepStrictEqual(sortedDistances, [])
    });
});
