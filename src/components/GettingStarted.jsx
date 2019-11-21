import React from "react";
import '../App.css'
import mypic from '../assets/4.jpg'

function GettingStarted() {
    return (
        <div className="blog1">
        
         <h4>Little personal but still important</h4>
          <p>
          <img src={mypic} alt="mypic" className="mypic"/>
            Everyone has their own story. Knowingly that more challenges and experiences are waiting for me in the future, i want to share my couple cents on helping someone to never lose hope and fight for your future. 
            I was really good at chemistry in high school years and even had my own room to study. I didn't have to attend regular classes because school wanted me to represent them in the olympiads. 
            That lead me to study abroad (Istanbul, Turkey) and pursue chemistry as a career. But overtime things got changed, i couldn't enjoy classes. I felt like i knew most of the topics already from competing in olympiads. 
            So i started looking for other inspirations. Luckily not bad ones. Even though i used sit and study a lot, because of my fathers genetics (he was a pro wrestler) i had a good sense and enthusiast in all kinds of sports. 
            In Turkey most of the students/teenagers play soccer so it got my curiosity. From rejection of teams to my final years in univeristy i was able to represent our city's soccer with other city teams. 
            At that time that was a huge achievement for me. At that point i understood if i believe in something and give my best there is nothing to stop me. You might not be a legend but you will be your best at one thing and believe me you will be proud of it.
            That will affect your upcoming decisions in your life. <br /><br />
            Now sports aside, i remember thinking how to spent my evenings effectively. Becuase i lost my motivation to chemistry. I was always a science lover or at least a thinker and planner. But now thats gone. 
            Thanks to internet i was able to find something that i enjoy. I wasn't in Silicon Valley at that time so few used to talk about tech. I started spending hours just creating static webpages with HTML and CSS. 
            It didn't have to function i just loved what i created and how it looked. Long story short that curiosity got me into unpaid internships, even unpaid full timers and doing my masters in computer science. 
            I told myself that i won't be accepting money from my parents. I got a loan of 3k$ in my home country and flew to United States to pursue my masters. By the way i paid off that loan in 2 years. Oh boy if i knew that is going to be a tough epxerience. 
            But i used to never complain. After arriving to Missouri i had to pay my school a good amount of money for 3 month. In my first month i understood i can't afford that. I was miserable because in my home country i had everything. My family was well funded. 
            But i always wanted to build my life on my own. After that 1st semester i transferred to cheap grad school in Chicago. I was a bit releaved financially but worst was waiting for me. In that semester school told us that they couldn't get accrediation from goverenment so they told us to transfer or wait until the end of semester. 
            By that time i was working on CPT outside the school and that allowed me to be flexible to some point. Most of the schools don't have a right to offer CPTs from the first semester so i had to stay otherwise i will lose my job which will lead me to lose everyhting. 
            Becuase i had to pay my school 1200$ every month plus my personal expenses and my only savior was my job. One day grad school told me that they are in talks with Roosevelt Unviversity and Chicago State University. I ended up chosing Roosevlet University because it was closer to where i live and it was private. 
            Hardest thing in this journey is not always financial situations. Its the standard you put in yourself. Always try to be the best at what you do and set expectations properly so you don't get burned out or discoureged.<br />
            </p>

            <h4>Technical Part</h4>

            <p> Throught this years i was enough lucky to have a sense to discover and improve myself continuously. I put up these links together because i am seeing a lot of bootcamp or short term school graduates not being able to sit for long hours to prioratize the topics and study better. </p>
           
            <p>
                1. If you are lacking in CS concepts. Refere to:<br/>
                <a href="https://teachyourselfcs.com/?fbclid=IwAR1uoQtwyofWos9BpDtIfOQKcq9vKx8uc4ae6neNLcT-dTFp3-jIUElq6wg#algorithms" target="_blank" rel="noopener noreferrer"> teach yourself cs</a> <br/>
            </p>
            <p>
                2. Read also more about APIs and HTTP protocols. Either you want to learn GraphQL or Rest API they all valuable knowledge for any engineer.<br/>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview" target="_blank" rel="noopener noreferrer"> HTTP MDN</a> <br/>
                <a href="https://graphql.org/learn/" target="_blank" rel="noopener noreferrer"> GraphQL</a> <br/>
                <a href="https://restfulapi.net/" target="_blank" rel="noopener noreferrer"> Restful</a> <br/>
            </p>
            <p>
                3.  Then all comes down to who want to be? Front End / Back End / Full Stack / Data / Mobile / Android / DevOps Engineer or Data Scientist and so on. <br />
                <a href="https://medium.com/level-up-web/front-end-vs-back-end-vs-full-stack-development-78267f545121" target="_blank" rel="noopener noreferrer"> front-end vs back-end vs full-stack</a> <br />
            </p>
            <p>
                4. After that you have to choose language and tools for that particular career. Assuming you already grasp CS knowledge. 
                This topics is a little bit tricky because tools may change or disepear overtime. In general chose one of the core languages for back end [Java, Python, C, C++, C#, Ruby, PHP etc]. 
                For front end consider [JavaScript/TypeScript, HTML/CSS, NodeJs (you can use this in backend too)] <br />
            </p>
            <p>
                5. After you learn basics of language pick up frameworks and tools. Choose either one or more by researching the market or the you ones loved. 
                Here i will write tools that i have familiraity with. Python [Flask, Django]. FrontEnd [ReacJS, AngularJS, VueJS, EmberJS, Express, Bootstrap etc]. 
                After you chosen a library or framework learn every library that related to that framework. <br />
            </p>
            <p>
                6. Learn testing Frontend [Jest, Jasime, Chai etc] Python [unittesting, pytest etc] <br />
            </p>
            <p>
                7. If you are more inclined backend please learn also SQL. You will be dealing with databases soon or later. 
                Databases also keep changing. First learn relational databases [MySQL, Oracle etc]  then chose according to your career. 
                For example you might like or you company might use NoSQL database like MongoDB. Or your company might use SQLite in conjuction with Python. 
                If you are more towards to data science then consider learning how you can use Pandas with/over SQL. My company used graph database for example and i had to learn neo4j for that. 
                But overall syntax won't be too dramatic if you learn well relational databases.<br />
                <a href="https://www.w3schools.com/sql/" target="_blank" rel="noopener noreferrer"> SQL Basics</a> <br />
                <a href="https://docs.mongodb.com/" target="_blank" rel="noopener noreferrer"> MongoDB Docs</a> <br />
                <a href="https://medium.com/jbennetcodes/how-to-rewrite-your-sql-queries-in-pandas-and-more-149d341fc53e" target="_blank" rel="noopener noreferrer"> Pandas vs SQL statements</a> <br/>
            </p> 
            <p>     
                8. Always keep sharp your knowledge of data structures and algorithms. That will help you on the long run.<br />
                <a href="https://www.interviewcake.com/data-structures-and-algorithms-guide?utm_source=triplebyte" target="_blank" rel="noopener noreferrer"> data structures and algorithms guide</a> <br/>
                <a href="https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/" target="_blank" rel="noopener noreferrer"> mit.edu</a> <br/>
                <a href="https://github.com/jwasham/coding-interview-university#data-structures" target="_blank" rel="noopener noreferrer"> jwasham github</a> <br/>
                <a href="http://mimoza.marmara.edu.tr/~msakalli/cse706_12/SkienaTheAlgorithmDesignManual.pdf" target="_blank" rel="noopener noreferrer"> Skiena The Algorithm Design Manual</a> <br/>
                <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer"> leetcode</a><br />
                <a href="https://www.glassdoor.com" target="_blank" rel="noopener noreferrer"> glassdoor</a><br />
            </p>
            <p>
                9. If you want to study interactively for your interviews utilize platforms like pramp.com / interviewing.io / testdome.com<br/>
                <a href="https://www.pramp.com" target="_blank" rel="noopener noreferrer"> pramp.com </a> <br/>
                <a href="https://interviewing.io/" target="_blank" rel="noopener noreferrer"> interviewing.io </a> <br />
                <a href="https://www.testdome.com" target="_blank" rel="noopener noreferrer"> testdome.com </a> <br />
            </p>
            <p>
                10. Finally, try to do side projects as much as possible. Even if it doesn't make sense at the beggining. You can't master one thing
                  by just passively looking or reading it. You can't learn programming by just watching YouTube videos. 
                  Put project on the side and try to implement new features you learned to that project. 
                  You will be amazed knowing how much you actually learned just from wathing or listening. Because many things will
                  break if you want it or not. Good luck in your endeavours!
            </p>
    </div>
  );
}

export default GettingStarted;