import { Container, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import React , { useState } from "react";

function Home () {
    const [post,setPosts] =useState([]);
    useState(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then (res =>res.json())
    .then (data => setPosts(data.slice(0, 10)));
    },[]);
    return (
        <Container sx={{mt: 4}}>
            <Typography variant="h4" gutterBottom>
                Home
            </Typography>
            <Paper>
             <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>TITLE</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {post.map(post =>(
                        <TableRow key={post.id}>
                            <TableCell>{post.id}</TableCell>
                            <TableCell>{post.title}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
             </Table>
            </Paper>
            </Container>
                );
            }
            
export default Home;