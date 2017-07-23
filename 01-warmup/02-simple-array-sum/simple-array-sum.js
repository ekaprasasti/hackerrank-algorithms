/////////////// ignore above this line ////////////////////

function simpleArraySum(n, ar) {
    // Complete this function
    let sum = 0;
    for (i = 0; i < n; i++){
       sum += ar[i];
    }
    
    return sum;
}

function main() {
    var n = parseInt(readLine());
    ar = readLine().split(' ');
    ar = ar.map(Number);
    var result = simpleArraySum(n, ar);
    process.stdout.write("" + result + "\n");

}
