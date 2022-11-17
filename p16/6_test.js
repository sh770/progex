//Q6
/**
 *  We want to make a row of bricks that is goal inches long. 
 *  We have a number of small bricks (1 inch each) and big bricks (5 inches each). 
 *  Return True if it is possible to make the goal by choosing from the given bricks. 
 *  This is a little harder than it looks and can be done without any loops. 
 *  See also: Introduction to MakeBricks
 *
 * make_bricks(3, 1, 8) → True
 * make_bricks(3, 1, 9) → False
 * make_bricks(3, 2, 10) → True
 *  */

 function make_bricks(small, big, goal) {
    return ((big * 5) + small >= goal && goal %  5 <= small )
    
}
console.log(make_bricks(3, 1, 8));
console.log(make_bricks(3, 1, 9));
console.log(make_bricks(3, 2, 10));
console.log(make_bricks(1, 5, 22));