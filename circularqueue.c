/*Program to implement insert,delete and display element in circular queue
Date:12 february 2026                                    Author:Kajal*/

#include<stdio.h>
#define MAX 5
int main()
{
	int queue[MAX],front=-1,rear=-1,ch,item,i;
	while(1)
	{
		printf("1. Insert\n");
		printf("2. Delete\n");
		printf("3 Diaplay\n");
		printf("4. Exit\n");
		printf("enter the choice");
		scanf("%d",&ch);
		
		switch(ch)
		{
			case 1:
			//insert
			if((front==0 && rear==MAX-1)||front==rear+1)
			{
				printf("queue is full\n");
				break;
			}
			else if(front==-1)
			{
				front=rear=0;
			}
			else{
				rear++;
				}
				printf("enter the element you want to insert");
				scanf("%d",&item);
			    queue[rear]=item;
		       	printf("element inserted successfully\n");
		       	break;
			
			case 2:
			 //delete
			 if(front==-1)
			 {
			 	printf("queue is empty\n");
			 	break;
			 }
			 else if(rear==MAX-1)
			 {
			 	front=rear=0;
			 }		
			 else
			 {
			 	front++;
			 }
			 queue[rear]=item;
			 printf("element deleted successfully\n");
			 break;
			 
			 case 3:
			 	//display
			if(front==-1)
			{
				printf("queue is empty\n");
				break;
			}
			if(front<=rear)
			for(i=front;i<=rear;i++)
			{
				printf("%d\n",queue[i]);
			}
			else
			{
				for(i=front;i<=MAX-1;i++)
				{
					printf("%d\n",queue[i]);
				}
				for(i=0;i<rear;i++)
				{
					printf("%d\n",queue[i]);
				}
				break;
				
			case 4:
				printf("exit\n");
				return 0;
				
		    default:
		    	printf("invalid choice\n");
			}
		}
	}
}
