/* program to implement linked list
Date:5 March 2026             Author:Kajal*/

#include<stdio.h>
#include<stdlib.h>
struct node{
   int info;
   struct node *link;	
}
*start=NULL;
int main()
{
	int choice,item,start,count=0,temp;
	struct node *ptr;
	while(1){
		printf("1. Add node at he beginning of the list\n");
		printf("2. Display elements of the linked list\n");
		printf("3. Count the number of nodes\n");
		printf("4. Search the element\n");
		printf("5. Delete the beginning node\n");
		printf("6. Exit\n");
		printf("Enter the choice");
		scanf("%d",&choice);
		
		switch(choice)
		{
		  case 1:
		  	printf("Enter the item you want to insert");
		  	scanf("%d",&item);
		  	struct node *newnode;
		  	newnode=(struct node*)malloc(sizeof(newnode));
		  	newnode->info=item;
		  	newnode->link=start;
		    start=newnode;
		    printf("Element inserted successfully\n");
		    break;
		    
		case 2:
			if(start==NULL)
			{
				printf("Linked List is empty");
				break;
			}
			else{
				ptr=start;
			while(ptr!=NULL)
			{
				printf("%d\n",ptr->info);
				ptr=ptr->link;
			}
		    }
			break;
			
		case 3:
			if(start==NULL)
			{
			  printf("Linked List is empty\n");
			  break;	
			}
			else{
			ptr=start;
			while(ptr!=NULL)
			{
				count++;
				ptr=ptr->link;
			}
		}
			printf("Number of elements in list are:\n");
			printf("%d\n",count);	
			break;
			
		case 4:
			printf("Enter the item\n");
			scanf("%d",&item);
			if(start==NULL)
			{
			  printf("Linked List is empty\n");
			  break;	
			}
			int found=0;
			ptr=start;
			while(ptr!=NULL)
			{
				if(item==ptr->info){
					found=1;
					break;
				}
				ptr=ptr->link;	
			}
			if(found==1){
			printf("%d\n",item);
		}
			else{
			printf("element not found\n");	
		}
			break;
			
			case 5:
				if(start==NULL){
					printf("Linked list is empty\n");
					break;
				}
				else{
		        	temp=start;
		        	start=start->link;
		        	free(temp);
		        	printf("sucessfully deleted\n");
		        		}
			break;
		case 6:
			printf("Exit\n");
			return 0;
			
		default:
			printf("Invalid Choice\n");
		}
	     
	}
	return 0;
}
