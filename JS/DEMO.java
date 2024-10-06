class DEMO{

    // void sum(int x, int y)
    // {
    //     System.out.println(x+y);
    // }
    // void sum(int x, int y , int z)
    // {
    //     System.out.println(x+y+z);
    // }
    void sum(int ... x)
    {
        int result=0;
        for(int i=0; i<x.length;i++)
        {
            
            result = result + x[i];
        }
        System.out.println(result);
    }

    public static void main(String args[])
    {
        DEMO n= new DEMO();
        n.sum(1,2);
        n.sum(10,20,5,6,7);
    }
}