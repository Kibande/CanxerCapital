import React,{useState} from 'react';
import { EditorState, convertToRaw} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './posteditor.css';
import styled from 'styled-components';

const Conatiner=styled.div`
height: 500px;
`
const ErrorMessage= styled.div`
color: #f44336;
font-size: 17px;
font-weight: 600;
margin-bottom: 17px;
`;

const EditorForm=styled.form`
border: 1px solid var(--PrimaryColor);
padding:1rem;
box-shadow: 0 6px 15px 0 rgb(64 79 104 / 5%);
`;
function PostEditor() {
  
  const [userInfo, setuserInfo] = useState({
    title: '',
  });

  const onChangeValue = (e) => {
    setuserInfo({
      ...userInfo,
      [e.target.name]:e.target.value
    });
  } 

  let editorDescriptionState = EditorState.createEmpty();
  let editorIncludesState = EditorState.createEmpty();
  let editorExcludesState = EditorState.createEmpty();
  const [description, setDescription] = useState(editorDescriptionState);
  const [includes, setIncludes] = useState(editorIncludesState);
  const [excludes, setExcludes] = useState(editorExcludesState);

  const onEditorDescriptionStateChange = (editorDescriptionState) => {
    setDescription(editorDescriptionState);
  }

  const onEditorIncludesStateChange = (editorIncludesState) => {
    setIncludes(editorIncludesState);
  }

  const onEditorExcludesStateChange = (editorExcludesState) => {
    setExcludes(editorExcludesState);
  }
  
  const [isError, setError] = useState(null);
  const addDetails = async (event) => {
    try {
      event.preventDefault();
      event.persist();
      if(userInfo.description.value.length < 50){
        setError('Required, Add description Minimum length 50 characters');
        return;
      }

    console.log({
            title: userInfo.title,
            country: userInfo.country,
            region: userInfo.region,
            description: userInfo.description.value,
            includes: userInfo.includes.value,
            excludes: userInfo.excludes.value,
          });
    } catch (error) { throw error;}    
  } 
   
return ( 
<Conatiner>
<EditorForm className='postEditor' onSubmit={addDetails}>

              <label> Title <span className="required"> * </span> </label>
              <input type="text" name="title" value={userInfo.title} onChange={onChangeValue}  className="form-control" placeholder="Title" required />
             
             
             
              <label> Country <span className="required"> * </span> </label>
              <input type="text" name="country" value={userInfo.country} onChange={onChangeValue}  className="form-control" placeholder="Country" required />
             
             

             
              <label> Region <span className="required"> * </span> </label>
              <input type="text" name="region" value={userInfo.title} onChange={onChangeValue}  className="form-control" placeholder="Region" required />
             

             
              <label> Description <span className="required"> * </span> </label>
                <Editor
                  editorState={description}
                  toolbarClassName="toolbarClassName"
                  wrapperClassName="wrapperClassName"
                  editorClassName="editorClassName"
                  onEditorStateChange={onEditorDescriptionStateChange}
                />
              <textarea style={{display:'none'}} disabled ref={(val) => userInfo.description = val} value={draftToHtml(convertToRaw(description.getCurrentContent())) } />


              <label> Includes <span className="required"> * </span> </label>
                <Editor
                  editorState={includes}
                  toolbarClassName="toolbarClassName"
                  wrapperClassName="wrapperClassName"
                  editorClassName="editorClassName"
                  onEditorStateChange={onEditorIncludesStateChange}
                />
              <textarea style={{display:'none'}} disabled ref={(val) => userInfo.includes = val} value={draftToHtml(convertToRaw(includes.getCurrentContent())) } />



              <label> Excludes <span className="required"> * </span> </label>
                <Editor
                  editorState={excludes}
                  toolbarClassName="toolbarClassName"
                  wrapperClassName="wrapperClassName"
                  editorClassName="editorClassName"
                  onEditorStateChange={onEditorExcludesStateChange}
                />
              <textarea style={{display:'none'}} disabled ref={(val) => userInfo.excludes = val} value={draftToHtml(convertToRaw(excludes.getCurrentContent())) } />
<span style={{'padding':'1rem'}}>

              <button type="button" className="btn"> Add Day  </button>
</span>
            <br/>
            <br/>
              <hr/>
            <br/>
            <br/>


            {isError !== null && <ErrorMessage> {isError} </ErrorMessage>}
              <button type="submit" className="btn"> Submit  </button>
        </EditorForm>
</Conatiner>
)
}
export default PostEditor;
