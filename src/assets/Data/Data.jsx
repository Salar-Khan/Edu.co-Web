import Ai from "../images/AI.jpg"
import Marketing from "../images/Marketing.jpg"
import UI from "../images/UI.jpg"
import Accounting from "../images/Accounting.jpg"
import Trading from "../images/Trading.jpg"
import Software from "../images/Software.jpg"

export   const navItems =[
    {
        id:1,
        to:'/',
        title:'Home'
    },
    {
        id:2,
        to:'/about',
        title:'About'
    },
    {
        id:3,
        to:'/courses',
        title:'Courses'
    },
    {
        id:4,
        to:'/contact',
        title:'Contact'
    },
]
export const Bootcamps=[
    {  name:'Newyork',id:1 },
    {  name:'London',id:2 },
    {  name:'Melbourne',id:3 },
    {  name:'Washington DC',id:4}
]
export const Partners =[
    {name:'Udemy',id:1},
    {name:'Coursera',id:2},
    {name:'Codecademy',id:3},
    {name:'ITU Tech',id:4}
]
export const Careers =[
    {name:"IT Jobs",id:1},
    {name:"Teaching",id:2},
    {name:"Science",id:3},
    {name:"Arts",id:4}
]
export const Support =[
    {name:"Terms and Conditions",id:1},
    {name:"Community Support",id:2},
    {name:"Product Support",id:3},
  
]
export const CourseData =[
    {
        id:1,
        name:"Software Development",
        description:" This course provides a comprehensive introduction to software development, equipping students with the essential Software skills .",
        img: Software,
        price:"$19.99"
    },
    {
        id:2,
        name:"Trading",
        description:"view: This course offers a comprehensive introduction to trading in financial markets, covering essential concepts, strategies, and tools.",
        img: Trading,
        price:"$19.99"
    },
    {
        id:3,
        name:"AI",
        description:"This course provides a foundational understanding of artificial intelligence, exploring its core concepts, techniques, and applications.",
        img : Ai,
        price:"$19.99"
    },
    {
        id:4,
        name:"Digital Marketing",
        description:" This course provides a comprehensive overview of digital marketing strategies and tools used to effectively promote products and services online. ",
        img : Marketing,
        price:"$19.99"
    },
    {
        id:5,
        name:"Accounting",
        description:" This course provides a comprehensive introduction to the principles and practices of accounting.",
        img : Accounting,
        price:"$19.99"
    },
    {
        id:6,
        name:"UI UX Design",
        description:" This course provides a comprehensive introduction to User Interface (UI) and User Experience (UX) design.",
        img : UI,
        price:"$19.99"
    },
]