function Skills() {
    const base = import.meta.env.BASE_URL;
    return (
        <div id="skills">
            <h2>Skills</h2>
            <section className="skill-section">
                <section className="skill">
                    <img className="skill-logo" src='${base}logos/C_Sharp_Logo_2023_cropped.svg' alt="" />
                    <div className="skill-list">
                        <p>OOP</p>
                        <p>ASP.NET</p>
                        <p>Entity Framework</p>
                        <p>Web API</p>
                        <p>AutoMapper</p>
                        <p>Scalar/Postman</p>
                        <p>JWT</p>
                    </div>
                </section>
                <section className="skill">
                    <img className="skill-logo" src="${base}logos/Microsoft_SQL_Server_2025_icon.svg" alt="" />
                    <div className="skill-list">
                        <p>SQL Server</p>
                        <p>SSMS</p>
                        <p>DDL/DML</p>
                        <p>Subqueries</p>
                        <p>SP</p>
                        <p>Transactions</p>
                    </div>
                </section>
                <section className="skill">
                    <img className="skill-logo" src="${base}logos/Microsoft_Azure.svg" alt="" />
                    <div className="skill-list">
                        <p>Azure CLI</p>
                        <p>Deploy Web App</p>
                        <p>KeyVault</p>
                    </div>
                </section>
                <section className="skill">
                    <img className="skill-logo" src="${base}logos/HTML5_logo_and_wordmark_white.svg" alt="" />
                    <div className="skill-list">
                        <p>Create SPA</p>
                        <p>Semantic HTML</p>
                        <p>WCAG</p>
                    </div>
                </section>
                <section className="skill">
                    <img className="skill-logo" src="${base}logos/CSS3_logo_and_wordmark_white.svg" alt="" />
                    <div className="skill-list">
                        <p>CSS Styling</p>
                        <p>Animation</p>
                        <p>CSS Pseudo-classes</p>
                        <p>Flex / Grid</p>
                    </div>
                </section>
                <section className="skill">
                    <img className="skill-logo" src="${base}logos/Javascript-shield.svg" alt="" />
                    <div className="skill-list">
                        <p>Fetch</p>
                        <p>JavaScript DOM</p>
                        <p>Event Listeners</p>
                        <p>React</p>
                    </div>
                </section>
                <section className="skill">
                    <img className="skill-logo" src="${base}logos/GitHub/GitHub_Invertocat_White.svg" alt="" />
                    <div className="skill-list">
                        <p>Git and Github repos</p>
                        <p>Git CLI</p>
                        <p>Pages</p>
                    </div>
                </section>
                
            </section>
        </div>
    )
}
export default Skills;