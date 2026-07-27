class Solution {

    public int maxSubarraySumCircular(int[] nums) {

        int total = 0;

        int maxSum = nums[0];
        int curMax = 0;

        int minSum = nums[0];
        int curMin = 0;

        for (int n : nums) {

            // Maximum Subarray (Kadane)
            curMax = Math.max(n, curMax + n);
            maxSum = Math.max(maxSum, curMax);

            // Minimum Subarray (Reverse Kadane)
            curMin = Math.min(n, curMin + n);
            minSum = Math.min(minSum, curMin);

            total += n;
        }

        // All numbers are negative
        if (maxSum < 0)
            return maxSum;

        // Maximum of normal and circular
        return Math.max(maxSum, total - minSum);
    }
}