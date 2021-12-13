# Data Structures And Algorithms

## Project 2 - Merge Sort

### [16,21,11,8,12,22] -> Merge Sort

**1. Yukarıda verilen dizinin sort türüne göre aşamalarını yazınız.**
```
                [16,21,11,8,12,22]
                /               \
            [16,21,11]          [8,12,22]
             /     \              /   \
          [16]   [21,11]         [8]  [12,22]
            |      /  \           |     /   \
          [16]   [11]  [21]      [8]  [12]  [22]
            |      \    /         |     \    /
          [16]     [11,21]       [8]   [12,22]
            \         /            \      /
            [11,16,21]            [8,12,22]
                      \          / 
                    [8,11,12,16,21,22]    
```
**2. Big-O gösterimini yazınız.**
```
n = 2^x
x = logn ise O(nlogn)
```


