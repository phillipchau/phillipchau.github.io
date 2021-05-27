import '../App.css';
import ExperienceWrapper from './ExperienceWrapper'
const experienceData = require('../experience.json')
function Experience() {
  return (
    <div className="Experience">
      <h2 style={{textAlign: 'left', marginTop: 20}}>Experience</h2>
      <hr className="line" />
      {experienceData['Experience'].map(entry => (
        <ExperienceWrapper title={entry['title']} logo={entry['logo']} date={entry['date']} location={entry['location']} content={entry['content']} iconsize={entry['iconsize']} education={false}/>
      )) }
    </div>
  );
}

export default Experience;