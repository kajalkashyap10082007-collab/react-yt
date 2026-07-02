		/*program to push,pop and delete items in a stack
		Date:27 january 2026                Author:Kajal*/
		
		#include<stdio.h>
		#include <stdlib.h>
		#define MAX 4
		int main()
		{
			int stack[MAX],i,choice,top=-1,item;
			while(1)
			{
				printf("1. push elements\n");
				printf("2. pop elements\n");
				printf("3. display elements\n");
				printf("4. exit\n");
				printf("enter your choice");
				scanf("%d",&choice);
				
				switch(choice)
				{
					case 1:
						if(top==MAX-1)
						{
							printf("overflow\n");
						}
						else
						{
						printf("value you want to insert\n");
						scanf("%d",&item);
						top++;
						stack[top]=item;
					    }
						break;
						
					case 2:
						if(top==-1)
						{
							printf("underflow\n");
						}
						else
						{
						printf("elements deleted\n");
						top--;
					    }
					    break;
						
					case 3:
						if(top==-1)
						{
						 printf("no elements in a stackk\n");
						}
						else
						{
					   printf("elements in a stack\n");
					    for(i=top;i>=0;i--)
						{
						printf("%d ",stack[i]);
					    }
					    printf("\n");
					    }
					    break;
					
					case 4:
						printf("program exit\n");
						
					default:
					     exit(0);
				}
			}
		}
