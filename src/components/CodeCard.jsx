export function CodeCard() {
    return (
        <div className="code-card">
            <div className="code-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
            </div>
            <pre className="code-body">
                <code>
                    <span className="keyword">public class</span> <span className="class-name">Developer</span>{'\n'}
                    {'{'}{'\n'}
                    {'  '}<span className="keyword">public string</span> Name {'{'} <span className="keyword">get</span>; <span className="keyword">set</span>; {'}'} = <span className="string">"Thiago de Souza"</span>;{'\n'}
                    {'  '}<span className="keyword">public string</span> Role {'{'} <span className="keyword">get</span>; <span className="keyword">set</span>; {'}'} = <span className="string">".NET Developer"</span>;{'\n'}
                    {'  '}<span className="keyword">public</span> <span className="class-name">List</span>&lt;<span className="keyword">string</span>&gt; Skills {'{'} <span className="keyword">get</span>; <span className="keyword">set</span>; {'}'} = <span className="keyword">new</span>(){'\n'}
                    {'  '}{'{'}{'\n'}
                    {'    '}<span className="string">"C#"</span>, <span className="string">".NET"</span>, <span className="string">"SQL"</span>, <span className="string">"Dapper"</span>, <span className="string">"Docker"</span>,{'\n'}
                    {'    '}<span className="string">"Git"</span>, <span className="string">"REST API"</span>, <span className="string">"Angular"</span>, <span className="string">"TypeScript"</span>{'\n'}
                    {'  '}{'}'};{'\n'}
                    {'  '}<span className="keyword">public bool</span> Passionate =&gt; <span className="boolean">true</span>;{'\n'}
                    {'}'}
                </code>
            </pre>
        </div>
    );
}