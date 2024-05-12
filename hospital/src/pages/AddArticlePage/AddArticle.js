import React, { useEffect, useState, useCallback, useRef, useContext } from 'react';
import { Navigate, useParams, useNavigate } from 'react-router-dom';
import { TextField, Paper, Button } from '@mui/material';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import axios from '../../api/axios';
import './AddArticle.scss'; 
import AuthenticationContext from '../../context/AuthenticationContext';


export const AddArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const inputFileRef = useRef(null);
  const isEditing = Boolean(id);

  const { isAuthenticated,  setIsAuthenticated} = useContext(AuthenticationContext);
  const {isAdmin, setIsAdmin}= useContext(AuthenticationContext);
  
  console.log(isAdmin)

  const handleChangeFile = async (event) => {
    try {
      const formData = new FormData();
      formData.append('file', event.target.files[0]);

      const { data } = await axios.post('files/upload', formData);
      setImageUrl(data.url);
    } catch (error) {
      console.error("Error uploading file: ", error);
      alert("Error, can't upload file");
    }
  };

  const onClickRemoveImage = () => setImageUrl('');

  const options = React.useMemo(
    () => ({
      spellChecker: false,
      maxHeight: '400px',
      autofocus: true,
      placeholder: 'Text...',
      status: false,
      autosave: {
        enabled: true,
        uniqueId: id || 'new-article', // Use the article ID or a default string if ID isn't available
        delay: 1000,
      },
    }),
    [id], // Include id in the dependency array so it updates if id changes
  );
  const onChange = useCallback((value) => setText(value), []);

  const onSubmit = async () => {
    const fields = {
      title,
      image: imageUrl,
      content: text,
    };
    let id_1;
    try {
      let response;
      if (isEditing) {
        response = await axios.put(`/articles/${id}`, fields);
      } else {
        response = await axios.post('/articles', fields);
        console.log(response.data)
        id_1 = response.data.articleId; 
        console.log()
      }
      navigate(`/articles/${id_1}`);
    } catch (error) {
      console.error("Error processing article:", error);
      alert('Error, cannot process article: ' + (error.response ? error.response.data : "No response"));
    }
  };
  



    return (
      !isAdmin ? (
        <Navigate to="/" />
      ) : (
        <Paper className="add-article" style={{ padding: 30 }}>
          <Button className="add-article__buttons-button" onClick={() => inputFileRef.current.click()} variant="outlined" size="large">
            Upload Image
          </Button>
          <input ref={inputFileRef} type="file" onChange={handleChangeFile} hidden />
          {imageUrl && (
            <>
              <Button className="add-article__buttons-button" variant="contained" color="error" onClick={onClickRemoveImage}>
                Delete
              </Button>
              <img className="add-article__image" src={imageUrl} alt="Uploaded" />
            </>
          )}
          <TextField
            className="add-article__title-input"
            variant="standard"
            placeholder="Article title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
          />
          <SimpleMDE className="add-article__editor" value={text} onChange={onChange} options={options} />
          <div className="add-article__buttons">
            <Button className="add-article__buttons-button" onClick={onSubmit} size="large" variant="contained">
              {isEditing ? 'Edit' : 'Publish'}
            </Button>
            <Button className="add-article__buttons-button" size="large">Cancel</Button>
          </div>
        </Paper>
      )
    );
  }

    
