import React, {useState} from 'react';
import {Box, Button, TextField, Typography} from "@mui/material";

const UrlShorter = () => {
  const [url, setUrl] = useState('');
  const [longUrl, setLongUrl] = useState(null);
  const [shortUrl, setShortUrl] = useState(null);
  const [error, setError] = useState(null);

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setShortUrl(null);
    try {
      const response = await fetch('/short-url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({initialUrl: url}),
      });

      if (!response.ok) {
        setError("Something went wrong")
        return;
      }
      setLongUrl(url);
      console.log('response:', response);

      const data = await response.json();
      console.log('Shortened URL:', data.shortUrl);
    } catch (error) {
      setError("Something went wrong")
      console.error('Error:', error.message);
    }
  };

  return (
    <Box sx={{
      minHeight: '85vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Box sx={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <form onSubmit={handleSubmit}
              style={{width: '500px', display: 'flex', flexDirection: 'column', gap: '10px'}}>
          <TextField
            label="Paste URL"
            variant="outlined"
            fullWidth
            value={url}
            onChange={handleUrlChange}
          />
          {error && <Typography color="error">{error}</Typography>}
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ textTransform: 'none' }}
            disabled={!url}
          >
            Shorten URL
          </Button>
        </form>
        {longUrl && <Typography>
          Your URL: {longUrl}
        </Typography>}
        {shortUrl &&
          <Typography>
            Short URL: {shortUrl}
          </Typography>}
      </Box>
    </Box>
  );
};

export default UrlShorter;