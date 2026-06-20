var solution = function (isBadVersion) {
    return function (n) {
        let first = 1;
        let last = n;

        while (first < last) {
            let mid = first + Math.floor((last - first) / 2);
            if (isBadVersion(mid)) {
                last = mid;
            } else {
                first = mid + 1;
            }
        }
        return first
    };
};
