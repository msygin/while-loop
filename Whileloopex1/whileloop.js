let num = -10
let even = 10
let odd = 300
let i = 1

while (num <= 19) {
    console.log(num);
    num++;
}

while (even <= 40) {
    if (even % 2 == 0) {
        console.log(even);
        even+=2
    } else {
        even+=2;
    }
}

while (odd <= 333) {
    if (odd % 3 == 0) {
        console.log(odd);
        odd+=3;
    } else {
        odd+=3;
    }
}


while (i <= 50) {
    if (i % 3 == 0 || i % 5 == 0) {
        console.log(i);
        i++;
    } else {
        i++;
    }
}
