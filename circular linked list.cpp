#include <iostream>
using namespace std;

struct node
{
    int info;
    struct node *link;
};
 struct node *start = NULL;

 void crreate(int item)
 {
     struct node *temp = start;
     struct node *newnode= new struct node;
     if(temp == NULL)
       { start= temp= newnode;
         temp->info=item;
         temp->link=NULL;
       }
     else
     {
         while(temp->link!=NULL)
         {
             temp=temp->link;
         }
         temp->link = newnode;
         temp->link->info=item;
         temp->link->= NULL;

     }
 }

 