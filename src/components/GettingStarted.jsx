import React from "react";
import '../App.css'

function GettingStarted() {
    return (
        <div className="blog1">
        <p>
          As you may already know that self improvement is becoming neccessary in the world.<br />
          At the same time it is becoming harder and harder to know exactly the right source 
          to get the right information you need. For the most engineers i would suggest to read
          from official documentation of the tool you are trying to learn. But for beginners its
          hard to understand the documentation. Here i want to share some as well as high level guidance<br />
          on how get started. Most of the informations provided here i persoanlly went through and studied <br />
          when i prepearing for interviews or just learning new tools in order to integrate them into my<br />
          personal projects on platforms like GitHub</p>
          <h4>Front End Engineering</h4>
          <p>
            <a href="https://khan4019.github.io/front-end-Interview-Questions/"> That is Just Dude 1</a> <br/>
              <a href="https://www.thatjsdude.com/interview/">That is Just Dude 2</a>  
          </p>
          <h4>Python and SQL Knowledge</h4>
          <p>
            <a href="https://www.geeksforgeeks.org/sql-using-python/"> SQL using Python 1</a> <br/>
            <a href="https://towardsdatascience.com/sql-in-python-for-beginners-b9a4f9293ecf">SQL using Python 2</a> <br/>
            <a href="https://medium.com/jbennetcodes/how-to-rewrite-your-sql-queries-in-pandas-and-more-149d341fc53e"> Rewrite your SQL queries in Python using Pandas</a> <br/> 
            <a href="https://datascience.stackexchange.com/questions/34357/why-do-people-prefer-pandas-to-sql"> why Pandas over SQL</a>
          </p>
        </div>
    );
  }

export default GettingStarted;