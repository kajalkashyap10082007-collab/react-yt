#include <iostream>
#include <string>
using namespace std;
class Teacher{
//properties
string name;
string dept;
string subject;
double salary;

//methods
void changeDept(string newDept){
    dept=newDept;
}
};
int main()
{
    Teacher t1;
    t1.name="kajal";
    t1.subject="C++";
    t1.dept="computer science";
    t1.salary="25000";
    
    cout<<t1.name<<endl;
    return 0;
}