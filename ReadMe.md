### Front-end Technologies


- HTML
- CSS
- JavaScript
- BootStrap framework
- Angular framework
- ReactJs



### Backend Technologies


- Node.js
	- express.js
	- nodemoon
	- cors
	- dotenv
- PHP
- C#
- Java
- Python



### Databases


- MongoDb
- Mysql
- SQLite
- Firebase
- Postgressql
- Oracle

+ VCS(Version Control System) or source Code Manegement
	- Distributed VCS
		- Git,Mercurial
	- Remote (Central) VCS
		- Github,Bitbucket



### Git

- git init
- git add filename
- git add file1 file2 file3
- git add . (or) git add --all
- git status
- git commit -m "ReadMe.md and sample.html files are added" (Commit Message)
- git config --global user.name "KarthikReddy20121A127778939"
- git config --global user.email "karthikreddy.maru@gmail.com"
- comit data with comit message
- git remote add origin "YOUR GIT LINK"
- push the code into GitHub (git push -u origin master)



### HTML

- Hyper Text Markup Language

- Semantic Elements
	- header
	- section
	- article
	- aside
	- footer
	- table
- Block Level Elements
	- h1 to h6
	- p
	- div
	- all semantic Elements
	- Test will start from new line 
- Inline Elements
	- span 
	- image
	- a
	- nav
	- form
	- input
	- textarea
	- legend
	- sup
	- sub
- Some More Elements
	- Audio
	- Video
	- Canvas
	- Progress
	- Meter
	- DataList
	- Select

### Reference Links
- Flaticon Link 
	- https://www.flaticon.com/
- Color Contrast 
	- WebAim

### CSS


- Cascading Style Sheets
+ Types of CSS
	- Inline CSS
	- Internal CSS
	- External CSS

+ Syntax of CSS

...
selector{
	css properties
}


### Selctors

