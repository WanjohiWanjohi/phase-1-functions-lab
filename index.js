function distanceFromHqInBlocks(distanceLength) {
    return Math.abs(distanceLength - 42);
}
function distanceFromHqInFeet(distanceLength) {
    return Math.abs(distanceLength - 42) * 264;
}
function distanceTravelledInFeet(startPoint, endPoint) {
    return Math.abs(endPoint - startPoint) * 264;
}
function calculatesFarePrice(start, destination) {
    const distance = destination - start;
    if (distance <= 1) {
        return 0;
    } else if (distance > 2000 && distance <2500) {
        return 25;
    }else if (distance > 2500 ){
        return 0;
    }
}