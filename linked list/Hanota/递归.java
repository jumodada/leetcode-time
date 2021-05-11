class Solution {
    public void hanota(List<Integer> A, List<Integer> B, List<Integer> C) {
        moveTower(A.size(),A,B,C);
    }
    public void AToC(List<Integer> A,List<Integer> C) {
        C.add(A.remove(A.size()-1));
    }

    public void moveTower(int n, List<Integer> A, List<Integer> B, List<Integer> C) {
        if(n==1){
            AToC(A,C);
        }else{
            moveTower(n-1,A,C,B);
            AToC(A,C);
            moveTower(n-1,B,A,C);
        }
        
    }
}