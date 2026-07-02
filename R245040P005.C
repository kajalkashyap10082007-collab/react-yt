/*program to insert,delete and display elements in an array
date:27 january 2026                          Author:Kajal*/

#include <stdio.h>
#define MAX 4
int arr[MAX];
int n,i,j;

void insert();
void remove();
void display();

int main()
{
	while(1)
	{
		int choice;
		printf("1. Insert element in array\n");
		printf("2. Delete element in array\n");
		printf("3. display element in array\n");
		printf("4. exit\n");
		printf("enter your choice");
		scanf("%d",&choice);
	
		switch(choice)
		{
			case 1:
				insert();
				break;
			case 2:
				remove();
				break;
			case 3:
				display();
				break;
			case 4:
				printf("exit from program\n");
				return 0;
			default:
				printf("invalid choice");
		}
	}
	}
void insert()
{
	int item,pos;
	printf("enter the position in which you want to insert");
	scanf("%d",&pos);
	printf("enter the element you want to insert");
	scanf("%d",&item);
	for(i=n-1;i>=pos;i--)
	{
		arr[i+1]=arr[i];
	}
	arr[pos]=item;
	n++;
	printf("element inserted successfully\n");
}

void remove()
{
	int pos;
	printf("enter the element pos you want to delete");
	scanf("%d",&pos);
	for (i = pos; i < n - 1; i++)
    {
        arr[i] = arr[i + 1];
    }
	n--;
	printf("element deleted\n");
}

void display()
{
	printf("elements in an array\n");
	for(i=0;i<n;i++)
	{
		printf("%d ",arr[i]);
	}
}

