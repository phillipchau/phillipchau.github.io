import '../App.css';
import ProjectWrapper from './ProjectWrapper'
/*PennBook */
import home from '../media/PennBook/home.png'
import chat from '../media/PennBook/chat.png'
import news from '../media/PennBook/news.png'
import profile from '../media/PennBook/profile.png'
import status from '../media/PennBook/status.png'

/*Coviddashboard */
import covid_login from '../media/Dashboard/covid_login.png'
import covid_graphs from '../media/Dashboard/covid_graphs.png'
import covid_home from '../media/Dashboard/covid_home.png'
import covid_map from '../media/Dashboard/covid_map.png'
import covid_news from '../media/Dashboard/covid_news.png'
import covid_vaccine from '../media/Dashboard/covid_vaccine.png'

/*Personal*/
import personal from '../media/Personal/education.png'

/*Twitter*/
import bar from '../media/Twitter/bar.png'
import text from '../media/Twitter/text.png'

/*Crash*/
import type from '../media/Crash/type.png'
import importance from '../media/Crash/importance.png'

/*Election*/
import electionbox from '../media/Election/electionbox.png'
import medianbox from '../media/Election/medianbox.png'

function Projects() {
  //PennBook images
  const pennBook = [home, chat, news, profile, status]
  const dashboard = [ covid_home, covid_login, covid_graphs, covid_map, covid_news, covid_vaccine]
  const personalList = [personal]
  const twitter = [text, bar]
  const crash = [type, importance]
  const election = [medianbox, electionbox]
  return (
    <div className="Projects">
      <ProjectWrapper 
        title="PennBook" 
        date= "November 2020 - December 2020"
        description = "For the final project of Nets212: Scalable Cloud Computing, my team and I built a fully functional, secure and scalable Facebook clone with features such as user profiles, group and direct chats, friends, status updates and posts. Furthermore, using a Kaggle news dataset of over 20,000+ news articles, we created a news feed page and a scalable recommendaiton algorithm through Apache Spark."
        tech = "Node.js, Express.js, JQuery, AWS DynamoDB, AWS S3, AWS EC2"
        images = {pennBook}
      />
      <ProjectWrapper 
        title="COVID19 Dashboard" 
        date= "April 2021 - May 2021"
        description = "My team and I created a visualization tool to analyze how socioeconoimc factors such as poverty or race impacted COVID19 cases and deaths across America throughout the past year. Our app enabled user authentication via Facebok and Google using Firebase, allowed users to input filters based on socioeconomic factors in map and plot pages to analyze cases, deaths and vaccination rates and displayed real time COVID19 news via the NYT and Twitter APIs"
        tech = "React, Node.js, Express.js, SQL, AWS DynamoDB"
        images = {dashboard}
      />
      <ProjectWrapper 
        title="Personal Website" 
        date= "May 2021"
        description = "To enhance my frontend skills, I built this react-based personal website in order to publicly display information such as my education, experiences and past projects! "
        tech = "React"
        images = {personalList}
      />
      <ProjectWrapper 
        title="Understanding the Pervasiveness of Fake News During the 2016 Presidential Election" 
        date= "April 2021"
        description = "In this project, I used data visualization, natural language processing and data modeling in order to gain a better understanding on the factors that contribute to the pervasiveness of fake news and trained a classifier to determine fake vs real news."
        tech = "Python, Pandas, Plotly, Sklearn, NLTK "
        images = {twitter}
      />
      <ProjectWrapper 
        title="Identifying Key Predictors of Crash Outcome Severity using PennDOT Crash Data" 
        date= "November 2020 - December 2020"
        description = "To enhance my frontend skills, I built this react-based personal website in order to publicly display information such as my education, experiences and past projects! "
        tech = "Python, Pandas, Seaborn, Sklearn, SQL "
        images = {crash}
      />
      <ProjectWrapper 
        title="Analysis of the Relationship Between Socioeconomic Factors and Voter Associations Across Counties in America" 
        date= "October 2020"
        description = "To enhance my frontend skills, I built this react-based personal website in order to publicly display information such as my education, experiences and past projects! "
        tech = "Python, Pandas, Numpy, Sklearn, Seaborn "
        images = {election}
      />
    </div>
  );
}

export default Projects;