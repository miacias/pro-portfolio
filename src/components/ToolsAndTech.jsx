import { 
  TbBrandMysql,
  TbBrandRedux,
  TbSql,
  TbBrandTypescript,
  TbBrandVercel,
  TbBrandVite,
  TbBrandTeams,
  TbSparkles,
} from "react-icons/tb";
import {
  BiLogoGraphql,
  BiLogoJquery,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoMarkdown,
  BiTransfer,
} from "react-icons/bi";
import {
  FaBootstrap,
  FaChrome,
  FaCode,
  FaDatabase,
  FaDocker,
  FaFigma,
  FaGit,
  FaGithub,
  FaNodeJs,
  FaReact,
  FaServer,
  FaSlack,
  FaTools,
  FaWindows,
} from "react-icons/fa";
import {
  SiAxios,
  SiExpress,
  SiHandlebarsdotjs,
  SiHeroku,
  SiInsomnia,
  SiJest,
  SiJsonwebtokens,
  SiMantine,
  SiMocha,
  SiMongodb,
  SiMongoose,
  SiNextdotjs,
  SiOracle,
  SiPostman,
  SiSass,
  SiSequelize,
  SiSocketdotio,
  SiSwagger,
  SiNpm,
  SiNvm,
  SiCanva,
  SiExcalidraw,
  SiAdobephotoshop,
  SiJira,
  SiConfluence,
  SiZoom,
  SiDiscord,
  SiMacos,
} from "react-icons/si";
import { RiJavascriptLine } from "react-icons/ri";
import { DiResponsive } from "react-icons/di";
import { IoAccessibilitySharp } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";
import { LuFile } from "react-icons/lu";

