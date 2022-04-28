import React,{useEffect, useState} from 'react'
import axios from 'axios';
import Loading from './Loading';
import MuiCom from './MuiCom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const Item = styled(MuiCom)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));




export default function FuctionCom() {
    const [Books,setBooks] = useState([])
    const [Load,setLoad] = useState(false)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/').then((data)=>{
            setBooks(data.data)
            setLoad(true)
        })
    },[])

  return (
    <div>
        <Container maxWidth="lg">
        
            { Load 
            ?
            <Grid container spacing={1}>
                {Books.map((book)=>(
                    <Grid item lg={3} sm={2}>
                        <Item title= {book.title} body={book.body}></Item>
                    </Grid>
                ))}
            </Grid>
            :  
            <Loading />
            }
        
        </Container>
    </div>
  )
}
