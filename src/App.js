import React, { Component } from 'react';
import piechart from './PieChart.svg';
import dp from './img/dp.jpg';
import './App.css';

import cvdata from './data.json';

import Skillbar from './components/SkillBar/SkillBar';
import Section from './components/Section/Section';
import ImgLabel from './components/ImgLabel/ImgLabel';
import Exp from './components/Exp/Exp';

class App extends Component {
	componentWillMount() {
		this.setState({ cvdata });
	}

	render() {
		const skills = this.state.cvdata.skills.map((skill, key) => {
			return (<Skillbar key={key} name={skill.name} value={skill.value} />);
		});

		const langs = this.state.cvdata.langs.map((lang, key) => {
			return (<Skillbar key={key} name={lang.name} value={lang.value} />);
		});

		const info = this.state.cvdata.info.map((info, key) => {
			return (<ImgLabel key={key} img={info.img} label={info.label} />);
		});

		const exp = this.state.cvdata.exp.map((expobj, key) => {
			return (<Exp key={key} period={expobj.period} unit={expobj.unit} details={expobj.details}/>);
		});

		const proskills = this.state.cvdata.proskills.map((skill, key) => {
			return (<li key={key}>{skill}</li>);
		});

		const projects = this.state.cvdata.projects.map((project, key) => {
			return (
				<div className="Proj" key={key}>
					<div className="Proj-title">{project.title}</div>
					<div className="Proj-desc">{project.desc}</div>
				</div>
			);
		});

		return (
			<div className="App">
				<div className="App-sidebar">
					<div className="App-sidebar-content">
						<Section>
							<img src={dp} className="App-dp" alt="This is me." title="Hi, there." />
						</Section>
						<Section>
							<div className="App-info">
								{info}
							</div>	
						</Section>
						<Section name="PERSONAL SKILLS">
							{skills}
						</Section>
						<Section name="LANGUAGES">
							{langs}
						</Section>
						<Section name="HOBBIES">
							<img src="" title="Hobbies" alt="Graffiti, Gaming, Pool, Soccer, Art & Craft, Traveling, Poetry, Cooking, Photography" />
						</Section>
						<Section name="WHY ME?">
							<div className="App-blah">
								Well, I have the expertise and expereience of web and game development. I offer
								the skillset to develop high performance applications with technical invovations
								and advanced knowledge of developer applications, tools, methodologies and best 
								practises.
							</div>	
						</Section>
						<Section name="COMPETENCE">
							<div className="App-competence">
								<div className="App-chart">
									<img src={piechart} title="Everything at once." alt="Programming, Designing, Database, Testing" />
								</div>
								<div className="App-legends">
									<div className="App-legend"><div className="App-marker green"></div><div className="App-legname">Programming</div></div>
									<div className="App-legend"><div className="App-marker orange"></div><div className="App-legname">Designing</div></div>
									<div className="App-legend"><div className="App-marker gray"></div><div className="App-legname">Database</div></div>
									<div className="App-legend"><div className="App-marker yellow"></div><div className="App-legname">Testing</div></div>
								</div>
							</div>
						</Section>
						<div className="App-links">
							<a href="https://github.com/div5yesh"><div className="fa fa-github App-link"></div></a>
							<a href="https://www.linkedin.com/in/div5yesh"><div className="fa fa-linkedin-square App-link"></div></a>
							<a href="https://twitter.com/div5yesh"><div className="fa fa-twitter App-link"></div></a>
							<a href="skype:div5yesh"><div className="fa fa-skype App-link"></div></a>
							<a href="https://500px.com/div5yesh"><div className="fa fa-500px App-link"></div></a>
							<a href="http://divchitroda.com/docs/DIVYESH%20CHITRODA%20-%20CV.pdf"><div className="fa fa-download App-link"></div></a>
						</div>
					</div>
					<div className="App-main">
						<div className="App-main-content">
							<div className="App-title">Divyesh K Chitroda</div>
							<div className="App-desgn">Software Development Engineer</div>
							<Section name="PROFILE">
								<div className="App-profile">
								I’m Divyesh Chitroda & I’m a highly focused 25yrs old Software Engineer at Play Games24x7, Mumbai. 
								I owe my career to the computers & I appreciate complex and research driven work. 
								Being meticulous and prettifying the big picture as well, I do elevate the stakes. 
								Led a team and has been a team player.
								</div>	
							</Section>
							<Section name="EXPERIENCE">
								{exp}
							</Section>
							<Section name="PROFESSIONAL SKILLS">
								<div className="App-proskills">
									{proskills}
								</div>	
							</Section>
							<Section name="PROJECTS">
								{projects}
							</Section>
						</div>
					</div>
				</div>
			</div>
		);
  	}
}

export default App;
