const Projects = ({ pageRefs }) => {
  return (
    <div
      className='projects'
      ref={(el) => (pageRefs.current = { ...pageRefs.current, projects: el })}
    >
      <div className='projects_wrap'>
        <div className='projects_item'>
          <div className='projects_item_img'>
            <img src='assets/img/project-1.png' alt='' />
          </div>
          <div className='projects_item_info'>
            <h2>Photographer's Page</h2>
            <ul className='projects_item_tags'>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <p>
              Photographer's page was an attempt at a single page brochure type
              site, using only vanilla tools, it includes custom built mosaic
              layout and a carousel.
            </p>
            <div className='item_buttons'>
              <button className='item_view-site'>View Site</button>
              <button className='item_view-code'>View Code</button>
            </div>
          </div>
        </div>
        <div className='projects_item'>
          <div className='projects_item_img'>
            <img src='' alt='' />
          </div>
          <div className='projects_item_info'>
            <h2>My Portfolio</h2>
            <ul className='projects_item_tags'>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Sass</li>
            </ul>
            <p>The page you are currently on.</p>
            <div className='item_buttons'>
              <button className='item_view-site'>View Site</button>
              <button className='item_view-code'>View Code</button>
            </div>
          </div>
        </div>
        <div className='projects_item_mini'>
          <div className='projects_item_info'>
            <h2>Workis Job Pinger</h2>
            <ul className='projects_item_tags'>
              <li>JavaScript</li>
              <li>Puppeteer API</li>
              <li>Discord API</li>
            </ul>
            <p>
              While being a pretty simple application it has been the most
              practical of all my coding challenges. Workis Pinger scans the
              site for jobs that I am interested in and notifies me instantly
              using discord.
            </p>
            <div className='item_buttons'>
              <button className='item_view-code'>View Code</button>
            </div>
          </div>
        </div>
        <div className='projects_item_mini'>
          <div className='projects_item_info'>
            <h2>Calculator</h2>
            <ul className='projects_item_tags'>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <p>A simple calculator app.</p>
            <div className='item_buttons'>
              <button className='item_view-code'>View Code</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
