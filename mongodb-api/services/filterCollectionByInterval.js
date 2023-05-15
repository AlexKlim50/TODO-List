const filterCollectionByInterval = (collection, timeInterval) => {
    const now = +new Date();
    let timeDiff;

    switch (timeInterval) {
        case 'day':
            timeDiff = 24 * 60 * 60 * 1000;
            break;
        case 'week':
            timeDiff = 7 * 24 * 60 * 60 * 1000;
            break;
        case 'month':
            timeDiff = 30 * 24 * 60 * 60 * 1000;
            break;
        default:
            timeDiff = null;
    }

    if (timeDiff) {
        return collection.filter((it) => {
            return now - it._createdAt <= timeDiff
        })
    } else {
        return collection
    }
}
exports.filterCollectionByInterval = filterCollectionByInterval;
