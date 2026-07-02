#include<stdio.h>
int main()
{
	int a,b,c,side;
	while(1){
	printf("enter sides of triangle:");
	scanf("%d %d %d", &a, &b, &c);
if(a==b && b==c && a==c){
	printf("Equilateral Triangle\n");
}
else if(a==b && a!=c && b==)||(){
	printf("Isoceles Triangle\n");
}
else if(a!=b && b!=c && c!=a){
	printf("Scalene Triangle\n");
}
	}
return 0;	
}
