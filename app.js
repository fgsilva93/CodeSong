var friends = ['Kayla', 'Blake', 'Cole', 'Mary', 'Josh'];

//nested for loops
for (var i = 0; i < friends.length; i++) {
    for (var num = 99; num > 0; num--) {
        if (num !== 1) {
            console.log(friends[i] + ": " + num + " Lines of code in the file, " + num + " lines of code; "
                + friends[i] + " strikes one out, clears it all out, " + (num-1) + " more lines of code in the file");
        } else {
            console.log(friends[i] + ": " + num + " Line of code in the file, " + num + " line of code; "
                + friends[i] + " strikes one out, clears it all out, no more lines of code in the file");
        }
    }
}

// for (var i = 0; i <= num; i++) {
//     friends[1]
//     while (num > 0) {
//         console.log(friends[1] + ": " + i + " Lines of code in the file, " + i + " lines of code; ");
//         console.log(friends[1] + " " + "strikes one out, clears it all out.")
//         num = num - 1;

//         if (num > 0) {
//             console.log(i + " files of code in the fiel.")
//         } else {
//             console.log("No more files of code in the file.");
//         }
//     }

// }











//for (var i = 0; i <= num; i++) {
    //console.log(friends[1] + ": " + i + " bottles");

//}

//for(var i = 0; i <= num; i++) {
    //console.log(friends[2] + ": " + i + " bottles");
//}

//for(var i = 0; i <= num; i++) {
    //console.log(friends[3] + ": " + i + " bottles");
//}

//for(var i = 0; i <= num; i++) {
    //.log(friends[4] + ": " + i + " bottles");
//}
