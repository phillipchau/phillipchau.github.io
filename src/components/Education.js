import '../App.css';
import ExperienceWrapper from './ExperienceWrapper'
const educationData = require('../education.json')
function Education() {
  return (
    <div className="Experience">
      <h2 style={{textAlign: 'left', marginTop: 20}}>Education</h2>
      <hr className="line" />
      {educationData['Education'].map(entry => (
        <ExperienceWrapper title={entry['title']} logo={entry['logo']} date={entry['date']} location={entry['location']} content={entry['content']} coursework={entry['coursework']} education={true}/>
      )) }
      
    </div>
  );
}

export default Education;