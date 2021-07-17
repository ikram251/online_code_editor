
import React, { useState, useEffect } from 'react';
import Editors from './Editors'
import useStorage from '../hooks/useStorage'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
  
function App() {
  const [html, setHtml_editor] = useStorage('html', '')
  const [css, setCss_editor] = useStorage('css', '')
  const [js, setJs_editor] = useStorage('js', '')
  const [srcDoc, setSrcDoc_editor] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc_editor(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    }, 250)

    return () => clearTimeout(timeout)
  }, [html, css, js])

  return (
    <>
    <div className="fullpage">
    <Router>
        <div className="title">File Explorer</div>
        <Switch>
          <Link to="/html_editor" className="file-explore">HTML</Link>
        </Switch>
        <Switch>
            <Link to="/css_editor" className="file-explore">CSS</Link>
        </Switch>
        <Switch>
            <Link to="/JS_editor" className="file-explore">JS</Link>
        </Switch>
        <Switch>
          <Link to="/all_editors" className="file-explore">All Editors</Link>
          <Link to="#">Login</Link>
        </Switch>
        <Switch>
          <Link to="#" className="login active">Login</Link>
        </Switch> 

        <Route path="/html_editor">
          <div className="pane top-pane html-editor">
              <Editors
                language="xml"
                displayName="HTML"
                value={html}
                onChange={setHtml_editor}
              />
          </div>
        </Route>

        <Route path="/css_editor">
          <div className="pane top-pane html-editor">
            <Editors
              language="css"
              displayName="CSS"
              value={css}
              onChange={setCss_editor}
             />
            </div>
        </Route>

        <Route path="/js_editor">
          <div className="pane top-pane html-editor">
            <Editors
              language="javascript"
              displayName="JAVASCRIPT"
              value={js}
              onChange={setJs_editor}
            />
            </div>
        </Route>
        <Route path="/all_editors">
          <div className="pane top-pane">
            <Editors
              language="xml"
              displayName="HTML"
              value={html}
              onChange={setHtml_editor}
            />
            <Editors
              language="css"
              displayName="CSS"
              value={css}
              onChange={setCss_editor}
            />
            <Editors
              language="javascript"
              displayName="JAVASCRIPT"
              value={js}
              onChange={setJs_editor}
            />
            </div>
         </Route>
        <Route path="/" exact>
          <div className="pane top-pane">
            <Editors
              language="xml"
              displayName="HTML"
              value={html}
              onChange={setHtml_editor}
            />
            <Editors
              language="css"
              displayName="CSS"
              value={css}
              onChange={setCss_editor}
            />
            <Editors
              language="javascript"
              displayName="JAVASCRIPT"
              value={js}
              onChange={setJs_editor}
            />
            </div>
         </Route>
       </Router>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
        
      </div>
      <ul className="footer">
          <li><a class="active-1" href="#CopyLink">COPY LINK</a></li>
      </ul>
      </div>
      
    </>
  )
}

export default App;