

const addSum = (price) => {
    return {
        type: "SUM",
        payload: price
    }
}

export {addSum};