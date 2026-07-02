///*program to implement simple queue  using array
//Date:3 february 2026                  Author:Kajal*/

#include <stdio.h>
#define MAX 4

int main()
{
    int rear = -1, front = -1, item, choice, i;
    int queue[MAX];

    while (1)
    {
        printf("\n1. Insertion");
        printf("\n2. Deletion");
        printf("\n3. Display");
        printf("\n4. Exit");
        printf("\nEnter your choice: ");
        scanf("%d", &choice);

        switch (choice)
        {
            case 1: 
                if (rear == MAX - 1)
                {
                    printf("Queue Overflow\n");
                }
                else
                {
                    printf("Enter the item to insert: ");
                    scanf("%d", &item);

                    if (front == -1)
                        front = 0;

                    rear++;
                    queue[rear] = item;
                    printf("Element inserted successfully\n");
                }
                break;

            case 2: // Deletion
                if (front == -1)
                {
                    printf("Queue Underflow\n");
                }
                else
                {
                    item = queue[front];
                    printf("Deleted element: %d\n", item);
                    front++;

                    if (front > rear)
                    {
                        front = -1;
                        rear = -1;
                    }
                }
                break;

            case 3: // Display
                if (front == -1)
                {
                    printf("Queue is empty\n");
                }
                else
                {
                    printf("Elements in the queue:\n");
                    for (i = front; i <= rear; i++)
                    {
                        printf("%d\n", queue[i]);
                    }
                }
                break;

            case 4:
                return 0;

            default:
                printf("Invalid choice\n");
        }
    }
}