export const ToolsAndTech = () => {
  return (
    <>
      <h2 className="section-header">Tools & Tech</h2>
      
      <div className="skills-grid">
        {/* Languages */}
        <div className="skill-category">
          <h3 className="skillset section-header">
            <FaCode className="skill-icon" />
            Languages
          </h3>
          <ul>
            <li><RiJavascriptLine className="tech-icon" /> JavaScript</li>
            <li><TbBrandTypescript className="tech-icon" /> TypeScript</li>
            <li><BiLogoJquery className="tech-icon" /> jQuery</li>
            <li><TbSql className="tech-icon" /> SQL</li>
            <li><BiLogoHtml5 className="tech-icon" /> HTML5</li>
            <li><BiLogoCss3 className="tech-icon" /> CSS3</li>
            <li><BiLogoMarkdown className="tech-icon" /> Markdown</li>
          </ul>
        </div>

        {/* Frontend */}
        <div className="skill-category">
          <h3 className="skillset section-header">
            <FaReact className="skill-icon" />
            Frontend
          </h3>
          <ul>
            <li className="subcategory">Frameworks</li>
            <li><FaReact className="tech-icon" /> React</li>
            <li><SiNextdotjs className="tech-icon" /> Next.js</li>
            <li><TbBrandVite className="tech-icon" /> Vite</li>
            <li><SiHandlebarsdotjs className="tech-icon" /> Handlebars.js</li>
            
            <li className="subcategory">Styling</li>
            <li><BiLogoCss3 className="tech-icon" /> CSS3</li>
            <li><SiSass className="tech-icon" /> Sass</li>
            <li><FaBootstrap className="tech-icon" /> Bootstrap</li>
            <li><LuFile className="tech-icon" /> Telerik Kendo UI</li>
            <li><LuFile className="tech-icon" /> ReactStrap</li>
            <li><SiMantine className="tech-icon" /> Mantine UI</li>
            
            <li className="subcategory">Testing & Tools</li>
            <li><SiJest className="tech-icon" /> Jest</li>
            <li><FaReact className="tech-icon" /> React Testing Library</li>
            <li><TbBrandRedux className="tech-icon" /> Redux</li>
            <li><SiAxios className="tech-icon" />Axios</li>
            <li><LuFile className="tech-icon" /> Validate.js</li>
            <li><BiTransfer className='tech-icon' />RESTful APIs</li>
            <li><DiResponsive className='tech-icon' />Responsive Design</li>
            <li><IoAccessibilitySharp className='tech-icon' />Web Accessibility</li>
          </ul>
        </div>

        {/* Backend */}
        <div className="skill-category">
          <h3 className="skillset section-header">
            <FaServer className="skill-icon" />
            Backend
          </h3>
          <ul>
            <li className="subcategory">Frameworks</li>
            <li><FaNodeJs className="tech-icon" /> Node.js</li>
            <li><SiExpress className="tech-icon" /> Express.js</li>
            
            <li className="subcategory">Testing</li>
            <li><SiMocha className="tech-icon" /> Mocha</li>
            <li><BiTransfer className='tech-icon' />SuperTest</li>
            
            <li className="subcategory">Authentication & APIs</li>
            <li><SiJsonwebtokens className="tech-icon" /> JWT Authentication</li>
            <li><BiTransfer className='tech-icon' />RESTful APIs</li>
            <li><BiLogoGraphql className="tech-icon" /> GraphQL</li>
            <li><SiSocketdotio className="tech-icon" /> Socket.io</li>
            
            <li className="subcategory">Documentation & Logging</li>
            <li><SiSwagger className="tech-icon" /> Swagger</li>
            <li><LuFile className="tech-icon" /> Log4js</li>
            <li><LuFile className="tech-icon" /> Axiom</li>
          </ul>
        </div>

        {/* Databases */}
        <div className="skill-category">
          <h3 className="skillset section-header">
            <FaDatabase className="skill-icon" />
            Databases
          </h3>
          <ul>
            <li className="subcategory">SQL Databases</li>
            <li><TbBrandMysql className="tech-icon" /> MySQL</li>
            <li><SiSequelize className="tech-icon" /> Sequelize ORM</li>
            <li><SiOracle className="tech-icon" /> Oracle PL/SQL</li>
            
            <li className="subcategory">NoSQL Databases</li>
            <li><SiMongodb className="tech-icon" /> MongoDB</li>
            <li><SiMongoose className="tech-icon" /> Mongoose</li>
          </ul>
        </div>

        {/* Tools & Platforms */}
        <div className="skill-category">
          <h3 className="skillset section-header">
            <FaTools className="skill-icon" />
            Tools & Platforms
          </h3>
          <ul>
            <li className="subcategory">Development Tools</li>
            <li><VscVscode className="tech-icon" /> VS Code</li>
            <li><SiPostman className="tech-icon" /> Postman</li>
            <li><SiInsomnia className="tech-icon" /> Insomnia</li>
            <li><SiMongodb className="tech-icon" /> MongoDB Compass</li>
            <li><SiNpm className="tech-icon"/> npm</li>
            <li><SiNvm className="tech-icon"/> nvm (Node Version Manager)</li>
            <li><FaChrome className="tech-icon"/>Chrome DevTools</li>
            <li><FaGit className="tech-icon" /> Git</li>
            <li><LuFile className="tech-icon" /> Microsoft SQL Server Management Studio</li>
            <li><LuFile className="tech-icon" /> Oracle SQL Developer</li>
            
            <li className="subcategory">Deployment</li>
            <li><FaDocker className="tech-icon" /> Docker</li>
            <li><SiHeroku className="tech-icon" /> Heroku</li>
            <li><TbBrandVercel className="tech-icon" /> Vercel</li>
            
            <li className="subcategory">Design Tools</li>
            <li><FaFigma className="tech-icon" /> Figma</li>
            <li><SiCanva className="tech-icon" /> Canva</li>
            <li><SiExcalidraw className="tech-icon" /> Excalidraw</li>
            <li><SiAdobephotoshop className="tech-icon" /> Adobe Photoshop</li>
            
            <li className="subcategory">Project Management</li>
            <li><SiJira className="tech-icon" /> Jira</li>
            <li><SiConfluence className="tech-icon" /> Confluence</li>
            
            <li className="subcategory">Communication</li>
            <li><TbBrandTeams className="tech-icon" /> Microsoft Teams</li>
            <li><FaSlack className="tech-icon" /> Slack</li>
            <li><SiZoom className="tech-icon" /> Zoom</li>
            <li><SiDiscord className="tech-icon" /> Discord</li>
            
            <li className="subcategory">Platforms</li>
            <li><FaGithub className="tech-icon" /> GitHub</li>
            <li><FaWindows className="tech-icon" /> Windows</li>
            <li><SiMacos className="tech-icon" /> macOS</li>
          </ul>
        </div>

        {/* Best Practices */}
        <div className="skill-category">
          <h3 className="skillset section-header">
            <TbSparkles className="skill-icon" />
            Best Practices
          </h3>
          <ul>
            <li className="subcategory">Methodologies</li>
            <li><LuFile className="tech-icon" /> Agile Methodologies (Scrum, Kanban)</li>
            <li><LuFile className="tech-icon" /> Test-Driven Development (TDD)</li>
            <li><LuFile className="tech-icon" /> Continuous Integration/Continuous Deployment (CI/CD)</li>
            <li><LuFile className="tech-icon" /> Pair Programming</li>
            <li><LuFile className="tech-icon" /> Code Reviews</li>
            
            <li className="subcategory">Version Control</li>
            <li><FaGit className="tech-icon" /> Git</li>
            
            <li className="subcategory">Design & Architecture</li>
            <li><LuFile className="tech-icon" /> MVC Architecture</li>
            <li><DiResponsive className="tech-icon" /> Responsive Web Design</li>
            <li><LuFile className="tech-icon" /> Mobile-First Development</li>
            
            <li className="subcategory">Quality & Security</li>
            <li><LuFile className="tech-icon" /> Password Manager (e.g. Keeper)</li>
            <li><LuFile className="tech-icon" /> Environment Variables for Sensitive Data</li>
            <li><LuFile className="tech-icon" /> Obfuscation of Client-Side Code</li>
          </ul>
        </div>
      </div>
    </>
  );
};