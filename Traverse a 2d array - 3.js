// You are given a 2D array(matrix), ofNrows andMcolumns.

// You need to print elements of array in as shown in diagram, on a single line.

// Screenshot (93).png



// For example, for the above matrix, the required output would be as shown below.

// 9 10 11 12 8 7 6 5 1 2 3 4

function traverse2dArray(N, M, matrix){
    
    bag = "";
 for(i=M-1; i>=0; i--){
     for(j=0; j<N; j++){
    bag =bag + (matrix[j][i]) + " " ;      
     }
 }
    console.log(bag);

}
