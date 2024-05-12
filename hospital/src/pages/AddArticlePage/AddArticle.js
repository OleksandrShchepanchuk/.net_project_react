import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Navigate, useParams, useNavigate } from 'react-router-dom';
import { TextField, Paper, Button } from '@mui/material';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import axios from '../../api/axios';
import './AddArticle.scss'; 


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

  useEffect(() => {
    async function fetchAuthStatus() {
      try {
        const response = await axios.get('/api/auth/validate');
        setIsAuth(response.data.isAuthenticated);
      } catch (error) {
        console.error("Authentication validation failed:", error);
        setIsAuth(true);
      } finally {
        setAuthChecked(true);
      }
    }
  
    fetchAuthStatus();
  }, []);

  const handleChangeFile = async (event) => {
    try {
      const formData = new FormData();
      formData.append('image', event.target.files[0]);
      const { data } = await axios.post('/upload', formData);
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
      placeholder: 'Введите текст...',
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
      },
    }),
    [],
  );
  
  const onChange = useCallback((value) => setText(value), []);

  const onSubmit = async () => {
    try {
      const fields = { title, imageUrl, text };
      const { data } = isEditing
        ? await axios.patch(`/articles/${id}`, fields)
        : await axios.post('/articles', fields);

      const _id = isEditing ? id : data.id;
      navigate(`/articles/${_id}`);
    } catch (error) {
      console.warn("Error processing article: ", error);
      alert('Error, cannot create article');
    }
  };

  if (!authChecked) {
    return <div>Loading...</div>;
  }

  if (!isAuth) {
    return <Navigate to='/' />;
  }

  return (
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
          {/* <img className="add-article__image" src={`http://localhost:4444${imageUrl}`} alt="Uploaded" /> */}
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
  );
};
