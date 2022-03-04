import React from 'react';
import chronicler from './chronicler_preview.png';
import weatherDashboard from './weather-dashboard-preview.png';
import techBlog from './tech-blog-preview.png';
import restaurantPage from './restaurant-page-preview.png';
import fourStor from './fourstor-preview.png';
import odinLibrary from './library-preview.png';
import teamProfile from './team-profile-generator-preview.png';
import ProjectCard from './ProjectCard';

export default function Projects() {
	return (
		<section id="projects" className="container section d-flex">
			<h2 className="pe-3 border-end col-2 text-end">Projects</h2>

			<div className="section-content container-fluid d-flex flex-wrap">
				<ProjectCard
					title="The Chronicler"
					languages="MySQL, Handlebars, NodeJS"
					liveUrl="https://thechronicler.herokuapp.com/"
					gitHubUrl="https://github.com/xndrbrgs/the_chronicler"
					img={chronicler}
					alt="a preview of The Chronicler"
				/>

				<ProjectCard
					title="Weather Dashboard"
					languages="JavaScript"
					liveUrl="https://awidener3.github.io/weather-dashboard/"
					gitHubUrl="https://github.com/awidener3/weather-dashboard"
					img={weatherDashboard}
					alt="a preview of a weather dashboard project"
				/>

				<ProjectCard
					title="Tech Blog"
					languages="JavaScript, SQL, MVC"
					liveUrl="https://awidener-tech-blog.herokuapp.com/"
					gitHubUrl="https://github.com/awidener3/tech-blog"
					img={techBlog}
					alt="preview of a tech blog application"
				/>

				<ProjectCard
					title="Restaurant Page"
					languages="JavaScript, NodeJS, Webpack"
					liveUrl="https://awidener3.github.io/restaurant-page/"
					gitHubUrl="https://github.com/awidener3/restaurant-page"
					img={restaurantPage}
					alt="a preview of a restaurant website project"
				/>

				<ProjectCard
					title="fourSTOR"
					languages="JavaScript, Foundations"
					liveUrl="https://pr1me-e1gh7.github.io/fourstor/"
					gitHubUrl="https://github.com/pr1me-e1gh7/fourstor"
					img={fourStor}
					alt="preview of fourStor"
				/>

				<ProjectCard
					title="Odin's Library"
					languages="HTML, CSS, JavaScript"
					liveUrl="https://awidener3.github.io/odin-library/"
					gitHubUrl="https://github.com/awidener3/odin-library"
					img={odinLibrary}
					alt="a preview of a library project"
				/>

				<ProjectCard
					title="Team Profile Generator"
					languages="JavaScript, Inquirer, Jest"
					liveUrl="https://github.com/awidener3/team-profile-generator"
					gitHubUrl="https://github.com/awidener3/team-profile-generator"
					img={teamProfile}
					alt="preview of a team profile generator"
				/>

				<p>
					Click on project image for a live preview of the
					application, or the title for the GitHub repo!
				</p>
			</div>
		</section>
	);
}