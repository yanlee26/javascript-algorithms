# Quicksort

Quicksort is a divide and conquer algorithm. 分治算法
Quicksort first divides a large array into two smaller
sub-arrays: the low elements and the high elements.
Quicksort can then recursively sort the sub-arrays
将一个大数组分成两个小数组：低元素数组与高元素数组，而后递归处理子数组

The steps are:

1. Pick an element, called a pivot, from the array.从数组里选择一个游标
2. Partitioning: reorder the array so that all elements with
   values less than the pivot come before the pivot, while all
   elements with values greater than the pivot come after it
   (equal values can go either way). After this partitioning,
   the pivot is in its final position. This is called the
   partition operation.关键：拆分，重排数组致大于游标的元素在其后，小于者在前
3. Recursively apply the above steps to the sub-array of
   elements with smaller values and separately to the
   sub-array of elements with greater values.

Animated visualization of the quicksort algorithm.
The horizontal lines are pivot values.

![Quicksort](https://upload.wikimedia.org/wikipedia/commons/6/6a/Sorting_quicksort_anim.gif)

## Complexity

| Name           |     Best      |    Average    |     Worst     | Memory | Stable | Comments                                                      |
| -------------- | :-----------: | :-----------: | :-----------: | :----: | :----: | :------------------------------------------------------------ |
| **Quick sort** | n&nbsp;log(n) | n&nbsp;log(n) | n<sup>2</sup> | log(n) |   No   | Quicksort is usually done in-place with O(log(n)) stack space |

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Quicksort)
- [YouTube](https://www.youtube.com/watch?v=SLauY6PpjW4&index=28&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
