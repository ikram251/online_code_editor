import React, { useState } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as ControlledEditor } from 'react-codemirror2'
import { FaAngleDown, FaCog } from 'react-icons/fa'


export default function Editors(props) {
  const {
    language,
    displayName,
    value,
    onChange
  } = props
  const [open, setOpen] = useState(true)

  function handleChange(editor, data, value) {
    onChange(value)
  }

  return (
    <div className={`editor-container ${open ? '' : 'collapsed'}`}>
      <div className="editor-title">
      <button
          type="button"
          className="settings-btn"
        >
          {/* <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} /> */}
          <FaCog/>

        </button>
        {displayName}
        <div>
        <button
          type="button"
          className="down-arrow-btn"
          
        >
          <ul>
             <li className="dropdown-editor">
              <a href="javascript:void(0)" className="dropbtn-editor" className="bar-down"><FaAngleDown/></a>
              <div className="dropdown-content-editor">
                <a href="#" onClick={() => setOpen(prevOpen => !prevOpen)}>Minimize and maximize</a>
              </div>
            </li>
          </ul>
        </button>
        </div>
        
          {/* <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} /> */}
          {/* o/p */}
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: 'material',
          lineNumbers: true
        }}
      />
    </div>
  )
}