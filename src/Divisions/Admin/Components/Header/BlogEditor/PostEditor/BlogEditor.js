import React,{useState} from 'react';
import { EditorState, convertToRaw} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './blogeditor.css';
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
function BlogEditor() {
  
  const [userInfo, setuserInfo] = useState({
    title: '',
  });

  const onChangeValue = (e) => {
    setuserInfo({
      ...userInfo,
      [e.target.name]:e.target.value
    });
  } 

  let editorSummaryState = EditorState.createEmpty();
  let editorBodyState = EditorState.createEmpty();

  const [summary, setSummary] = useState(editorSummaryState);

  const [body, setBody] = useState(editorBodyState);


  const onEditorSummaryStateChange = (editorSummaryState) => {
    setSummary(editorSummaryState);
  }
  

  const onEditorBodyStateChange = (editorBodyState) => {
    setBody(editorBodyState);
  }

  const [isError, setError] = useState(null);
  const addDetails = async (event) => {
    try {
      event.preventDefault();
      event.persist();
      if(userInfo.summary.value.length < 10){
        setError('Required, Add Summary Minimum length 10 characters');
        console.log('Required, Add Summary Minimum length 10 characters');
        return;
      }

      if(userInfo.body.value.length < 50){
        setError('Required, Add Body Minimum length 50 characters');
        console.log('Required, Add Body Minimum length 50 characters');
        return;
      }

    console.log({
            title: userInfo.title,
            summary: userInfo.summary.value,
            body: userInfo.body.value
          });
    } catch (error) { throw error;}    
  } 
   
return ( 
<Conatiner>
<EditorForm className='postEditor' onSubmit={addDetails}>
              <label> Title <span className="required"> * </span> </label>
              <input type="text" name="title" value={userInfo.title} onChange={onChangeValue}  className="form-control" placeholder="Title" required />
              <label> Summary <span className="required"> * </span> </label>
                <Editor
                  editorState={summary}
                  toolbarClassName="toolbarClassName"
                  wrapperClassName="wrapperClassName"
                  editorClassName="editorClassName"
                  onEditorStateChange={onEditorSummaryStateChange}
                />
              <textarea style={{display:'none'}} disabled ref={(val) => userInfo.summary = val} value={draftToHtml(convertToRaw(summary.getCurrentContent())) } />


              <label> Body <span className="required"> * </span> </label>
                <Editor
                  editorState={body}
                  toolbarClassName="toolbarClassName"
                  wrapperClassName="wrapperClassName"
                  editorClassName="editorClassName"
                  onEditorStateChange={onEditorBodyStateChange}
                />
              <textarea style={{display:'none'}} disabled ref={(val) => userInfo.body = val} value={draftToHtml(convertToRaw(body.getCurrentContent())) } />
            {isError !== null && <ErrorMessage> {isError} </ErrorMessage>}
              <button type="submit" className="btn"> Submit  </button>
        </EditorForm>
</Conatiner>
)
}
export default BlogEditor;
