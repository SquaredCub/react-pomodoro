const formatTime = time => {
    const test = (time / 60).toString().split(".");
    if (!test[1]) {
        test[1] = "00";
        return `${test[0]}:${test[1]}`;
    }
    const minutes = test[0];
    let seconds = test[1];
    let divider = 1;
    for (let i = 0; i < seconds.length; i++) {
        divider *= 10;
    }
    seconds = seconds / divider;
    seconds = Math.round(seconds * 60).toString();

    if (seconds.length === 1) {
        seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
};

export {formatTime};
