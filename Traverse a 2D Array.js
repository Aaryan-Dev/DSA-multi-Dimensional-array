// You are given a 2D array(matrix), ofNrows andMcolumns.

// You need to print elements of array as shown in the diagram, on a single line.

// Image

// For example, for the above matrix, the required output would be as shown below.

// 4 3 2 1 5 6 7 8 12 11 10 9


function traverse2dArray(N, M, matrix){
    
    bag = "";
 for(i=0; i<M; i++){
     for(j=N-1; j>=0; j--){
    bag =bag + (matrix[j][i]) + " " ;      
     }
 }
    console.log(bag);
 }




