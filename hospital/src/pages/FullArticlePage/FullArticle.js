import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import ReactMarkdown from "react-markdown";
import { Button, Paper } from "@mui/material";

const styles = {
  articleContainer: {
    padding: '20px',
    margin: '20px auto',
    maxWidth: '800px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
  },
  articleTitle: {
    fontSize: '28px',
    color: '#333',
    marginBottom: '15px',
  },
  articleImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '4px',
    marginBottom: '20px',
  },
  articleContent: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#666',
  },
  backButton: {
    marginTop: '20px',
    backgroundColor: '#4caf50',
    color: 'white',
  }
};

export const FullArticle = () => {
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`/articles/${id}`);
        setArticle(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching article:', error);
        alert('Error while getting the article');
      }
    };

    fetchArticle();
    
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!article) {
    return <div>No article found.</div>;
  }

  return (
    <Paper style={styles.articleContainer}>
      <h1 style={styles.articleTitle}>{article.title}</h1>
      {console.log(article)}
      {article.image && (
        <img
          style={styles.articleImage}
          src={article.image}
          alt={article.title}
        />
      )}
      <div style={styles.articleContent}>
        <ReactMarkdown>{article.content}</ReactMarkdown>
      </div>
      <Button
        style={styles.backButton}
        variant="contained"
        onClick={() => navigate('/')}
      >
        Go Back
      </Button>
    </Paper>
  );
};
