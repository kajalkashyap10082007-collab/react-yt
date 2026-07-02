/* prorgam to  implemation of stack using array
date:28 january 2026                      Author:Kajal*/

#include<stdio.h>
#define MAX 4
int STACK[MAX];
int top=-1,item,i;
void push();
void pop();
void display();
int main()
{
	while(1)
	{
		int choice;
		printf("1. push elements\n");
		printf("2. pop elements\n");
		printf("3. display elemnts\n");
		printf("4. exit\n");
		printf("enter your choice");
		scanf("%d",&choice);
		
		switch(choice)
		{
			case 1:
				push();
				break;
			case 2:
				pop();
				break;
			case 3:
				display();
				break;
			case 4:
				printf("exitinng program...");
				return 0;
			default:
				printf("invalid choice\n");
		}
	}
}
void push()
{
	printf("enter the item");
	scanf("%d",&item);
	if(top==MAX-1)
	{
		printf("overflow\n");
	}
	else
	{
		top++;
		STACK[top]=item;
		printf("elemnted inserted\n");
	}
}
void pop()
{
	if(top==-1)
	{
		printf("underflow\n");
	}
	else
	{
		printf("element deleted is %d\n",STACK[top]);
		top--;
	}
}
void display()
{
	printf("elememts in a stack\n");
	for(i=top;i>=0;i--)
	{
		printf("%d ",STACK[i]);
	}
}
