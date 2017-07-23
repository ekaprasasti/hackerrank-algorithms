package main
import "fmt"

func main() {
    //Enter your code here. Read input from STDIN. Print output to STDOUT
    var times, temp, result int
    times = read()
    for i := 0; i < times; i++ {
        temp = read()
        result += temp
    }
    fmt.Println(result)
}

func read() int {
    var n int
    _, err := fmt.Scan(&n)

    if err != nil {
        panic(err)
    }

    return n
}
