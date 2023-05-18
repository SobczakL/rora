export default function timeConverter(time) {
    const currentTime = Date.now();
    const timeDiff = Math.ceil((time * 1000 - currentTime) / (1000 * 60));
    return timeDiff;
}
