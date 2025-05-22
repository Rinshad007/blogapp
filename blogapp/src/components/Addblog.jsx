import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box
} from '@mui/material';

function Addblog() {
  const [formData, setFormData] = useState({
    blogName: '',
    description: '',
    author: ''
  });

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Blog submitted (not actually saved)');
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Add Blog
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Blog Name"
          name="blogName"
          value={formData.blogName}
          onChange={handleChange}
          required
        />
        <TextField
          label="Description"
          name="description"
          multiline
          rows={4}
          value={formData.description}
          onChange={handleChange}
          required
        />
        <TextField
          label="Author Name"
          name="author"
          value={formData.author}
          onChange={handleChange}
          required
        />
        <Button type="submit" variant="contained">Submit</Button>
      </Box>
    </Container>
  );
}



export default Addblog