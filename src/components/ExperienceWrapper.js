import '../App.css';

function ExperienceWrapper({title, logo, date, location, content, iconsize, coursework, education}) {
  return (
    <div className="information">
        <div class="container">
            <div class="row">
                <div class="col-2" style={{paddingRight: 0}}>
                    <div style={{width: iconsize, height: iconsize}} className="containerimage">
                        <img alt="icon" className="profileimage" src={logo} />
                    </div>
                </div>
                <div class="col-10" style={{paddingLeft: 0}}>         
                    <div className="header">
                        <text style={{fontSize: 25, fontWeight: 'bold'}} className="name">{title}</text>
                        <br/>
                        <div className="subheader">
                            <span className="date">
                                {date}
                            </span>
                            <span>
                                |
                            </span>
                            <span className="location">
                                {location}
                            </span>
                        </div>
                        <p className="content">
                            {education ? 
                                content : 
                                <ul style={{paddingLeft: 20}}>
                                    {content.map(item => (
                                        <li> {item} </li>
                                    ))}
                                </ul>    
                            }
                        </p>
                        <p className="content">
                            {coursework}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ExperienceWrapper;