+ Simple Selectors


	- By Element Name
		-The element selector selects HTML elements based on the element name.

	- Grouping selector (,)
		- The grouping selector selects all the HTML elements with the same style definitions

	- Class selector (.)
		- The class selector selects HTML elements with a specific class attribute.
		- To select elements with a specific class, write a period (.) character, followed by the class name.

	- Id selector (#)
		- The id selector uses the id attribute of an HTML element to select a specific element.
		- The id of an element is unique within a page, so the id selector is used to select one unique element!
		- To select an element with a specific id, write a hash (#) character, followed by the id of the element.

	- Universal Selector(*)
		- The universal selector (*) selects all HTML elements on the page.

+ Combinators


	+ Descendant Selector ( )
		- The descendant selector matches all elements that are descendants of a specified element

	+ Child selector (>)
		- The child selector selects all elements that are the children of a specified element.

	+ Adjacent sibling selector (+)
		- The adjacent sibling selector is used to select an element that is directly after another specific element.
		- Sibling elements must have the same parent element, and "adjacent" means "immediately following".

	+ General sibling selector (~)
		- The general sibling selector selects all elements that are next siblings of a specified element.

+ Pseudo class selector
+ Pseudo element selector
+ Attribute selector



### Box Model

+ Margin
+ Border 
+ Padding
	- padding : 10px (for all adjacent sides)
	- padding : 10px 20px(10px for Top and Bottom ,20px for right and Left )
	- padding : 10px 20px 30px(10px for top , 20px for right and left, 30px for bottom)
	- padding : 10px 20x 30px 40px(10px for top,20px for right,30px for bottom,40px for left)
+ Width
- 1 rem = 16px


+ Task 2:

===========

	- Index
	- Register
	- Login

===========


### Responsive Web Design

### Flex-Box


+ Display
	- none
	- inline
	- block
	- inline - block
	- flex
		- flex-wrap
		- justify-content
		- flex-direction
		- flex-flow
		
+ Position
	- static
	- relative
	- absolute
	- fixed
	- sticky
+ algin-content
+ align-items
+ align-self


### Media Quries

- Extra Small Devices (Mobiles)
	- max-width:600px
- small Devices (Large Phones or Small Tablets)
	- min-width:600px
	- max-width:768px
- Medium Devices (Small Laptops)
	- min-width:768px
- Large devices (Large Laptops or Desktops)
	- min-width:992px
- Extra Large Devices ()
	- min-width:1200px


...

+ Syntax
	- @media only screen (min-width:320px) and (max-width:500px){
		CSS Code
	}

...


### Bootstrap 4.6


- It is a CSS framework
- module (collections of functions and classes)
- package (Collection of modules)
- library (Collection of Packages)
- framework (Collection of library)

+ module --> Package --> Library --> FrameWork

+ Types of Modes
	- offline
	- online
		- CDN links

+ background-color - bg
+ text-white

+ Margin in Bootstrap(m-*(0-5))
	- 0 --> 0rem
	- 1 --> 0.25rem (4px)
	- 2 --> 0.5rem (8px)
	- 3 --> 1rem (16px)
	- 4 --> 1.5rem (24px)
	- 5 --> 3rem (48px)
	- ml-5 (margin-left)
	- m (margin in all directions)
	- mt (margin-top)
	- mb (margin-bottom)
	- mr (margin-right)

+ Padding (padding left -->pl-5)


+ colors
	- primary
	- secondary
	- info
	- success
	- Warning
	- danger
	- light
	- dark
	- white

+ We can use color classes for
	- Buttons (btn btn-primary)
	- text (text-white)
	- backgroud (bg-secondary)
	- alerts (alert alert-primary)

+ Grid System
	- sm (Small Devices)
	- md (Medium Devices)
	- lg (Large devices)
	- xl (Extra Large Devices)
+ Modal
+ Table



### JavaScript

+ In 1995 " Brendon Eich " Introduced JavaScript (ES-262)

+ Text-Based programming language and we can use in clint-side and server-side(Node.js)
  for dynamic web applications

+ JavaScript loosely tuple and dynamic Language
	- ECMA-Script (ES-6)
	- let & const
	- map()
	- arrow function
	- classes
	- spread Operator
	- next Parameter

+ DataTypes
	- Number
	- BigInt(2^53-1)
	- String
	- Boolean
	- Undefined
	- Null
	- Object
	- Array

+ Variables
	- var , let & const
	- Scope
		- Function level --> var
		- Block Level --> let & const
	- Redefine
		- var,let
		- const cannot redefine
	- Redeclare
		- var
		- const,let cannot redeclare

+ typeof()
	- Using before declaring a variable is called as Hoisting
+ object 

....

	{
		name="K"
	}

....

+ Array

### Alerts	

+ To generate Notification
	- alert
	- promt
	- confirm

+ console statements
	- `console.log()`
	- `console.info()`
	- `console.warn()`
	- `console.error()`

+ Spread Operator
	- To change Array Elements from one array to another array(Swap)
	...

	...variable name


	...

+ Rest Parameter
	+ to handle function parameters

...

...parameter

...

+ Destructuring of Array and Objects


+ Functions

- function with functionname
...

function demo(x,y){
	return x+y
}
demo()
...
- Anoymous Function
...
let demo = function(x,y){
    return x+y
}
console.log(demo(2,3))

- Arrow Function 
...

let demo = (x,y)=>{
    return x*y
}
console.log(demo(2,3))

...

+ for-in
	- To get Index Values
+ for-of
	- To get elements in a array

+ foreach() -->  (ES-5)
+ map -->  (ES-6)

### DOM

	- Document Object Model
	- Document
	- History
	- Window
	- Navigator 

+ DOM Methods
	- `getElementById()`
	- `getElementByClassName()`
	- `innerText`
	- `textContent`
	- `append`
	- `appendChild`
	- `InnerHTML`
	- `setAttribute()`
	- `classList`
	- `style`
	- `src`


### JSON                                                                                         
+ JavaScript Object Notation
	- To Exchange information between application and server

...
{
	"name":"X",
	"Salary":"6.5LPA",
	"designation":"Web Developer",
	"Mobile":9876543210
}
...

+ Ajax call or Promises (fetch API) or axios


